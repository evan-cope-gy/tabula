// import MainLayout from "../layouts/MainLayout"
import { getLayout } from "../../layouts/MainLayout"

const ContactPage = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl"> Contact Page </h1>
    </div>
  )
}

ContactPage.pageTitle = "Tabula Rasa: Contact Page"
ContactPage.getLayout = getLayout

export default ContactPage
