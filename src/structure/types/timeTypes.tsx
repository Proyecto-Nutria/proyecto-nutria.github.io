import { day, hour } from "utils/constants/values"

export type hourRange = { startHour: hour; endHour: hour }
export type ranges = Record<day, Array<hourRange>>
