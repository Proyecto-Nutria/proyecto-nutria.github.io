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

export  {VIEW_POOL}