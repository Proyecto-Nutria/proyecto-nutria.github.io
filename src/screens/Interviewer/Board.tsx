import incomingImage from 'assets/imgs/Interviewee/incoming.png';
import logImage from 'assets/imgs/Interviewee/log.png';
import scheduleImage from 'assets/imgs/Interviewee/schedule.png';
import UserBoard from 'components/User/Board/UserBoard';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  USER_INCOMING_INTERVIEWS_PATH,
  USER_PAST_INTERVIEWS_PATH,
  WER_MATCH_PATH,
} from 'routes/paths';
import { INTERVIEWER_BOARD_COPY } from 'utils/constants/copy';

const InterviewerMain = () => {
  const history = useHistory();
  const boardElements = [
    {
      img: scheduleImage,
      label: INTERVIEWER_BOARD_COPY.grid.match.display,
      description: INTERVIEWER_BOARD_COPY.grid.match.desc,
      onClick: () => history.push(WER_MATCH_PATH),
    },
    {
      img: incomingImage,
      label: INTERVIEWER_BOARD_COPY.grid.incoming.display,
      description: INTERVIEWER_BOARD_COPY.grid.incoming.desc,
      onClick: () => history.push(USER_INCOMING_INTERVIEWS_PATH),
    },
    {
      img: logImage,
      label: INTERVIEWER_BOARD_COPY.grid.pasts.display,
      description: INTERVIEWER_BOARD_COPY.grid.pasts.desc,
      onClick: () => history.push(USER_PAST_INTERVIEWS_PATH),
    },
  ];

  return <UserBoard copy={boardElements} />;
};

export default InterviewerMain;
