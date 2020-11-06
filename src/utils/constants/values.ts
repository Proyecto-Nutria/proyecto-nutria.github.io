const HOUR_IN_MILLISECONDS=3600000

const ROLE_KEY = "role"
const INTERVIEWEE_ROLE = "interviewee"
const INTERVIEWER_ROLE = "interviewer"
const TOKEN_KEY = "token"

enum hour {
    h0 = 0,
    h1 = 1,
    h2 = 2,
    h3 = 3,
    h4 = 4,
    h5 = 5,
    h6 = 6,
    h7 = 7,
    h8 = 8,
    h9 = 9,
    h10 = 10,
    h11 = 11,
    h12 = 12,
    h13 = 13,
    h14 = 14,
    h15 = 15,
    h16 = 16,
    h17 = 17,
    h18 = 18,
    h19 = 19,
    h20 = 20,
    h21 = 21,
    h22 = 22,
    h23 = 23,
}

enum day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

enum languages {
    "C" = "C",
    "C++" = "C++",
    "Python" = "Python",
    "Java" = "Java",
    "JavaScript" = "JavaScript",
    "Other" = "Other",
  }


const PROGRAMMING_LANGUAGES:{ [string: string]: string } = {
  "C":"",
  "C++":"",
  "Python" :"",
  "Java" :"",
  "JavaScript":"",
  "Other" :"",
}

const TYPES_OF_INTERVIEW:{ [string: string]: string } = {
  "Software Engineer": "se",
  "Machine Learning": "ml",
  "Reliability Engineering": "re",
  "Data Science": "ds",
}

const INTERVIEW_ROLES:{ [string: string]: string } = {
  "Internship": "Intern",
  "Full Time": "FTE",
  "Explore/STEP": "STEP",
}

enum COMPANIES {
  Amazon = "",
  Facebook = "",
  Github = "",
  Google = "",
  Microsoft = "",
  Netflix = "",
  Twitter = "",
}


export {
  PROGRAMMING_LANGUAGES,
  INTERVIEW_ROLES,
  COMPANIES,
  TYPES_OF_INTERVIEW,
  HOUR_IN_MILLISECONDS,
  INTERVIEWER_ROLE,
  ROLE_KEY,
  TOKEN_KEY,
  INTERVIEWEE_ROLE, day, hour, languages
}