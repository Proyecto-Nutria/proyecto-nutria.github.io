export interface IIncomingInterviewsData {
  id: string;
  name?: string;
  timestamp?: string;
  date: string;
  time: string;
  document: string;
  place: string;
  confirmed: boolean;
}

export interface IIncomingInterviewsProps {
  data: IIncomingInterviewsData[];
  showName: boolean;
  onSort: any;
  sort: any;
  confirmMutation?: any;
  cancelMutation: any;
  isInterviewee: boolean;
}
