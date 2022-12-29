// import MainLayout from "../layouts/MainLayout"
import { getLayout } from "../../layouts/MainLayout"

const SettingsPage = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl"> Settings Page </h1>
    </div>
  )
}

SettingsPage.pageTitle = "Tabula Rasa: Settings Page"
SettingsPage.getLayout = getLayout

export default SettingsPage
