import { useState } from "react"
import Head from "next/head"
import { Content, Header, Footer } from "rsuite"
import CustomNavbar from "../components/MyCustomNavbar"
import MyFooter from "../components/MyFooter"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [activeKey, setActiveKey] = useState("home")

  return (
    <div>
      <Head>
        <title>Tabula Rasa</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header>
        <CustomNavbar
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
      </Header>

      <Content className="p-4">{children}</Content>

      <Footer>
        <MyFooter />
      </Footer>
    </div>
  )
}

export default MainLayout
