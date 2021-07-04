import { IncomingInterview, PastInterview } from 'utils/ts/dataTypes';

/* User */
export interface PastInterviewsProps {
  copy: Record<string, any>;
  interviewsData: PastInterview[];
}

/* Shared */
export interface BoardProps {
  copy: Array<any>;
}

/* Interviewer */
export interface IncomingInterviewsInterviewerProps {
  copy: Record<string, any>;
  interviewsData: IncomingInterview[];
  cancelInterviewMutation: any;
  confirmInterviewMutation: any;
  interviewerRole: boolean;
}
