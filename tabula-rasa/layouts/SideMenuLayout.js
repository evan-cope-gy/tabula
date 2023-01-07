/*
  The layout used a majority of the pages on the site.
*/
import { useState } from "react"
import Footer from "../components/MyFooter"
import HeaderNavbar from "../components/MyNavbar"

const MainLayout = ({ children }) => {
  // Navbar active key:
  // const [navbarActiveKey, setNavbarActiveKey] = useState(null)

  return <div className="min-h-screen flex flex-col"></div>
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
