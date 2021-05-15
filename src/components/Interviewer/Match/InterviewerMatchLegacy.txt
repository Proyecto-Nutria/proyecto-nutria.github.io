import React from 'react';
import { Heading, Box } from 'grommet';

import ModalConfirm from 'components/Interviewer/Match/Modal/ModalConfirm';
import MatchTable from 'components/Interviewer/Match/Table/MatchTable';

const InterviewerMatch = (props: any) => (
  <Box pad="xlarge">
    <Heading>Match Interviewees</Heading>
    <MatchTable
      data={props.data.pool}
      setAvailableHours={(newAvailableHours: any) =>
        props.data.setAvailableHours(newAvailableHours)
      }
      setNewInterviewData={(updatedInterviewData: any) =>
        props.data.setNewInterviewData(updatedInterviewData)
      }
      setShowConfirm={(newShowConfirm: Boolean) =>
        props.data.setShowConfirm(newShowConfirm)
      }
    />

    {props.data.showConfirm && (
      <ModalConfirm
        setShowConfirm={(newShowConfirm: Boolean) =>
          props.data.setShowConfirm(newShowConfirm)
        }
        setNewInterviewData={(updatedInterviewData: any) =>
          props.data.setNewInterviewData(updatedInterviewData)
        }
        pastInterviewData={props.data.newInterviewData}
        availableHours={props.data.availableHours}
        createInterview={props.data.createInterview}
      />
    )}
  </Box>
);

export default InterviewerMatch;
