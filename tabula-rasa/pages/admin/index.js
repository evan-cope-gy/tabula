/* 
  The is the landing page for the admin portion of the site.
*/
import { useState } from "react"
import { getLayout } from "../../layouts/MainLayout"
import cls from "classnames"
/* ========================================================================= */

const AdminHomePage = () => {
  // state for modal:
  // let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-2">
      <h1 className="font-medium text-3xl my-2 mx-2">Settings</h1>

      <div className="container flex items-center justify-center"></div>
    </div>
  )
}

AdminHomePage.pageTitle = "Tabula Rasa: Admin Home"
AdminHomePage.getLayout = getLayout

export default AdminHomePage
