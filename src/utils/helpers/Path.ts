import { LANDING_PATH, EDIT_PATH, HOME_PATH } from "routes/paths"
import { FIRST_TIME_KEY, TRUE_VALUE, FALSE_VALUE } from "utils/constants/values"

export default class Path {
  static getPathToRedirect() {
    if (localStorage.getItem(FIRST_TIME_KEY) === TRUE_VALUE) {
      return EDIT_PATH
    } else if (localStorage.getItem(FIRST_TIME_KEY) === FALSE_VALUE) {
      return HOME_PATH
    }
    return LANDING_PATH
  }

  static isEditProfile(history: any) {
    if (typeof history.location.state !== "undefined") return true
    return false
  }
}
