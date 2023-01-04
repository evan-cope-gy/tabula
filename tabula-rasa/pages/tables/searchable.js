import { useState } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import MyDataTable from "../../components/MyDataTable"
import { getLayout } from "../../layouts/MainLayout"

const SearchTablePage = () => {
  // Streaming-Titles API request:
  const { data, isLoading, isError } = useTitlesAPI("/api/titles")
  // DEBUGGING...
  // console.log({ data, isLoading, isError })

  const columns = [
    {}
  ]

  return (
    <div>
      <MyDataTable
        data={data?.titles}
        columns={columns}
        className=""
      />
    </div>
  )
}

SearchTablePage.pageTitle = "Tabula Rasa: Search"
SearchTablePage.getLayout = getLayout

export default SearchTablePage
