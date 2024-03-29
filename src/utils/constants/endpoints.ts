import { gql } from '@apollo/client';

export const UPLOAD_RESUME_TO_FOLDER_OR_UPDATE = gql`
  mutation getIdOfResume(
    $resume: String!
    $school: String!
    $firstTime: Boolean!
  ) {
    upload_resume_and_create_folder(
      resume: $resume
      school: $school
      firstTime: $firstTime
    ) {
      result
    }
  }
`;

export const CREATE_INTERVIEWEE = gql`
  mutation createInterviewee($information: interviewees_insert_input!) {
    insert_interviewees_one(object: $information) {
      school
    }
  }
`;

export const UPDATE_INTERVIEWEE = gql`
  mutation updateInterviewee($school: interviewee_school_enum!) {
    update_interviewees(where: {}, _set: { school: $school }) {
      returning {
        school
      }
    }
  }
`;

// TODO: Test mutation
export const CREATE_INTERVIEWER = gql`
  mutation createInterviewer($information: interviewers_insert_input!) {
    insert_interviewers_one(object: $information) {
      mentioned
    }
  }
`;

export const UPDATE_INTERVIEWER = gql`
  mutation updateInterviewer($mentioned: Boolean!, $information: String!) {
    update_interviewers(
      where: {}
      _set: { mentioned: $mentioned, information: $information }
    ) {
      returning {
        mentioned
      }
    }
  }
`;

// interviewee { folder, user_id }
export const VIEW_POOL = gql`
  {
    pools {
      id
      interviewee_id
      availability
      awaiting
      scheduled
      company
      job
      language
      position
      interviewee {
        folder
        user {
          name
        }
      }
    }
  }
`;

export const UPDATE_POOL = gql`
  mutation update_pools($id: Int!, $awaiting: Int!) {
    update_pools(_set: { awaiting: $awaiting }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const ENTER_POOL = gql`
  mutation enterToPool($preferences: pools_insert_input!) {
    insert_pools(objects: [$preferences]) {
      affected_rows
    }
  }
`;

// TODO: Test mutation
export const CREATE_INTERVIEW = gql`
  mutation createInterview($interview: interviews_insert_input!) {
    insert_interviews_one(object: $interview) {
      id
    }
  }
`;

export const WEEINCOMING_INTERVIEWS = gql`
  query WEEIncomingInterviews($now: timestamp) {
    interviews(where: { date: { _gt: $now } }) {
      id
      document
      date
      room
    }
  }
`;

export const WERINCOMING_INTERVIEWS = gql`
  query WERIncomingInterviews($now: timestamp) {
    interviews(where: { date: { _gt: $now } }) {
      id
      document
      date
      room
      interviewee {
        folder
        user {
          name
        }
      }
    }
  }
`;

export const PAST_INTERVIEWS = gql`
  query PastInterviews($now: timestamp) {
    interviews(where: { date: { _lt: $now } }) {
      date
      document
    }
  }
`;

export const CONFIRM_INTERVIEW = gql`
  mutation confirmInterview($id: Int!) {
    update_interviews(_set: { confirmed: true }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const CANCEL_INTERVIEW = gql`
  mutation cancelInterview($id: Int!) {
    delete_interviews(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
