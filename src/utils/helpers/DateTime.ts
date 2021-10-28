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
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  static getCurrentDate(): string {
    return new Date().toISOString().split('.')[0];
  }

  static getCurrentDateTimeInPT(): string {
    return new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) +
        ' UTC'
    )
      .toISOString()
      .split('.')[0];
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

  static getOffsetDateAndHour(d: string, offset: number, hour: number) {
    var date = new Date(d);
    date.setHours(hour, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  }

  static getCurrentStartWeekFrom(date: string) {
    const tempDate = moment(date);
    return tempDate.startOf('week').format('YYYY-MM-DD');
  }

  static addDaysToDate(date: string, days: number) {
    return moment(date).add(days, 'days').format('YYYY-MM-DD');
  }

  static addDaysAndHoursToDate(date: string, days: number, hours: number) {
    return moment(date)
      .add(days, 'days')
      .add(hours, 'hours')
      .format('YYYY-MM-DDTHH:mm:ss');
  }

  static getFormattedHour(hours: number) {
    var time = `${hours}:00:00`;
    return moment(time, 'HH:mm:ss').format('HH:mm:ss');
  }

  static addDaysToDateAndGetDay(date: string, days: number) {
    return moment(date).add(days, 'days').format('DD');
  }

  static getMonthFromStr(date: string) {
    return parseInt(date.split('-')[1]) - 1;
  }
}
