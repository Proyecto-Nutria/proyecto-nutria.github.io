import { day, hour } from "utils/constants/values"

export default class DateTime {
  static getHoursToScheduleMock() {
    const hourMapper = (hour: number | string) =>
      `${hour < 10 ? "0" : ""}${hour}-00 PT`
    const hours: (string | hour)[] = DateTime.getHoursOfDay()
    return hours.filter(h => typeof h !== "string").map(hourMapper)
  }

  static getDaysOfWeek() {
    return Object.values(day)
  }

  static getHoursOfDay() {
    return Object.values(hour)
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
    }
  }

  static getDateOfMatchInterview(day: string, hour: string) {
    // TODO: Create algorithm to schedule in the correct day
    console.log(day, hour)
    var tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + 1)
    return DateTime.dateToTimestamp(tomorrow)
  }

  static dateToTimestamp(date: any) {
    return date.getTime()
  }
}
