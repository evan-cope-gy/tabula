// import { useState } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import { Divider } from "@tremor/react"
import BasicDataTable from "../../components/MyBasicTable"
import { getLayout } from "../../layouts/MainLayout"
import Spinner from "../../components/MySpinner"
import ErrorAlertCard from "../../components/MyErrorAlertCard"

const BasicTablePage = () => {
  // Streaming-Titles API request:
  const { data, isLoading, isError } = useTitlesAPI("/api/titles/?limit=20")
  // DEBUGGING...
  console.log({ data, isLoading, isError })

  const columns = [
    {
      name: "Show ID",
      selector: (row) => row.show_id,
      minWidth: "5rem",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      grow: 3,
      minWidth: "12rem",
    },
    {
      name: "Type",
      selector: (row) => row.type,
      minWidth: "5.25rem",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      wrap: true,
      grow: 6,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      minWidth: "6rem",
    },
    {
      name: "Release Year",
      selector: (row) => row.release_year,
      minWidth: "6rem",
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      minWidth: "5rem",
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      minWidth: "6rem",
    },
    {
      name: "Platform",
      selector: (row) => row.platform,
      minWidth: "7.5rem",
    },
  ]

  const customCompactStyle = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        // borderStyle: "solid",
        // borderWidth: "1px",
        // borderColor: "#a1a1aa",
        backgroundColor: "#e4e4e7",
        minHeight: "32px",
      },
    },
    headCells: {
      style: {
        borderStyle: "solid solid none solid",
        borderWidth: "1px",
        borderColor: "#a1a1aa",
        // "&:not(:last-of-type)": {
        //   borderRightStyle: "solid",
        //   borderRightWidth: "1px",
        //   borderRightColor: "#a1a1aa",
        // },
      },
    },
    cells: {
      style: {
        borderStyle: "solid solid none solid",
        // borderBottomStyle: "none",
        borderWidth: "1px",
        borderColor: "#a1a1aa",
        // "&:not(:last-of-type)": {
        //   borderRightStyle: "solid",
        //   borderRightWidth: "1px",
        //   borderRightColor: "#a1a1aa",
        // },
      },
    },
  }

  return (
    <div className="text-black max-w-full">
      <h1 className="text-xl sm:text-2xl font-medium m-2 pt-4 px-1">
        Basic Data Table
      </h1>
      <hr className="flex flex-1 mt-4 mb-6 mx-2" />
      {/* Handle Error State */}
      <ErrorAlertCard error={isError} />

      {/* Handle Loading State */}
      <Spinner loading={isLoading} />

      {/* Handle Loaded Table State */}
      {data && !isLoading && !isError && (
        <div className="mx-3 my-3">
          <BasicDataTable
            columns={columns}
            data={data?.titles}
            // title="ABC"
            // theme="dark"
            customStyles={customCompactStyle}
            // dense={true}
            responsive={false}
            // className="border border-solid border-zinc-400"
          />
        </div>
      )}
    </div>
  )
}

BasicTablePage.pageTitle = `Tabula Rasa: Basic Table`
BasicTablePage.getLayout = getLayout

export default BasicTablePage

// Example Record Object:
//
// {
//     "show_id": "s733",
//     "title": "The Boat Show",
//     "type": "TV Show",
//     "director": null,
//     "cast": [],
//     "country": null,
//     "date_added": null,
//     "release_year": "2018",
//     "rating": "13+",
//     "duration": "1 Season",
//     "genres": [
//         "Tv Shows"
//     ],
//     "description": "The Boat Show is a program dedicated to nautical lovers and boat owners. It is the only show in the world completely dedicated to the nautical world, made with passion by a team of experts with more than 15 years of experience.",
//     "platform": "Amazon Prime",
//     "pk": 735
// }
