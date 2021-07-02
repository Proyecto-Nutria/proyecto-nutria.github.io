import moment from 'moment';
import { day, hour } from 'utils/constants/values';

export default class DateTime {
  static getHoursToScheduleMock() {
    const hourMapper = (hour: number | string) =>
      `${hour < 10 ? '0' : ''}${hour}:00`;
    const hours: (string | hour)[] = DateTime.getHoursOfDay();
    return hours.filter(h => typeof h !== 'string').map(hourMapper);
  }

  static getDaysOfWeek() {
    return Object.values(day);
  }

  static getHoursOfDay() {
    return Object.values(hour);
  }

  static getDefaultDayTimeRanges() {
    return {
      [day.Monday]: [],
      [day.Tuesday]: [],
      [day.Wednesday]: [],
      [day.Thursday]: [],
      [day.Friday]: [],
      [day.Saturday]: [],
      [day.Sunday]: [],
    };
  }

  static oneMonthAhead() {
    return moment().add(1, 'months').calendar();
  }

  static getDateOfMatchInterview(day: string, hour: string) {
    // TODO: Create algorithm to schedule in the correct day
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return DateTime.dateToTimestamp(tomorrow);
  }

  static dateToTimestamp(date: any) {
    return date.getTime();
  }

  static timestampToDate(timestamp: string) {
    return new Date(Date.parse(timestamp));
  }

  static timestampWithoutTimezoneToStr(timestamp: string) {
    const noTimezoneDate = new Date(Date.parse(timestamp));
    return noTimezoneDate.toString().split('GMT')[0];
  }

  static formatDateToHours(currentDate: Date) {
    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }

  static getCurrentDate(): string {
    return new Date().toISOString();
  }

  static formatDateToDay(currentDate: Date) {
    return `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  }

  static _getDate(momentDate: any): String {
    return momentDate.split('T')[0];
  }

  static createMomentumDateFromStr(date: string) {
    return moment(date);
  }

  static hourDifferenceBetweenTwoIntervals(
    beginningInterval: Object,
    endInterval: Object
  ) {
    //@ts-ignore
    return endInterval.diff(beginningInterval, 'hours');
  }

  static addHoursToInterval(numberOfHours: number, interval: Object) {
    // @ts-ignore
    let newInterval = interval.clone();
    // @ts-ignore
    return newInterval.add(numberOfHours, 'hours');
  }

  static momentumDateToPool(momentumDate: Object) {
    //@ts-ignore
    return momentumDate.format('YYYY-MM-DDTHH:mm:ss');
  }
}
