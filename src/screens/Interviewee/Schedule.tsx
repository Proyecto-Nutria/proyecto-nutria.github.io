import IntervieweeSchedule from 'components/Interviewee/Schedule/IntervieweeSchedule';
import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionData, scheduleData } from 'structure/types/dataTypes';
import { ENTER_POOL } from 'utils/constants/endpoints';
import { COMPANIES, JOBS, POSITIONS, PROGRAMMING_LANGUAGES } from 'utils/constants/values';
import Data from 'utils/helpers/Data';
import DateTime from 'utils/helpers/DateTime';

import { useMutation } from '@apollo/client';

const reducer = (
  currentSchedule: scheduleData,
  action: actionData
): scheduleData => {
  switch (action.type) {
    case 'create': {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData;
      const indexes = Object.keys(currentSchedule) as unknown as Array<number>;
      const newIndex = indexes.length === 0 ? 0 : Math.max(...indexes) + 1;
      newSchedule[newIndex] = { day: null, interval: ['', ''] };

      return newSchedule;
    }

    case 'delete': {
      const newSchedule = JSON.parse(JSON.stringify(currentSchedule));
      delete newSchedule[action.id];
      return newSchedule as scheduleData;
    }

    case 'updateStart': {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData;
      newSchedule[action.id].interval[0] = action.start;

      return newSchedule;
    }

    case 'updateEnd': {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData;
      newSchedule[action.id].interval[1] = action.end;

      return newSchedule;
    }

    case 'updateDay': {
      const newSchedule = JSON.parse(
        JSON.stringify(currentSchedule)
      ) as scheduleData;
      newSchedule[action.id].day = action.day;

      return newSchedule;
    }
  }

  throw new Error('Bad action');
};

const IntervieweeMock = () => {
  const [enterToPool, { error: mutationError }] = useMutation(ENTER_POOL);

  const [interviewType, setInterviewTypeValue] = useState('');
  const [rol, setRolValue] = useState('');
  const [numberInterviews, setNumberInterviewsValue] = useState(1);
  const [languages, setLanguagesValue] = useState('');
  const [company, setCompanyValue] = useState('');
  const [schedule, dispatchSchedule] = useReducer(reducer, {});

  //TODO: Change the state to methods to work with MaterialUI
  const staticInputs = [
    {
      label: 'Position',
      type: 'Select',
      values: Object.keys(POSITIONS),
      state: interviewType,
      setter: setInterviewTypeValue,
      apiMap: 'position',
    },
    {
      label: 'Role applying to',
      type: 'Select',
      values: Object.keys(JOBS),
      state: rol,
      setter: setRolValue,
      apiMap: 'job',
    },
    {
      label: 'Number Of Interviews',
      type: 'Select',
      values: [1, 2, 3],
      state: numberInterviews,
      setter: setNumberInterviewsValue,
      apiMap: 'awaiting',
    },
    {
      label: 'Programming languages to use in the interview',
      type: 'Select',
      values: Object.keys(PROGRAMMING_LANGUAGES),
      state: languages,
      setter: setLanguagesValue,
      apiMap: 'language',
    },
    {
      label: 'Company applying to',
      type: 'Select',
      values: Object.keys(COMPANIES),
      state: company,
      setter: setCompanyValue,
      apiMap: 'company',
    },
  ];

  const dynamicInputs = {
    label: 'Time to schedule a mock',
    values: {
      days: DateTime.getDaysOfWeek(),
      hours: DateTime.getHoursToScheduleMock(),
    },
    state: schedule,
    setter: dispatchSchedule,
  };

  const createMock = () => {
    Data.callMutationAndRedirectToHome(
      enterToPool,
      Data.fromInputToPool(staticInputs, dynamicInputs),
      history
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
