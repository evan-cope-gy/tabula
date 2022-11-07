import { useState, useEffect } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import MyDataTable from "../../components/MyDataTable"
import SearchBar from "../../components/SearchBar"
import MainLayout from "../../layouts/MainLayout"

const ListTablePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  // const [compact, setCompact] = useState(false)

  // Streaming-Titles API request:
  const { data, isLoading, isError } = useTitlesAPI("/api/titles")
  // console.log({ data, isLoading, isError })

  return (
    <MainLayout>
      {/* <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> */}
      <MyDataTable
        autoHeight
        compact={true}
        data={data?.titles}
        isLoading={isLoading}
        isError={isError}
        className=""
      />
    </MainLayout>
  )
}

export default ListTablePage
