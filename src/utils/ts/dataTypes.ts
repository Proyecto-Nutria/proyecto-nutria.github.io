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
  availability: Array<string>;
};

/* User */
//TODO: Check if is necessary to get the name of the person
export type IncomingInterview = {
  id: string;
  date: string;
  time: string;
  document: string;
  room: string;
  confirmed: boolean;
};

export type PastInterview = {
  date: string;
  document: string;
};
