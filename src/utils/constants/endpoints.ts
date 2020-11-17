import { gql } from '@apollo/client'

const GET_USER_TYPE = gql`
{
  getUserTypeOrCreate{
    role,
    firstTime
  }
}
`

const VIEW_POOL = gql`
{
  viewPool {
    uid
    type
    role
    language
    availability {
      day
      interval
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

const INCOMING_INTERVIEWS =  gql`
{
 getIncomingInterviews{
    uid,
    date,
    confirmed,
    room,
    doc,
  }
}
`

const PAST_INTERVIEWS = gql`
{
  getPastsInterviews{
    date,
    doc,
  }
}
`

const CONFIRM_INTERVIEW = gql`
  mutation confirmInterview($confirmation: ConfirmationInput!){
    confirmInterview(confirmation:$confirmation)
  }
`

const CANCEL_INTERVIEW = gql`
  mutation cancelInterview($cancellation:CancellationInput!){
    cancelInterview(cancellation:$cancellation)
  }
`

export  {
  GET_USER_TYPE,
  VIEW_POOL,
  ENTER_POOL,
  CREATE_INTERVIEW,
  PAST_INTERVIEWS,
  INCOMING_INTERVIEWS,
  CONFIRM_INTERVIEW,
  CANCEL_INTERVIEW
}