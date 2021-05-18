import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  WER_INCOMING_INTERVIEWS_PATH,
  WER_MATCH_PATH,
  USER_PAST_INTERVIEWS_PATH,
} from 'routes/paths';

import UIMainContainer from 'components/UI/UIBoxContainer';
import UserBoard from 'components/User/Board/UserBoard';

import scheduleImage from 'assets/imgs/Interviewee/schedule.png';
import logImage from 'assets/imgs/Interviewee/log.png';
import incomingImage from 'assets/imgs/Interviewee/incoming.png';

const InterviewerMain = () => {
  const history = useHistory();
  const boardElements = [
    {
      img: scheduleImage,
      label: 'Match',
      description: 'Select your availability and match with someone else to have a mock interview.',
      onClick: () => history.push(WER_MATCH_PATH),
    },
    {
      img: incomingImage,
      label: 'Incoming Interviews',
      description: 'Check out your upcoming interviews. Prepare ahead of time.',
      onClick: () => history.push(WER_INCOMING_INTERVIEWS_PATH),
    },
    {
      img: logImage,
      label: 'Past Interviews',
      description: 'Get insights from your previus interviews.',
      onClick: () => history.push(USER_PAST_INTERVIEWS_PATH),
    },
  ];

  return (
    <UIMainContainer>
      <UserBoard heading={'Interviews'} elements={boardElements} />
    </UIMainContainer>
  );
};

export default InterviewerMain;
