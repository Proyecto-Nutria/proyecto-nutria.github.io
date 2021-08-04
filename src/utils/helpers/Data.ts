import { HOME_PATH } from 'routes/paths';
import { JOBS, POSITIONS, STRING_TYPE } from 'utils/constants/values';
import DateTime from 'utils/helpers/DateTime';
import { IncomingInterview, PastInterview, Pool } from 'utils/ts/dataTypes';

export default class Data {
  static fromEnumToArray(enumType: any) {
    return Object.keys(enumType)
      .map((key: any) => enumType[key])
      .filter(value => typeof value === STRING_TYPE) as string[];
  }

  static callMutationAndRedirectToHome(
    mutation: any,
    parameters: any,
    history: any
  ) {
    mutation({
      variables: parameters,
    })
      .then(() => history.push(HOME_PATH))
      .catch((error: any) => {
        console.error(error);
      });
  }

  static _formatDocumentUrl(id: string) {
    return id ? `https://docs.google.com/document/d/${id}` : '';
  }

  //TODO: Bug the date of the interview is not displaying correctly
  static parseAPItoIncomingInterviews(apiData: any): IncomingInterview[] {
    let allIncomingInterviews: IncomingInterview[] = [];
    for (var interview of apiData.interviews) {
      const parsedTimestamp = DateTime.timestampToDate(interview.date);
      let interviewInfo: IncomingInterview = {
        id: interview.id,
        // TODO: The bug is with parsedTimestamp, changed to raw info instead
        // date: DateTime.formatDateToDay(parsedTimestamp),
        date: interview.date.split('T')[0],
        time: DateTime.formatDateToHours(parsedTimestamp),
        document: Data._formatDocumentUrl(interview.document),
        room: interview.room,
        confirmed: interview.confirmed,
      };
      allIncomingInterviews.push(interviewInfo);
    }
    return allIncomingInterviews;
  }

  static parseAPIDataToPastInterview(apiData: any): PastInterview[] {
    let pastInterviews: PastInterview[] = [];
    for (var pastInterview of apiData.interviews) {
      pastInterviews.push({
        date: DateTime.timestampWithoutTimezoneToStr(pastInterview.date),
        document: Data._formatDocumentUrl(pastInterview.doc),
      });
    }
    return pastInterviews;
  }

  static parseInputToPoolAPI(
    interviewInformation: any,
    availabilityInformation: any
  ): Record<string, Record<string, string>> {
    const mappedValues: Record<string, string> = {};

    for (const information of interviewInformation) {
      const keyNameInAPI: string = information.apiMap;
      let value = information.state;
      if (keyNameInAPI === 'job') {
        value = JOBS[value];
      } else if (keyNameInAPI === 'position') {
        value = POSITIONS[value];
      }
      mappedValues[keyNameInAPI] = value;
    }

    let intervieweeAvaliability: string[] = [];
    const availabilityIntervals: Record<
      string,
      Record<string, any>
    > = availabilityInformation.state;

    for (const availabilityId in availabilityIntervals) {
      let intervals: string[] = [];
      const intervalInfo: any = availabilityIntervals[availabilityId];
      const poolDate: string = DateTime._getDate(intervalInfo['day']);
      for (const interval of intervalInfo.interval) {
        intervals.push(`${poolDate} ${interval}`);
      }
      // TODO: Research how to change from ) to ] to be able to serialize in an easier way
      intervieweeAvaliability.push(`"[${intervals.join(',')})"`);
    }
    mappedValues.availability = `{${intervieweeAvaliability.join(',')}}`;

    return {
      preferences: mappedValues,
    };
  }

  static _parseRangesToArrayByDay(ranges: Array<string>): Array<string> {
    let rangesByDay: { [day: string]: Array<string> } = {};
    let availableDates: Array<string> = [];

    ranges.forEach(range => {
      let intervals = JSON.parse(range.replace(')', ']')).sort();
      intervals.forEach((interval: string) => {
        const intervalInfo = interval.split(' ');
        const day = intervalInfo[0];
        const hour = intervalInfo[1];
        if (day in rangesByDay) {
          rangesByDay[day].push(hour);
        } else {
          rangesByDay[day] = [hour];
        }
      });
    });

    for (const [day, intervals] of Object.entries(rangesByDay)) {
      for (var i = 0; i < intervals.length; i += 2) {
        const beginInterval = DateTime.createMomentumDateFromStr(
          `${day} ${intervals[i]}`
        );
        const endInterval = DateTime.createMomentumDateFromStr(
          `${day} ${intervals[i + 1]}`
        );
        var hourDifference = DateTime.hourDifferenceBetweenTwoIntervals(
          beginInterval,
          endInterval
        );

        availableDates.push(DateTime.momentumDateToPool(beginInterval));
        for (var hour = 1; hour <= hourDifference; hour += 1) {
          const gapInterval = DateTime.addHoursToInterval(hour, beginInterval);
          availableDates.push(DateTime.momentumDateToPool(gapInterval));
        }
      }
    }
    return availableDates;
  }

  static _getFolderUrl(id: string) {
    return `https://drive.google.com/drive/folders/${id}`;
  }

  static parseAPIDataToPool(apiData: any): Pool[] {
    let parsedData: Pool[] = [];

    for (var pool of apiData.pools) {
      let poolData: Pool = {
        uid: pool.id,
        intervieweeId: pool.interviewee_id,
        languages: pool.language,
        interviewType: pool.job,
        role: pool.position,
        folder: Data._getFolderUrl(pool.interviewee.folder),
        company: pool.company,
        awaiting: pool.awaiting,
        availability: Data._parseRangesToArrayByDay(pool.availability),
      };
      parsedData.push(poolData);
    }
    return parsedData;
  }
}
