import { getLayout } from "../layouts/MainLayout"

const Home = () => {
  return (
    <div className="">
      <main className="">
        <h1 className="">Hello</h1>
      </main>
    </div>
  )
}

Home.pageTitle = "Tabula Rasa: Home"
Home.getLayout = getLayout

export default Home
