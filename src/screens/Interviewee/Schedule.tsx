import IntervieweeSchedule from 'components/Interviewee/Schedule/IntervieweeSchedule';
import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { INTERVIEWEE_SCHEDULE_COPY } from 'utils/constants/copy';
import { ENTER_POOL } from 'utils/constants/endpoints';
import {
    CREATE_ACTION, DELETE_ACTION, UPDATE_DAY_ACTION, UPDATE_END_ACTION, UPDATE_START_ACTION
} from 'utils/constants/reducer';
import { COMPANIES, JOBS, POSITIONS, PROGRAMMING_LANGUAGES } from 'utils/constants/values';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';
import { avaliabilityInfo, scheduleInterviewStaticField as staticField } from 'utils/ts/dataTypes';

import { useMutation } from '@apollo/client';

const reducer = (
  availability: avaliabilityInfo,
  action: any
): avaliabilityInfo => {
  switch (action.type) {
    case CREATE_ACTION: {
      const newSchedule = JSON.parse(
        JSON.stringify(availability)
      ) as avaliabilityInfo;
      const indexes = Object.keys(availability) as unknown as Array<number>;
      const newIndex = indexes.length === 0 ? 0 : Math.max(...indexes) + 1;
      newSchedule[newIndex] = { day: null, interval: ['', ''] };
      return newSchedule;
    }

    case DELETE_ACTION: {
      const newSchedule = JSON.parse(JSON.stringify(availability));
      delete newSchedule[action.id];
      return newSchedule as avaliabilityInfo;
    }

    case UPDATE_START_ACTION: {
      const newSchedule = JSON.parse(
        JSON.stringify(availability)
      ) as avaliabilityInfo;
      newSchedule[action.id].interval[0] = action.start;
      return newSchedule;
    }

    case UPDATE_END_ACTION: {
      const newSchedule = JSON.parse(
        JSON.stringify(availability)
      ) as avaliabilityInfo;
      newSchedule[action.id].interval[1] = action.end;
      return newSchedule;
    }

    case UPDATE_DAY_ACTION: {
      const newSchedule = JSON.parse(
        JSON.stringify(availability)
      ) as avaliabilityInfo;
      newSchedule[action.id].day = action.day;
      return newSchedule;
    }

    default:
      throw new Error();
  }
};

const IntervieweeMock = () => {
  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL);

  const [interviewType, setInterviewTypeValue] = useState('');
  const [rol, setRolValue] = useState('');
  const [numberInterviews, setNumberInterviewsValue] = useState(1);
  const [languages, setLanguagesValue] = useState('');
  const [company, setCompanyValue] = useState('');
  const [schedule, dispatchSchedule] = useReducer(reducer, {});

  const positionField: staticField = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.positionLabel,
    values: Object.keys(POSITIONS),
    state: interviewType,
    setter: setInterviewTypeValue,
    apiMap: 'position',
  };
  const roleField: staticField = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.roleLabel,
    values: Object.keys(JOBS),
    state: rol,
    setter: setRolValue,
    apiMap: 'job',
  };
  const numberOfInterviewTypeField: staticField = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.numberOfInterviewsLabel,
    values: [1, 2, 3],
    state: numberInterviews,
    setter: setNumberInterviewsValue,
    apiMap: 'awaiting',
  };
  const programmingField: staticField = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.programmingLabel,
    values: Data.fromEnumToArray(PROGRAMMING_LANGUAGES),
    state: languages,
    setter: setLanguagesValue,
    apiMap: 'language',
  };
  const companyField: staticField = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.companyLabel,
    values: Data.fromEnumToArray(COMPANIES),
    state: company,
    setter: setCompanyValue,
    apiMap: 'company',
  };

  const staticInputs = [
    positionField,
    roleField,
    numberOfInterviewTypeField,
    programmingField,
    companyField,
  ];

  const dynamicInputs = {
    label: INTERVIEWEE_SCHEDULE_COPY.form.scheduleLabel,
    values: {
      hours: DateTime.getHoursToScheduleMock(),
    },
    state: schedule,
    setter: dispatchSchedule,
  };

  const createMock = () => {
    Data.callMutationAndRedirectToHome(
      enterToPool,
      Data.parseInputToPoolAPI(staticInputs, dynamicInputs),
      null
    );
  };

  return (
    <IntervieweeSchedule
      inputs={staticInputs}
      dynamicInput={dynamicInputs}
      mutation={createMock}
      onMutationError={mutationError}
    />
  );
};

export default IntervieweeMock;
