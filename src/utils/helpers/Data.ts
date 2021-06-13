import { HOME_PATH } from 'routes/paths';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import { IMatch } from 'structure/interfaces/IMatch';
import { IPastInterviewsData } from 'structure/interfaces/IPastInterviews';
import { JOBS, POSITIONS, SCHOOLS } from 'utils/constants/values';
import DateTime from 'utils/helpers/DateTime';

export default class Data {
  static getSchools() {
    return Object.keys(SCHOOLS);
  }

  static getFolderUrl(id: string) {
    return `https://drive.google.com/drive/folders/${id}`;
  }

  static formatDocumentUrl(id: string) {
    return id ? `https://docs.google.com/document/d/${id}` : '';
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

  static fromInputToConfirmInterview(id: string, timestamp: string) {
    return {
      interviewUid: id,
      interviewDate: timestamp,
    };
  }

  static fromInputToCancelInterview(id: string, timestamp: string) {
    return {
      cancellation: {
        interviewUid: id,
        interviewDate: timestamp,
      },
    };
  }

  static fromInputToCreateInterview(
    id: string,
    userId: string,
    timestamp: string,
    pending: number
  ) {
    return {
      interview: {
        poolId: id,
        intervieweeUid: userId,
        date: timestamp,
        pending: pending,
      },
    };
  }

  static fromInputToCreateInterviewee(file: any, school: string) {
    // TODO: Debug why the file is getting corrupted in the server
    return {
      interviewee: {
        resume: file,
        school: SCHOOLS[school],
      },
    };
  }

  static fromInputToUpdateInterviewee(file: any, school: string) {
    // TODO: Validate when the user does not provide a school
    return {
      interviewee: {
        resume: file,
        school: SCHOOLS[school],
      },
    };
  }

  static fromInputToCreateInterviewer(mentioned: boolean, description: string) {
    return {
      interviewer: {
        isMentioned: mentioned,
        description: description,
      },
    };
  }

  static fromInputToUpdateInterviewer(mentioned: boolean, description: string) {
    return {
      interviewer: {
        isMentioned: mentioned,
        description: description,
      },
    };
  }

  static fromAPItoIncomingInterviews(data: any) {
    let parsedData: IIncomingInterviewsData[] = [];
    for (var interview of data.interviews) {
      const parsedTimestamp = DateTime.timestampToDate(interview.date);
      let interviewInfo: IIncomingInterviewsData = {
        id: interview.uid,
        name: 'Unknown', //TODO: Check if is necessary to get the name of the person
        date: DateTime.formatDateToDay(parsedTimestamp),
        time: DateTime.formatDateToHours(parsedTimestamp),
        document: Data.formatDocumentUrl(interview.document),
        place: interview.room,
        confirmed: interview.confirmed,
      };
      parsedData.push(interviewInfo);
    }
    return parsedData;
  }

  static parseAPIDataToPastInterview(apiData: any) {
    let pastInterviews: IPastInterviewsData[] = [];
    for (var pastInterview of apiData.interviews) {
      pastInterviews.push({
        date: DateTime.timestampWithoutTimezoneToStr(pastInterview.date),
        document: Data.formatDocumentUrl(pastInterview.doc),
      });
    }
    return pastInterviews;
  }

  static parseInputToPoolAPI(staticInputs: any, dynamicInputs: any) {
    const mappedValues = { availability: '' };
    for (const element of staticInputs) {
      let value = null;
      if (element.apiMap === 'job') {
        value = JOBS[element.state];
      } else if (element.apiMap === 'position') {
        value = POSITIONS[element.state];
      } else {
        value = element.state;
      }
      //@ts-expect-error
      mappedValues[element.apiMap] = value;
    }

    let allIntervals: any = [];

    for (const id in dynamicInputs.state) {
      const poolDate = DateTime._getDate(dynamicInputs.state[id]['day']);
      let intervals: any = [];
      for (const interval of dynamicInputs.state[id].interval) {
        intervals.push(`${poolDate} ${interval}`);
      }
      // TODO: Research how to change from ) to ] to be able to serialize in an easier way
      allIntervals.push(`"[${intervals.join(',')})"`);
    }
    mappedValues.availability = `{${allIntervals.join(',')}}`;

    return {
      preferences: mappedValues,
    };
  }

  static _parseRangesToArrayByDay(ranges: Array<string>) {
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

  static parseAPIDataToPool(data: any) {
    let parsedData: any[] = [];

    for (var pool of data.pools) {
      let poolData = {
        uid: pool.id,
        interviewee: pool.interviewee_id,
        languages: pool.language,
        interviewType: pool.job,
        role: pool.position,
        folder: Data.getFolderUrl(pool.folder),
        company: pool.company,
        awaiting: pool.awaiting,
        availability: Data._parseRangesToArrayByDay(pool.availability),
      };
      parsedData.push(poolData);
    }
    return parsedData;
  }

  static parseInputToInterviewAPI(
    intervieweeId: string,
    dateOfInterview: string
  ) {
    return {
      interview: {
        interviewee_id: intervieweeId,
        date: dateOfInterview,
      },
    };
  }
}
