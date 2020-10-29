import { day, hour, languages } from "../../../utils/constants/values"

type range = { startHour: hour; endHour: hour }
type ranges = { [key in day]: Array<range> }
type personData = ranges & { uid: String; name: String; programmingLanguages: Array<languages>; hasRealInterview: Boolean; hasInterviews: Array<Boolean> }

const SERVER_DATA: Array<personData> = [
    {
      uid: "1",
      name: "Manuel Calva",
      Monday: [],
      Tuesday: [{ startHour: hour.h9, endHour: hour.h10 }, { startHour: hour.h19, endHour: hour.h21 }],
      Wednesday: [{ startHour: hour.h7, endHour: hour.h10 }],
      Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Friday: [],
      Saturday: [{ startHour: hour.h9, endHour: hour.h15 }],
      Sunday: [{ startHour: hour.h13, endHour: hour.h15 }],
      programmingLanguages: [languages["C"], languages["C++"], languages["Java"]],
      hasRealInterview: true,
      hasInterviews: [false, false, false, false, true, false, true]
    },
    {
      uid: "2",
      name: "Sergio Sanchez",
      Monday: [{ startHour: hour.h13, endHour: hour.h20 }],
      Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Wednesday: [],
      Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Friday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Saturday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Sunday: [],
      programmingLanguages: [languages["C"], languages["C++"], languages["Java"], languages["Python"], languages["JavaScript"], languages["Other"]],
      hasRealInterview: true,
      hasInterviews: [true, true, true, true, true, true, true]
    },
    {
      uid: "3",
      name: "Roberto Reyes",
      Monday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Wednesday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Thursday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Friday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Saturday: [],
      Sunday: [],
      programmingLanguages: [languages["Python"], languages["Other"], languages["JavaScript"]],
      hasRealInterview: false,
      hasInterviews: [false, false, false, false, false, false, false]
    },
    {
      uid: "4",
      name: "Hugo Duhart",
      Monday: [],
      Tuesday: [{ startHour: hour.h13, endHour: hour.h15 }],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [{ startHour: hour.h13, endHour: hour.h15 }],
      programmingLanguages: [languages["C"], languages["C++"], languages["Python"]],
      hasRealInterview: true,
      hasInterviews: [false, true, false, false, false, false, false]
    },
  ]

  export default SERVER_DATA;