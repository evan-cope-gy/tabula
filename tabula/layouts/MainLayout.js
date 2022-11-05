import { useState } from "react"
import { Container, Content, Header, Footer } from "rsuite"
import CustomNavbar from "../components/MyCustomNavbar"
import MyFooter from "../components/MyFooter"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [activeKey, setActiveKey] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="">
        <CustomNavbar
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
      </Header>

      <Container className="flex-1">
        <Content className="px-3 py-2">{children}</Content>
      </Container>
      <Footer className="">
        <MyFooter />
      </Footer>
    </div>
  )
}

export default MainLayout
