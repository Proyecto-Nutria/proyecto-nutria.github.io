import incomingImage from 'assets/imgs/Interviewee/incoming.png';
import logImage from 'assets/imgs/Interviewee/log.png';
import scheduleImage from 'assets/imgs/Interviewee/schedule.png';
import UserBoard from 'components/User/Board/UserBoard';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    USER_PAST_INTERVIEWS_PATH, WEE_INCOMING_INTERVIEWS_PATH, WEE_MOCK_PATH
} from 'routes/paths';
import { INTERVIEWEE_BOARD_COPY } from 'utils/constants/copy';

const IntervieweeMain = () => {
  const history = useHistory();
  const boardElements = [
    {
      img: scheduleImage,
      label: INTERVIEWEE_BOARD_COPY.grid.schedule.display,
      description: INTERVIEWEE_BOARD_COPY.grid.schedule.desc,
      onClick: () => history.push(WEE_MOCK_PATH),
    },
    {
      img: incomingImage,
      label: INTERVIEWEE_BOARD_COPY.grid.incoming.display,
      description: INTERVIEWEE_BOARD_COPY.grid.incoming.desc,
      onClick: () => history.push(WEE_INCOMING_INTERVIEWS_PATH),
    },
    {
      img: logImage,
      label: INTERVIEWEE_BOARD_COPY.grid.pasts.display,
      description: INTERVIEWEE_BOARD_COPY.grid.pasts.desc,
      onClick: () => history.push(USER_PAST_INTERVIEWS_PATH),
    },
  ];

  return <UserBoard copy={boardElements} />;
};

export default IntervieweeMain;
