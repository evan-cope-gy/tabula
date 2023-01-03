// import MainLayout from "../layouts/MainLayout"
import { useState } from "react"
import { getLayout } from "../../layouts/MainLayout"
import DialogModal from "../../components/MyDialogModal"

const SettingsPage = () => {
  // state for modal:
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-2">
      <h1 className="font-medium text-3xl my-2 mx-2">
        Settings
      </h1>

      <div className="container flex items-center justify-center">
        <button
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setIsOpen(true)}>
          Show Modal
        </button>
      </div>

      <DialogModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

SettingsPage.pageTitle = "Tabula Rasa: Settings Page"
SettingsPage.getLayout = getLayout

export default SettingsPage
