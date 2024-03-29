/* Interviewee */
export type avaliabilityInfo = Record<
  number,
  { day: object | null; interval: [string | null, string | null] }
>;

export type scheduleInterviewStaticField = {
  label: string;
  values: Array<any>;
  state: any;
  setter: any;
  apiMap: string;
};

/* Interviewer */
export type Pool = {
  uid: number;
  intervieweeId: number;
  languages: string;
  interviewType: string;
  role: string;
  folder: string;
  company: string;
  awaiting: number;
  scheduled: number;
  availability: Array<string>;
  name: string;
};

/* User */
//TODO: Check if is necessary to get the name of the person
export type IncomingInterview = {
  id: string;
  date: string;
  time: string;
  document: string;
  room: string;
};

export type WERIncomingInterview = {
  id: string;
  date: string;
  time: string;
  document: string;
  room: string;
  intervieweeName: string;
  resume: string; // this is a link to the interviewee's google drive folder
};

export type PastInterview = {
  date: string;
  document: string;
};
