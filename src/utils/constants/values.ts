export const STRING_TYPE = 'string';

export enum UserRole {
  visitor,
  interviewee,
  interviewer,
  admin,
}
export enum PROGRAMMING_LANGUAGES {
  c,
  cpp,
  python,
  java,
  javascript,
  Other,
}
export enum COMPANIES {
  amazon,
  facebook,
  github,
  google,
  microsoft,
  netflix,
  twitter,
}
export enum SCHEDULE_API_MAP {
  position,
  job,
  awaiting,
  language,
  company,
}

/* TODO: See if we are going to put the complete number */
export const UNIVERSITIES: { [string: string]: string } = {
  IPN: 'IPN',
  UNAM: 'UNAM',
  CIMAT: 'CIMAT',
  Other: 'NONLISTED',
};
export const JOBS: { [string: string]: string } = {
  'Software Engineer': 'SE',
  'Machine Learning': 'ML',
  'Reliability Engineering': 'RE',
  'Data Science': 'DS',
};
export const POSITIONS: { [string: string]: string } = {
  Internship: 'Intern',
  'Full Time': 'FTE',
  'Explore/STEP': 'STEP',
};
