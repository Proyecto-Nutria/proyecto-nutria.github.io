import moment from 'moment';

export default class DateTime {
  static getHoursToScheduleMock() {
    const hourMapper = (hour: number) => `${hour < 10 ? '0' : ''}${hour}:00`;
    const hours = Array.from({ length: 24 }, (_v, i) => i);
    return hours.map(hourMapper);
  }

  static oneMonthAhead() {
    return moment().add(1, 'months').calendar();
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
    return new Date().toISOString().split('.')[0];
  }

  static getCurrentDateTimeInPT(): string {
    return new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' UTC'
    ).toISOString().split('.')[0];
  }

  static formatDateToDay(currentDate: Date) {
    return `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  }

  static _getDate(momentDate: any): string {
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
