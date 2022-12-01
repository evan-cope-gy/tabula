/*
  The Main Layout used for displaying most pages on the site.
*/

// import { useState } from "react"
import Footer from "../components/MyFooter"

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
        <Footer />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
