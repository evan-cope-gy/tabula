import { useState } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import BasicDataTable from "../../components/MyBasicTable"
import { getLayout } from "../../layouts/MainLayout"

const BasicTablePage = () => {
  // Streaming-Titles API request:
  const { data, isLoading, isError } = useTitlesAPI("/api/titles")
  console.log({ data, isLoading, isError })

  const streamingTitleColumns = [
    {
      header: "Show ID",
      accessorKey: "show_id",
    },
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "Release Year",
      accessorKey: "release_year",
    },
    {
      header: "Rating",
      accessorKey: "rating",
    },
    {
      header: "Duration",
      accessorKey: "duration",
    },
    {
      header: "Platform",
      accessorKey: "platform",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
  ]

  return (
    <div>
      <h1 className="font-medium text-2xl underline my-2 mx-2">
        Basic Data Table
      </h1>

      {/* Handle Error State */}
      { isError && (<div className="container">Error!</div>) }

      {/* Handle Loading State */}
      { isLoading && (<div className="container">Loading...</div>) }

      <div className="">
          <BasicDataTable
          columns={streamingTitleColumns}
          data={data?.titles}
          striped
          className=""
        />
      </div>
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
