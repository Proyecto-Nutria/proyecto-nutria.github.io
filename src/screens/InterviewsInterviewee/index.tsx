import React, { useState } from "react"
import { DataTable, Text, Box, CheckBox, Heading } from "grommet"

interface IInterviewInfo {
  name: string
  date: string
  time: string
  document: string
  place: string
  confirmed: boolean
}

let compareDates = (data1: IInterviewInfo, data2: IInterviewInfo) => {
  let date1Array = data1.date.split("/")
  let date2Array = data2.date.split("/")
  for (let i = 0; i < date1Array.length; i++) {
    if (date1Array[i] < date2Array[i]) return -1
    else if (date1Array[i] > date2Array[i]) return 1
  }

  let time1Array = data1.time.split(":")
  let time2Array = data2.time.split(":")

  for (let i = 0; i < time1Array.length; i++) {
    if (time1Array[i] < time2Array[i]) return -1
    else if (time1Array[i] > time2Array[i]) return 1
  }
  return 0
}

let compareChecked = (data1: IInterviewInfo, data2: IInterviewInfo) => {
  if (data1.confirmed === data2.confirmed) {
    return compareDates(data1, data2)
  } else if (data1.confirmed < data2.confirmed) {
    return -1
  } else {
    return 1
  }
}

const data = [
  {
    name: "Jose Manuel Calva Hernandez",
    date: "11/11/11",
    time: "14:30",
    document: "Link",
    place: "room-4",
    confirmed: false,
  },
  {
    name: "Sergio Gabriel Sanchez Valencia",
    date: "00/00/00",
    time: "13:30",
    document: "Link",
    place: "room-2",
    confirmed: true,
  },
  {
    name: "Abigail Nicolas Sayago",
    date: "11/11/11",
    time: "15:30",
    document: "Link",
    place: "room-4",
    confirmed: false,
  },
]

const InterviewsInterviewer = () => {
  let [info, setData] = useState(data.sort(compareDates).reverse())
  return (
    <>
      <Heading level={1} margin="20px">
        Interviews
      </Heading>
      <Box
        align="center"
        pad="small"
        background="background-contrast"
        alignSelf="center"
        round={true}
        flex={{ shrink: 0 }}
        overflow={{ vertical: "auto" }}
      >
        <DataTable
          sort={{ direction: "desc", property: "date" }}
          primaryKey={false}
          sortable={true}
          onSort={({ property, direction }) => {
            console.log(property, direction)
            let isDesc = direction === "desc"
            if (property === "date" || property === "time") {
              if (isDesc) {
                setData(info.sort(compareDates).reverse())
              } else {
                setData(info.sort(compareDates))
              }
            } else if (property === "confirmed") {
              if (isDesc) {
                setData(info.sort(compareChecked).reverse())
              } else {
                setData(info.sort(compareChecked))
              }
            }
          }}
          size="medium"
          alignSelf="center"
          onClickRow={event => {
            // redirect to next page
            console.log(event)
            return
          }}
          columns={[
            {
              align: "center",
              property: "name",
              header: <Text>Interviewee</Text>,
              sortable: false,
              search: true,
            },
            {
              align: "center",
              property: "date",
              header: <Text>Date</Text>,
              sortable: true,
            },
            {
              align: "center",
              property: "time",
              header: <Text>Time (24 hrs)</Text>,
              sortable: true,
            },
            {
              align: "center",
              property: "document",
              header: <Text>Document</Text>,
              sortable: true,
              render: ({ document }) => {
                return <a href={document}>Link</a>
              },
            },
            {
              align: "center",
              property: "place",
              header: <Text>Place</Text>,
              sortable: true,
            },
            {
              align: "center",
              property: "confirmed",
              header: <Text>Confirmed</Text>,
              sortable: true,
              render: ({ confirmed }) => {
                return (
                  <Box alignSelf="center" align="center">
                    <CheckBox checked={confirmed} />
                  </Box>
                )
              },
            },
          ]}
          data={info}
        />
      </Box>
    </>
  )
}

export default InterviewsInterviewer
