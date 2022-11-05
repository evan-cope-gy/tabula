import { useState } from "react"
import Head from "next/head"
import { Container, Content, Header, Footer } from "rsuite"
import CustomNavbar from "../components/MyCustomNavbar"
import MyFooter from "../components/MyFooter"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [activeKey, setActiveKey] = useState(null)

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

      <Container className="">
        <Content className="p-4">{children}</Content>

        <Footer className="mt-2 mb-1 mx-auto">
          <MyFooter />
        </Footer>
      </Container>
    </div>
  )
}

export default MainLayout
