import { useState } from "react"
import Head from "next/head"
// import Image from "next/image"
// import styles from "../styles/index.module.css"
import { Content, Header, Footer } from "rsuite"
import CustomNavbar from "../components/MyCustomNavbar"
import DataTable from "../components/MyDataTable"

export default function Home() {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <>
      <Head>
        <title>Tabula Rasa: Job Monitoring</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="">
        <Header>
          <CustomNavbar
            activeKey={activeKey}
            onSelect={setActiveKey}
          />
        </Header>

        <Content className="p-4">
          {/* Render Searchbar Conditionally based on page */}
          {/* <SearchBar /> */}
          {/* <DataTable /> */}
        </Content>

        <Footer>{/* Footer here */}</Footer>
      </div>
    </>
  )
}
