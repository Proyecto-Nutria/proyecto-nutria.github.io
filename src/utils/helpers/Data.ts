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
}