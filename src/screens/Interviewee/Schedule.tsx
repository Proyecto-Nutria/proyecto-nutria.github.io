import IntervieweeSchedule from 'components/Interviewee/Schedule/IntervieweeSchedule';
import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionData, scheduleData } from 'structure/types/dataTypes';
import { ENTER_POOL } from 'utils/constants/endpoints';
import {
    COMPANIES, INTERVIEW_ROLES, PROGRAMMING_LANGUAGES, TYPES_OF_INTERVIEW
} from 'utils/constants/values';
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
      newSchedule[newIndex] = { day: '', interval: ['', ''] };

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
      label: 'Type Of Interview',
      type: 'Select',
      values: Object.keys(TYPES_OF_INTERVIEW),
      state: interviewType,
      setter: setInterviewTypeValue,
      apiMap: 'type',
    },
    {
      label: 'Role applying to',
      type: 'Select',
      values: Object.keys(INTERVIEW_ROLES),
      state: rol,
      setter: setRolValue,
      apiMap: 'role',
    },
    {
      label: 'Number Of Interviews',
      type: 'Select',
      values: [1, 2, 3],
      state: numberInterviews,
      setter: setNumberInterviewsValue,
      apiMap: 'pending',
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
      apiMap: 'companies',
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

  //TODO: Modify Data.fromInputToMock to be able to fill the preferences object, na example of the
  // required format input is written below
  const preferences = {
    availability:
      '{"[2010-01-01 14:30, 2010-01-01 15:30)", "[2010-01-01 18:30, 2010-01-01 20:30)"}',
    awaiting: 10,
    company: 'amazon',
    job: 'SE',
    language: 'python',
    position: 'FTE',
  };

  const createMock = () => {
    /*
    enterToPool({
      variables: { preferences },
    });*/
    console.log(Data.fromInputToMock(staticInputs, dynamicInputs));
    // const data = Data.fromInputToMock(staticInputs, dynamicInputs);
    // console.log(data);
    /*
    Data.callMutationAndRedirectToHome(
      enterToPool,
      Data.fromInputToMock(staticInputs, dynamicInputs),
      history
    );*/
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
