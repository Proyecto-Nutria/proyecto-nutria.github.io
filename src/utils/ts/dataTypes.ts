export type PastInterview = {
  date: string;
  document: string;
};

//TODO: Check if is necessary to get the name of the person
export type IncomingInterview = {
  id: string;
  date: string;
  time: string;
  document: string;
  room: string;
  confirmed: boolean;
};
