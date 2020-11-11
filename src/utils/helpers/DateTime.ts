import { day, hour } from "utils/constants/values"
import {
  IIncomingInterviewsData
} from "structure/interfaces/IIncomingInterviews"

export default class DateTime {
    static getHoursToScheduleMock(){
      const hourMapper = (hour: number | string) => `${hour < 10 ? "0" : ""}${hour}-00 PT`
      const hours: (string | hour)[] = DateTime.getHoursOfDay()
      return hours
        .filter(h => typeof h !== "string")
        .map(hourMapper)
      }

      static getDaysOfWeek(){
        return Object.values(day)
      }

      static getHoursOfDay(){
        return  Object.values(hour)
      }

      static getDefaultDayTimeRanges(){
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

      //TODO: Eliminate this method
      static splitByTime(data: IIncomingInterviewsData[], splitPoint: Date): [IIncomingInterviewsData[], IIncomingInterviewsData[]] {
        let first: IIncomingInterviewsData[] = []
        let second: IIncomingInterviewsData[] = []
        /*
        for (let i = 0; i < data.length; i++) {
          if (data[i].timestamp > splitPoint) {
            first.push(data[i])
          } else {
            second.push(data[i])
          }
        }
        return [first, second]*/
        return [first, second]
      }

      //TODO: Eliminate this method
      static datesComparator(data1: IIncomingInterviewsData, data2: IIncomingInterviewsData) {
        console.log(data1.timestamp)
        console.log(data2.timestamp)
        return 1
/*
        if (data1.timestamp < data2.timestamp) {
          return -1
        } else if (data1.timestamp > data2.timestamp) {
          return 1
        } else {
          return 0
        }*/
      }
}