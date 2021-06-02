import { HOME_PATH } from 'routes/paths';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import { IMatch } from 'structure/interfaces/IMatch';
import { IPastInterviewsData } from 'structure/interfaces/IPastInterviews';
import { INTERVIEW_ROLES, SCHOOLS, TYPES_OF_INTERVIEW } from 'utils/constants/values';
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

  static fromInputToMock(staticInputs: any, dynamicInputs: any) {
    const mappedValues = { availability: [] };
    for (const element of staticInputs) {
      let value = null;
      if (element.apiMap === 'role') {
        value = INTERVIEW_ROLES[element.state];
      } else if (element.apiMap === 'type') {
        value = TYPES_OF_INTERVIEW[element.state];
      } else {
        value = element.state;
      }
      //@ts-expect-error
      mappedValues[element.apiMap] = value;
    }

    for (const id in dynamicInputs.state) {
      const intervals: any = [];
      for (const interval of dynamicInputs.state[id].interval) {
        intervals.push(interval.replace(' PT', ''));
      }
      let prev = mappedValues.availability;
      prev.push({
        //@ts-expect-error
        day: dynamicInputs.state[id]['day'],
        //@ts-expect-error
        interval: intervals,
      });
    }

    return {
      preferences: mappedValues,
    };
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

  static fromAPItoMatch(data: any) {
    let parsedData: IMatch[] = [];

    for (var elem of data.pools) {
      let parsed: IMatch = {
        uid: elem.uid,
        name: elem.person,
        languages: elem.language,
        interviewType: elem.job,
        role: elem.position,
        folder: Data.getFolderUrl(elem.folder),
      };
      // TODO: Fix the problem with the new date format
      // console.log(elem.availability);
      for (var available of elem.availability) {
        const day = available.day;
        if (typeof day !== 'undefined') {
          const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

          //@ts-expect-error
          parsed[capitalizedDay] = available.interval.map((interval: any) => {
            const intervals = interval.split('-');
            return { startHour: intervals[0], endHour: intervals[1] };
          });
        }
      }
      parsedData.push(parsed);
    }
    console.log(parsedData);
    return parsedData;
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
}
