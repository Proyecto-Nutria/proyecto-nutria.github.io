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

export  {VIEW_POOL, ENTER_POOL}