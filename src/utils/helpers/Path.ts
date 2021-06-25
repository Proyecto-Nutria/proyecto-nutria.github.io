import { EDIT_PATH, HOME_PATH, LANDING_PATH } from 'routes/paths';
import { FALSE_VALUE, FIRST_TIME_KEY, TRUE_VALUE } from 'utils/constants/values';

export default class Path {
  static getPathToRedirect() {
    if (localStorage.getItem(FIRST_TIME_KEY) === TRUE_VALUE) {
      return EDIT_PATH;
    } else if (localStorage.getItem(FIRST_TIME_KEY) === FALSE_VALUE) {
      return HOME_PATH;
    }
    return LANDING_PATH;
  }

  static isEditProfile(history: any) {
    if (typeof history.location.state === 'undefined') return false;
    return true;
  }
}
