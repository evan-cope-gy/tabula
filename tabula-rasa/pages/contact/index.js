// import MainLayout from "../layouts/MainLayout"
import { getLayout } from "../../layouts/MainLayout"

const ContactPage = () => {
  return (
    <div className="p-2">
      <h1 className="font-medium text-3xl my-2 mx-2">
        Contact Page
      </h1>
    </div>
  )
}

ContactPage.pageTitle = "Tabula Rasa: Contact Page"
ContactPage.getLayout = getLayout

export default ContactPage
