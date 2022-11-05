import React from "react"
import useStreamingTitlesAPI from "../../hooks/streamingTitles"
import MyDataTable from "../../components/MyDataTable"
// import streamingTitlesData from "../../data/titles.json"
import MainLayout from "../../layouts/MainLayout"

const ListTablePage = () => {
  // Streaming-Titles API request:
  const { data, isLoading, isError } = useStreamingTitlesAPI("/api/v1/titles")

  console.log({ data, isLoading, isError })

  return (
    <MainLayout>
      <MyDataTable
        data={data}
        isLoading={isLoading}
        isError={isError}
        // fillHeight
      />
    </MainLayout>
  )
}

export default ListTablePage
