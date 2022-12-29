/*
  The Main Layout used for displaying most pages on the site.
*/
import { useState } from "react"
import Footer from "../components/MyFooter"
import HeaderNavbar from "../components/MyNavbar"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [navbarActiveKey, setNavbarActiveKey] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <header
        aria-label="Site Header"
        className=""
      >
        <HeaderNavbar
          activeKey={navbarActiveKey}
          setActiveKey={setNavbarActiveKey}
        />
      </header>

      <main className="flex-1">
        <div className="px-3 py-2">{children}</div>
      </main>

      <footer
        aria-label="Site Footer"
        className=""
      >
        <Footer />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
