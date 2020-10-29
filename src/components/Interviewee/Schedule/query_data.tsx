import { languages } from "../../../utils/constants/values"

type realInterviewData = { company: String; rol: String; date: String }
type queryData = { name: String; linkResume: String; programmingLanguages: Array<languages>; score: Number; position: String, realInterviews: Array<realInterviewData> }

const QUERY_DATA: Array<queryData> = [
    {
      name: "Manuel Calva",
      linkResume: "https://www.google.com.mx/",
      programmingLanguages: [languages["C"], languages["C++"], languages["Java"]],
      score: 4,
      position: "Internship",
      realInterviews: [
        {
          company: "Twitter",
          rol: "Internship",
          date: "10/01/20",
        },
      ],
    },
    {
      name: "Sergio Sanchez",
      linkResume: "https://www.google.com.mx/",
      programmingLanguages: [languages["C"], languages["C++"], languages["Java"], languages["Python"], languages["JavaScript"], languages["Other"]],
      score: 4,
      position: "Internship",
      realInterviews: [
        {
          company: "Google",
          rol: "Internship",
          date: "09/30/20",
        },
        {
          company: "Amazon",
          rol: "Internship",
          date: "10/11/20",
        },
      ],
    },
    {
      name: "Roberto Reyes",
      linkResume: "https://www.google.com.mx/",
      programmingLanguages: [languages["Python"], languages["Other"], languages["JavaScript"]],
      score: 4,
      position: "Full-Time",
      realInterviews: [],
    },
    {
      name: "Hugo Duhart",
      linkResume: "https://www.google.com.mx/",
      programmingLanguages: [languages["C"], languages["C++"], languages["Python"]],
      score: 4,
      position: "Full-Time",
      realInterviews: [
        {
          company: "Indie",
          rol: "Full-Time",
          date: "12/01/20",
        },
      ],
    },
  ]

  export default QUERY_DATA;