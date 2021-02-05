import {
  SCHOOLS,
  INTERVIEW_ROLES,
  TYPES_OF_INTERVIEW,
} from 'utils/constants/values';

import DateTime from 'utils/helpers/DateTime';
import { HOME_PATH } from 'routes/paths';
import { IMatch } from 'structure/interfaces/IMatch';
import { IIncomingInterviewsData } from 'structure/interfaces/IIncomingInterviews';
import { IPastInterviewsData } from 'structure/interfaces/IPastInterviews';

export default class Data {
  static getSchools() {
    return Object.keys(SCHOOLS);
  }

  static getFolderUrl(id: string) {
    return `https://drive.google.com/drive/folders/${id}`;
  }

  static getDocumentUrl(id: string) {
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
      const intervals = [];
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
        interviewType: elem.type,
        role: elem.role,
        folder: Data.getFolderUrl(elem.folder),
      };
      for (var available of elem.availability) {
        const day = available.day;
        const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

        //@ts-expect-error
        parsed[capitalizedDay] = available.interval.map((interval: any) => {
          const intervals = interval.split('-');
          return { startHour: intervals[0], endHour: intervals[1] };
        });
      }
      parsedData.push(parsed);
    }
    return parsedData;
  }

  static fromAPItoIncoming(data: any) {
    let parsedData: IIncomingInterviewsData[] = [];
    for (var elem of data.interviews) {
      const currentTime = DateTime.timestampToDate(elem.date);
      let parsed: IIncomingInterviewsData = {
        id: elem.uid,
        name: 'Unknown', //TODO: Check if is necessary to get the name of the person
        date: DateTime.formatDateToDay(currentTime),
        time: DateTime.formatDateToHours(currentTime),
        document: Data.getDocumentUrl(elem.doc),
        place: elem.room,
        confirmed: elem.confirmed,
      };
      parsedData.push(parsed);
    }
    return parsedData;
  }

  static fromAPItoPast(data: any) {
    let parsedData: IPastInterviewsData[] = [];
    for (var elem of data.interviews) {
      let parsed: IPastInterviewsData = {
        date: DateTime.formatDateToDay(DateTime.timestampToDate(elem.date)),
        document: Data.getDocumentUrl(elem.doc),
      };
      parsedData.push(parsed);
    }
    return parsedData;
  }
}
