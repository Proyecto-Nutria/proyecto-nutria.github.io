import { day, hour, languages } from "utils/constants/values"
import type { ranges } from "structure/types/timeTypes"

export type realInterviewData = { company: String; rol: String; date: String }

export type personData = ranges & {
  uid: String
  name: String
  programmingLanguages: Array<languages>
  hasRealInterview?: Boolean
  hasInterviews?: Array<Boolean>
}

export type queryData = {
  name: String
  linkResume: String
  programmingLanguages: Array<languages>
  score: Number
  position: String
  realInterviews: Array<realInterviewData>
}

export type interviewData = {
  uid: String
  interviewDay: day
  interviewHour: hour
}

export type scheduleData = Record<
  number,
  { day: string | null; interval: [string | null, string | null] }
>

export type actionData =
  | { type: "create" }
  | { type: "updateDay"; id: number; day: string }
  | { type: "updateStart"; id: number; start: string }
  | { type: "updateEnd"; id: number; end: string }
  | { type: "delete"; id: number }
