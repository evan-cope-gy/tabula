import React from "react"
import useStreamingTitlesAPI from "../../hooks/streamingTitles"
import MyDataTable from "../../components/MyDataTable"
// import streamingTitlesData from "../../data/titles.json"
import MainLayout from "../../layouts/MainLayout"

const SearchTablePage = () => {
  // Streaming-Titles API request:
  // const { data, isLoading, isError } = useStreamingTitlesAPI("/api/v1/titles")

  // const tableData = streamingTitlesData.titles.slice(0, 10)
  // console.log({ data, isLoading, isError })
  return (
    <MainLayout>
      <div className="">
        <h1 className="font-bold text-center"> Search Table </h1>
        {/* <MyDataTable
          data={data}
          isLoading={false}
          isError={false}
          autoHeight={true}
        /> */}
      </div>
    </MainLayout>
  )
}

export default SearchTablePage
