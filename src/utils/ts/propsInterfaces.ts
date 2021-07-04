import { IncomingInterview, PastInterview } from 'utils/ts/dataTypes';

/* User */
export interface IncomingInterviewsProps {
  copy: Record<string, any>;
  interviewsData: IncomingInterview[];
  cancelInterviewMutation: any;
  confirmInterviewMutation: any;
  interviewerRole: boolean;
}

export interface PastInterviewsProps {
  copy: Record<string, any>;
  interviewsData: PastInterview[];
}

export interface BoardProps {
  copy: Array<any>;
}

/* Interviewer */
export interface InterviewerProfileProps {
  copy: Record<string, any>;
  modifyInterviewerMutation: any;
  appear: boolean;
  appearSet: any;
  about: string;
  aboutSet: any;
}
