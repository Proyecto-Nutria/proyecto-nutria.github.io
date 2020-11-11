import { gql } from '@apollo/client'

const VIEW_POOL = gql`
{
  viewPool {
    type
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
  VIEW_POOL,
  ENTER_POOL,
  INCOMING_INTERVIEWS,
  CONFIRM_INTERVIEW,
  CANCEL_INTERVIEW
}