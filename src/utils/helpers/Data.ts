import { SCHOOLS } from "utils/constants/values"

import { IMatch } from "structure/interfaces/IMatch"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"
import { IPastInterviewsData } from "structure/interfaces/IPastInterviews"

export default class Data {
    static getSchools() {
        return Object.keys(SCHOOLS)
    }

    static fromInputToMock(staticInputs: any, dynamicInputs: any) {
        const mappedValues = { availability: [] }
        for (const element of staticInputs) {
            let value = null
            if (element.apiMap === "role") {
                //@ts-expect-error
                value = INTERVIEW_ROLES[element.state]
            } else if (element.apiMap === "type") {
                //@ts-expect-error
                value = TYPES_OF_INTERVIEW[element.state]
            } else {
                value = element.state
            }
            //@ts-expect-error
            mappedValues[element.apiMap] = value
        }

        for (const id in dynamicInputs) {
            const intervals = []
            //@ts-expect-error
            for (const interval of dynamic[id].interval) {
                intervals.push(interval.replace(" PT", ""))
            }
            let prev = mappedValues.availability
            prev.push({
                //@ts-expect-error
                day: dynamic[id]["day"],
                //@ts-expect-error
                interval: intervals,
            })
        }

        return {
            preferences: mappedValues,
        }
    }

    static fromInputToConfirmInterview(id: string, timestamp: string) {
        return {
            interviewUid: id,
            interviewDate: timestamp,
        }
    }

    static fromInputToCancelInterview(id: string, timestamp: string) {
        return {
            cancellation: {
                interviewUid: id,
                interviewDate: timestamp,
            }
        }
    }

    static fromInputToCreateInterview(id: string, userId: string, timestamp: string, pending: number) {
        return {
            interview: {
                poolId: id,
                intervieweeUid: userId,
                date: timestamp,
                pending: pending
            }
        }
    }

    static fromInputToCreateInterviewee(file: any, school: string) {
        return {
            interviewee: {
                resume: file,
                school: SCHOOLS[school]
            }
        }
    }

    static fromInputToCreateInterviewer(mentioned: boolean, description: string) {
        return {
            interviewer: {
                isMentioned: mentioned,
                description: description
            }
        }
    }

    static fromAPItoInput(data: any) {
        // TODO: Erase the hardcoded values, used only to test the endpoint
        let parsedData: IIncomingInterviewsData[] = []
        let counter = 0
        for (var elem of data.getIncomingInterviews) {
            const currentTime = new Date(elem.date)
            let parsed: IIncomingInterviewsData = {
                id: elem.uid,
                name: "Unknown",
                date: `${currentTime.getMonth()}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
                time: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
                timestamp: elem.date.toString(),
                document: "Link",
                place: counter.toString(10),
                confirmed: elem.confirmed,
                score: counter.toString(10),
            }
            counter += 10
            parsedData.push(parsed)
        }
        return parsedData
    }

    static fromAPItoMatch(data: any) {
        let parsedData: IMatch[] = []
        for (var elem of data.viewPool) {
            let parsed: IMatch = {
                uid: elem.uid,
                name: "Unknown",
                programmingLanguages: elem.language,
                interviewType: elem.type
            }
            for (var available of elem.availability) {
                const day = available.day
                const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1)

                //@ts-expect-error
                parsed[capitalizedDay] = available.interval.map((interval: any) => {
                    const intervals = interval.split('-')
                    return { startHour: intervals[0], endHour: intervals[1] }
                })
            }
            parsedData.push(parsed)
        }
        return parsedData
    }

    static fromAPItoPast(data: any) {
        let parsedData: IPastInterviewsData[] = []
        for (var elem of data.getPastsInterviews) {
            let parsed: IPastInterviewsData = {
                date: elem.date,
                document: "Link",
            }
            parsedData.push(parsed)
        }
        return parsedData
    }
}