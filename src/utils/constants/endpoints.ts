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

const INCOMING_INTERVIEWS =  gql`
{
 getIncomingInterviews{
   date,
   confirmed,
   room,
   doc,
  }
}
`

const ENTER_POOL = gql`
mutation enterToPool($preferences: PoolInput!) {
      enterToPool(preferences: $preferences)
}
`

export  {
  VIEW_POOL,
  ENTER_POOL,
  INCOMING_INTERVIEWS
}