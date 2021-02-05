import { gql } from '@apollo/client';

const CREATE_INTERVIEWEE = gql`
  mutation createInterviewee($interviewee: IntervieweeInput!) {
    createInterviewee(interviewee: $interviewee)
  }
`;

const UPDATE_INTERVIEWEE = gql`
  mutation updateInterviewee($interviewee: IntervieweeUpdateInput!) {
    updateInterviewee(interviewee: $interviewee)
  }
`;

const CREATE_INTERVIEWER = gql`
  mutation createInterviewer($interviewer: InterviewerInput!) {
    createInterviewer(interviewer: $interviewer)
  }
`;

const UPDATE_INTERVIEWER = gql`
  mutation updateInterviewer($interviewer: InterviewerUpdateInput!) {
    updateInterviewer(interviewer: $interviewer)
  }
`;

const VIEW_POOL = gql`
  {
    pools {
      awaiting
      availability
      company
      job
      language
      position
      interviewee {
        folder
      }
    }
  }
`;

const ENTER_POOL = gql`
  mutation MyMutation($preferences: pools_insert_input!) {
    insert_pools_one(object: $preferences) {
      awaiting
    }
  }
`;

const CREATE_INTERVIEW = gql`
  mutation createInterview($interview: InterviewInput!) {
    createInterview(interview: $interview)
  }
`;

const INCOMING_INTERVIEWS = gql`
  query IncomingInterviews($now: timestamp) {
    interviews(where: { date: { _gt: $now } }) {
      document
      date
      room
      confirmed
    }
  }
`;

const PAST_INTERVIEWS = gql`
  query PastInterviews($now: timestamp) {
    interviews(where: { date: { _lt: $now } }) {
      date
      document
    }
  }
`;

const CONFIRM_INTERVIEW = gql`
  mutation confirmInterview($confirmation: ConfirmationInput!) {
    confirmInterview(confirmation: $confirmation)
  }
`;

const CANCEL_INTERVIEW = gql`
  mutation cancelInterview($cancellation: CancellationInput!) {
    cancelInterview(cancellation: $cancellation)
  }
`;

export {
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
};
