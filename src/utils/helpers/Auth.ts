import getClient from "services/graphqlService"
import { GET_USER_TYPE } from "utils/constants/endpoints"

import {
  FIRST_TIME_KEY,
  TRUE_VALUE,
  FALSE_VALUE,
  ROLE_KEY,
  TOKEN_KEY,
  INTERVIEWEE_ROLE,
  INTERVIEWER_ROLE,
} from "utils/constants/values"

export default class Auth {
  static async saveTokenAndRole(currentUser: any) {
    const token = await currentUser?.getIdToken(true)
    localStorage.setItem(TOKEN_KEY, token)

    if (localStorage.getItem(FIRST_TIME_KEY) === null) {
      getClient()
        .query({
          query: GET_USER_TYPE,
        })
        .then(apolloResult => {
          const result = apolloResult.data.getUserTypeOrCreate
          if (result.firstTime === true) {
            localStorage.setItem(FIRST_TIME_KEY, TRUE_VALUE)
          } else {
            localStorage.setItem(FIRST_TIME_KEY, FALSE_VALUE)
          }
          localStorage.setItem(ROLE_KEY, result.role)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  static getRole() {
    let interviewer = false
    let interviewee = false
    const role = localStorage.getItem(ROLE_KEY)
    if (role === INTERVIEWEE_ROLE) interviewee = true
    else if (role === INTERVIEWER_ROLE) interviewer = true
    return { interviewer, interviewee }
  }
}
