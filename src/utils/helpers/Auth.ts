
import getClient from "services/graphqlService"
import { GET_USER_TYPE } from "utils/constants/endpoints"

import {
    LANDING_PATH,
    SIGNUP_PATH,
    EDIT_PATH,
    WEE_BOARD_PATH,
    WER_BOARD_PATH,
  } from "utils/constants/paths"

import {
    FIRST_TIME_KEY,
    TRUE_VALUE,
    FALSE_VALUE,
    ROLE_KEY,
    TOKEN_KEY,
    INTERVIEWEE_ROLE,
    INTERVIEWER_ROLE,
  } from "utils/constants/values"


export default class Auth{
    static async saveTokenAndRole(currentUser:any){
        const token = await currentUser?.getIdToken(true)
        localStorage.setItem(TOKEN_KEY, token)

        if (localStorage.getItem(FIRST_TIME_KEY) === null) {
            getClient()
            .query({
                query: GET_USER_TYPE,
            })
            .then((apolloResult) => {
                const result = apolloResult.data.getUserTypeOrCreate
                if ( result.firstTime === true ){
                    localStorage.setItem(FIRST_TIME_KEY, TRUE_VALUE)
                }else{
                    localStorage.setItem(FIRST_TIME_KEY, FALSE_VALUE)
                }
                localStorage.setItem(ROLE_KEY, result)
            })
            .catch((err) => {
                console.log(err)
            })
          }
    }

    static getRole(){
        let visitor = false
        let interviewer = false
        let interviewee = false
        const role = localStorage.getItem(ROLE_KEY)
        if (role === null) visitor = true
        else if (role === INTERVIEWEE_ROLE) interviewee = true
        else if (role === INTERVIEWER_ROLE) interviewer = true
        return { visitor, interviewer, interviewee }
    }

    static getPathToRedirect(){
        if (localStorage.getItem(FIRST_TIME_KEY) === TRUE_VALUE) {
            if (localStorage.getItem(ROLE_KEY) === INTERVIEWEE_ROLE) {
                return EDIT_PATH
            }
            return SIGNUP_PATH
        } else if (localStorage.getItem(FIRST_TIME_KEY) === FALSE_VALUE) {
            if (localStorage.getItem(ROLE_KEY) === INTERVIEWEE_ROLE) {
                return WEE_BOARD_PATH
            }
            return WER_BOARD_PATH
        }
        return LANDING_PATH
    }
}