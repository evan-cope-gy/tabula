// import { useState } from "react"
import MyFooter from "../components/MyFooter"

const MainLayout = ({ children }) => {
  // Navbar active key:
  //   const [activeKey, setActiveKey] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <div className=""></div>

      <main className="flex-1">
        <div className="px-3 py-2">{children}</div>
      </main>

      <footer className="container">
        <MyFooter />
      </footer>
    </div>
  )
}

export default MainLayout
