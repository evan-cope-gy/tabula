/*
  The Main Layout used for displaying most pages on the site.
*/
import { useState } from "react"
import Footer from "../components/MyFooter"
import HeaderNavbar from "../components/MyHeaderNavbar"
import cls from "classnames"

const MainLayout = ({ children }) => {
  // Navbar active key:
  const [stickyHeader, setStickyHeader] = useState(true)

  return (
    <div className="flex flex-col min-h-screen max-w-none">
      <header
        aria-label="Dashboard Home"
        className={cls(
          `${stickyHeader && "sticky top-0 z-50"}`,
          "bg-zinc-400 min-w-fit max-w-full",
          "rounded-b-xl shadow-md shadow-zinc-500",
          "h-14 xl:mx-3 2xl:mx-6"
        )}
      >
        <HeaderNavbar />
      </header>

      <main className="flex-1">
        <div className="sm:px-4 sm:pt-1 sm:pb-3">{children}</div>
      </main>

      <footer
        aria-label="Site Footer"
        className="bg-zinc-600"
      >
        <Footer />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
