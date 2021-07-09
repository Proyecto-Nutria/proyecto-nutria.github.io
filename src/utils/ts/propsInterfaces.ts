import { IncomingInterview, PastInterview, Pool } from 'utils/ts/dataTypes';

/* Interviewee */
/* TODO: Refactor the component below */
export interface interfaceIntervieweeSchedule {
  copy: Record<string, any>;
  interviewInformationFields: Record<string, any>;
  intervieweeAvaliabilityFields: Record<string, any>;
}

/* Interviewer */
export interface InterviewerPoolsProps {
  copy: Record<string, any>;
  poolsData: Pool[];
  pool: any;
  poolSet: any;
  createInterviewMutation: any;
  poolUpdateReducer: string;
}

export interface InterviewerProfileProps {
  copy: Record<string, any>;
  modifyInterviewerMutation: any;
  appear: boolean;
  appearSet: any;
  about: string;
  aboutSet: any;
}

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
