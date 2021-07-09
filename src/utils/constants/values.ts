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

enum hour {
  h0 = 0,
  h1 = 1,
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5,
  h6 = 6,
  h7 = 7,
  h8 = 8,
  h9 = 9,
  h10 = 10,
  h11 = 11,
  h12 = 12,
  h13 = 13,
  h14 = 14,
  h15 = 15,
  h16 = 16,
  h17 = 17,
  h18 = 18,
  h19 = 19,
  h20 = 20,
  h21 = 21,
  h22 = 22,
  h23 = 23,
}

export { hour };
