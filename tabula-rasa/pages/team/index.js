// import MainLayout from "../layouts/MainLayout"
import { getLayout } from "../../layouts/MainLayout"

const TeamPage = () => {
  return (
    <div className="p-2">
      <h1 className="font-medium text-3xl my-2 mx-2">
        Team Page
      </h1>
    </div>
  )
}

TeamPage.pageTitle = "Tabula Rasa: Team Page"
TeamPage.getLayout = getLayout

export default TeamPage
