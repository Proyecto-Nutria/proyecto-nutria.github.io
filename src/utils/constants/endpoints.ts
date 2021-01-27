import { gql } from "@apollo/client"

// TODO: Not used anymore
const GET_USER_TYPE = gql`
  {
    getUserTypeOrCreate {
      role
      firstTime
    }
  }
`
const CREATE_INTERVIEWEE = gql`
  mutation createInterviewee($interviewee: IntervieweeInput!) {
    createInterviewee(interviewee: $interviewee)
  }
`

const UPDATE_INTERVIEWEE = gql`
  mutation updateInterviewee($interviewee: IntervieweeUpdateInput!) {
    updateInterviewee(interviewee: $interviewee)
  }
`

const CREATE_INTERVIEWER = gql`
  mutation createInterviewer($interviewer: InterviewerInput!) {
    createInterviewer(interviewer: $interviewer)
  }
`

const UPDATE_INTERVIEWER = gql`
  mutation updateInterviewer($interviewer: InterviewerUpdateInput!) {
    updateInterviewer(interviewer: $interviewer)
  }
`
// TODO: Create join to get the folder of the interviewee
const VIEW_POOL = gql`
  {
    pools {
      awaiting
      availability
      job
      language
      position
      company
      interviewee {
        folder
      }
    }
  }
`

const ENTER_POOL = gql`
  mutation enterToPool($preferences: PoolInput!) {
    enterToPool(preferences: $preferences)
  }
`

const CREATE_INTERVIEW = gql`
  mutation createInterview($interview: InterviewInput!) {
    createInterview(interview: $interview)
  }
`
// TODO: $lt: timestamp = ""
const INCOMING_INTERVIEWS = gql`
  {
    interviews {
      id
      date
      confirmed
      room
      document
    }
  }
`
// TODO: $_gt: timestamp = ""
const PAST_INTERVIEWS = gql`
  {
    getPastsInterviews {
      date
      document
    }
  }
`

const CONFIRM_INTERVIEW = gql`
  mutation confirmInterview($confirmation: ConfirmationInput!) {
    confirmInterview(confirmation: $confirmation)
  }
`

const CANCEL_INTERVIEW = gql`
  mutation cancelInterview($cancellation: CancellationInput!) {
    cancelInterview(cancellation: $cancellation)
  }
`

export {
  GET_USER_TYPE,
  CREATE_INTERVIEWEE,
  UPDATE_INTERVIEWEE,
  CREATE_INTERVIEWER,
  UPDATE_INTERVIEWER,
  VIEW_POOL,
  ENTER_POOL,
  CREATE_INTERVIEW,
  PAST_INTERVIEWS,
  INCOMING_INTERVIEWS,
  CONFIRM_INTERVIEW,
  CANCEL_INTERVIEW,
}
