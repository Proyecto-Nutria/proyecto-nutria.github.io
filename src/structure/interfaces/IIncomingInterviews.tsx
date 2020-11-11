export interface IIncomingInterviewsData {
  id: string
  name?: string
  timestamp?: Date
  date: string
  time: string
  document: string
  place: string
  confirmed: boolean
  score: string
}

export interface IIncomingInterviewsProps {
  data: IIncomingInterviewsData[]
  showName: boolean
  onRowClick: (info: IIncomingInterviewsData) => void
  state: any
  setter: any
  onSort: any
  sort: any
}
