/* 
  The is the landing page for the admin portion of the site.
*/
import { useState } from "react"
import { getLayout } from "../../layouts/MainLayout"
import PageTitleSection from "../../components/PageTitleSection"
import cls from "classnames"
/* ========================================================================= */

const AdminHomePage = () => {
  // state for modal:
  // let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-2">
      <PageTitleSection title="Admin > Home" />

      {/* <div className="container"></div> */}
    </div>
  )
}

AdminHomePage.pageTitle = "Admin > Home"
AdminHomePage.getLayout = getLayout

export default AdminHomePage
