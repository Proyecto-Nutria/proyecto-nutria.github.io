import { gql } from '@apollo/client';

// TODO: Test mutation
const CREATE_INTERVIEWEE = gql`
  mutation createInterviewee($information: interviewees_insert_input!) {
    insert_interviewees_one(object: $information) {
      school
    }
  }
`;

// TODO: Test mutation, Missing GET_INTERVIEWER and Re Upload resume
const UPDATE_INTERVIEWEE = gql`
  mutation updateInterviewee($interviewee: IntervieweeUpdateInput!) {
    updateInterviewee(interviewee: $interviewee)
  }
`;

// TODO: Test mutation
const CREATE_INTERVIEWER = gql`
  mutation createInterviewer($information: interviewers_insert_input!) {
    insert_interviewers_one(object: $information) {
      mentioned
    }
  }
`;

// TODO: Test mutation, Missing GET_INTERVIEWER
const UPDATE_INTERVIEWER = gql`
  mutation updateInterviewer($id: Int!, $information: interviewers_set_input!) {
    update_interviewers(where: { id: { _eq: $id } }, _set: $information) {
      returning {
        information
        mentioned
      }
    }
  }
`;

const VIEW_POOL = gql`
  {
    pools {
      interviewee_id
      availability
      awaiting
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
  mutation enterToPool($preferences: pools_insert_input!) {
    insert_pools_one(object: $preferences) {
      awaiting
    }
  }
`;

// TODO: Test mutation
const CREATE_INTERVIEW = gql`
  mutation createInterview($interview: interviews_insert_input!) {
    insert_interviews_one(object: $interview) {
      id
    }
  }
`;

const INCOMING_INTERVIEWS = gql`
  query IncomingInterviews($now: timestamp) {
    interviews(where: { date: { _gt: $now } }) {
      id
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

// TODO: Test mutation
const CONFIRM_INTERVIEW = gql`
  mutation confirmInterview($id: Int!) {
    update_interviews(_set: { confirmed: true }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

// TODO: Test mutation
const CANCEL_INTERVIEW = gql`
  mutation cancelInterview($id: Int!) {
    delete_interviews(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
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
