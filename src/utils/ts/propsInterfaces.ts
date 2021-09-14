import { IncomingInterview, PastInterview, Pool, WERIncomingInterview } from 'utils/ts/dataTypes';

/* Interviewee */
export interface IntervieweeProfileProps {
  copy: Record<string, any>;
  school: any;
  schoolSet: any;
  allSchools: string[];
  resumeName: string;
  onFileChanged: any;
  editIntervieweeMutation: any;
}

export interface IntervieweeScheduleProps {
  copy: Record<string, any>;
  interviewInformationFields: Array<Record<string, any>>;
  intervieweeAvaliabilityFields: Record<string, any>;
  enterToPoolMutation: (onSuccess: () => void, onFail: () => void) => void;
  isLoading: boolean;
}

/* Interviewer */
export interface InterviewerPoolsProps {
  copy: Record<string, any>;
  poolsData: Pool[];
  pool: any;
  poolSet: any;
  createInterviewMutation: (
    poolId: number,
    awaitingInterviews: number,
    intervieweeId: string,
    dateOfInterview: string,
    onSuccess: () => void,
    onFail: () => void
  ) => void;
  poolUpdateReducer: string;
  isLoading: boolean;
  isError: boolean;
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
  intervieweeRole: boolean;
}

export interface WERIncomingInterviewsProps {
  copy: Record<string, any>;
  interviewsData: WERIncomingInterview[];
  cancelInterviewMutation: any;
  confirmInterviewMutation: any;
  intervieweeRole: boolean;
}

export interface PastInterviewsProps {
  copy: Record<string, any>;
  interviewsData: PastInterview[];
}

export interface BoardProps {
  copy: Array<any>;
}
