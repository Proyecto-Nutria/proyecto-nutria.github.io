import React from "react"
import { Heading, Box, Text } from "grommet"

import ModalConfirm from "components/Interviewer/Match/Modal/ModalConfirm"
import ModalAbout from "components/Interviewer/Match/Modal/ModalAbout"
import MatchTable from "components/Interviewer/Match/Table/MatchTable"

//TODO: The filters are going to render in an infinite way the data from the API
// <Filter setData={(filterData: any) => props.data.setData(filterData)} />
const InterviewerMatch = (props: any) => (
  <Box pad="xlarge">
    <Heading>Match Interviewees</Heading>
    <Box round background="dark-1" pad="large" gap="medium">
      <Box
        direction="row-responsive"
        fill="horizontal"
        justify="start"
        gap="small"
      >
        <Text weight="bold" size="medium">
          Interview scheduled
        </Text>
        <Text weight="bold" size="medium">
          Has Real Interview
        </Text>
      </Box>

      <MatchTable
        data={props.data.pool}
        setQueryAbout={(newQueryAbout: any) =>
          props.data.setQueryAbout(newQueryAbout)
        }
        setShowAbout={(newShowAbout: Boolean) =>
          props.data.setShowAbout(newShowAbout)
        }
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

      {props.data.showAbout && (
        <ModalAbout
          setShowAbout={(newShowAbout: Boolean) =>
            props.data.setShowAbout(newShowAbout)
          }
          queryAbout={props.data.queryAbout}
        />
      )}
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
  </Box>
)

export default InterviewerMatch
