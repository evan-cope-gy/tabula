// import MainLayout from "../layouts/MainLayout"
import { getLayout } from "../../layouts/MainLayout"

const TeamPage = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl"> Team Page </h1>
    </div>
  )
}

TeamPage.pageTitle = "Tabula Rasa: Team Page"
TeamPage.getLayout = getLayout

export default TeamPage
