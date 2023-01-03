/*
  The Main Layout used for displaying most pages on the site.
*/
import { useState } from "react"
import Footer from "../components/MyFooter"
import HeaderNavbar from "../components/MyHeaderNavbar"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [navbarActiveKey, setNavbarActiveKey] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <header
        aria-label="Dashboard Home"
        className="bg-zinc-200 shadow-lg"
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
        className="bg-slate-500"
        // className="bg-slate-500 border-t border-solid border-zinc-600"
      >
        <Footer />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
