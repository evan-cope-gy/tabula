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
    <div className="min-h-screen flex flex-col bg-zinc-100/70">
      <header
        aria-label="Dashboard Home"
        className="bg-zinc-300 border border-b-2 border-zinc-400/80"
      >
        <HeaderNavbar
          activeKey={navbarActiveKey}
          setActiveKey={setNavbarActiveKey}
        />
      </header>

      <main className="flex-1">
        <div className="px-4 pt-1 pb-3">{children}</div>
      </main>

      <footer
        aria-label="Site Footer"
        className="bg-slate-600"
      >
        <Footer />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
