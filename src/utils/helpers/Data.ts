import { IMatch } from "structure/interfaces/IMatch"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"

export default class Data{
    static fromInputToConfirmInterview(id:string, timestamp:string ){
        return {
            interviewUid: id,
            intervieweeUid: "",
            interviewDate: timestamp,
          }
    }

    static fromInputToCancelInterview(id:string, timestamp:string ){
        return {
            interviewUid: id,
            interviewerUid: "",
            interviewDate: timestamp,
          }
    }

    static fromInputToCreateInterview(id:string, userId:string, timestamp:string, pending:number){
        return {
            intervieweeUid: userId,
            date: "1608768000000",
            poolId: "-MJn6ApzSRLpgmB_-R6i",
            pending: pending
        }
    }

    static fromAPItoInput(data:any){
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

    static fromAPItoMatch(data:any){
        let parsedData: IMatch[] = []
        for (var elem of data.viewPool) {
            let parsed: IMatch = {
                uid: elem.uid,
                name: "Unknown",
                programmingLanguages: elem.language,
                interviewType: elem.type
            }
            for(var available of elem.availability){
                const day = available.day
                const capitalizedDay  = day.charAt(0).toUpperCase() + day.slice(1)

                //@ts-expect-error
                parsed[capitalizedDay] = available.interval.map((interval:any) => {
                    const intervals = interval.split('-')
                    return {startHour:intervals[0], endHour:intervals[1]}
                })
            }
            parsedData.push(parsed)
        }
        return parsedData
    }
}