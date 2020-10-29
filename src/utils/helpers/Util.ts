import { IInterviewInfo } from "screens/User/InfoList"

export default class Util {
  static splitByTime(data: IInterviewInfo[], splitPoint: Date): [IInterviewInfo[], IInterviewInfo[]] {
    let first: IInterviewInfo[] = []
    let second: IInterviewInfo[] = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].timestamp > splitPoint) {
        first.push(data[i])
      } else {
        second.push(data[i])
      }
    }
    return [first, second]
  }

  static datesComparator(data1: IInterviewInfo, data2: IInterviewInfo) {
    if (data1.timestamp < data2.timestamp) {
      return -1
    } else if (data1.timestamp > data2.timestamp) {
      return 1
    } else {
      return 0
    }
  }
}
