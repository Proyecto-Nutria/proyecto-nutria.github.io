import { actionData } from "structure/types/dataTypes"

export type formTimeProp = {
  updater: (action: actionData) => void
  day: string
  start: string
  end: string
  id: number
  values: any
}
