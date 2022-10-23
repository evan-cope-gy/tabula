import Head from "next/head"
// import Image from "next/image"
// import styles from "../styles/index.module.css"
// import { Container, Divider } from "semantic-ui-react"

import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import SampleTable from "../components/SampleTable.js"
import SearchBar from "../components/SearchBar.js"

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Tabula Rasa - Next.js</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="container p-4">
        <header>
          <Header />
        </header>

        <div className="">
          <main className="container p-1 outline-dashed outline-2">
            <SearchBar />
            <SampleTable />
          </main>
        </div>

        <footer className="my-2 px-1 pb-1">
          <Footer />
        </footer>
      </div>
    </div>
  )
}
