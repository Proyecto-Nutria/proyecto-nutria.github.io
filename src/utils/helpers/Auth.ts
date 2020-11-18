
import getClient from "services/graphqlService"
import { GET_USER_TYPE } from "utils/constants/endpoints"

import {
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
  } from "utils/constants/values"


export default class Auth{
    static async saveToken(currentUser:any){
        const token = await currentUser?.getIdToken(true)
        localStorage.setItem(TOKEN_KEY, token)

        if (localStorage.getItem(FIRST_TIME_KEY) === null) {
            getClient()
            .query({
                query: GET_USER_TYPE,
            })
            .then((apolloResult) => {
                const result = apolloResult.data.getUserTypeOrCreate
                if ( result.firstTime !== true ){
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

    static getPathToRedirectUser(){
        return SIGNUP_PATH
        if (localStorage.getItem(FIRST_TIME_KEY) === TRUE_VALUE) {
            return SIGNUP_PATH
        } else if (localStorage.getItem(FIRST_TIME_KEY) === FALSE_VALUE) {
            if (localStorage.getItem(ROLE_KEY) === INTERVIEWEE_ROLE) {
                return WEE_BOARD_PATH
            }
            return WER_BOARD_PATH
        }
    }
}