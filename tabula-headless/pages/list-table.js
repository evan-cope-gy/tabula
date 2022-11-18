import { useState } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import MyDataTable from "../../components/MyDataTable"
// import streamingTitlesData from "../../data/titles.json"
import MainLayout from "../../layouts/MainLayout"

const ListTablePage = () => {
  // Streaming-Titles API request:
  // const { data, isLoading, isError } = useTitlesAPI("/api/titles")
  // console.log({ data, isLoading, isError })

  return (
    <MainLayout>
      <MyDataTable
        autoHeight
        data={data?.titles}
        isLoading={isLoading}
        isError={isError}
        className=""
      />
    </MainLayout>
  )
}

export default ListTablePage
