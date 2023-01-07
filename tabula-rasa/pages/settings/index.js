/* 
  The is the main settings page for the site.
*/
import { useEffect, useState } from "react"
import { getLayout } from "../../layouts/MainLayout"
import { Table, Toggle } from "react-daisyui"
import cls from "classnames"
/* ========================================================================= */

const SettingsPage = ({ siteTheme, setSiteTheme, ...props }) => {
  const toggleSiteTheme = () => {
    if (siteTheme === "dark") {
      setSiteTheme("myCustomLightTheme")
    } else {
      setSiteTheme("dark")
    }
  }

  // const switchSiteTheme = (newTheme) => {
  //   setSiteTheme(newTheme)
  // }

  // useEffect(() => {
  //   toggleSiteTheme()
  // }, [isChecked])

  return (
    <div className="p-2 overflow-x-auto">
      <h1 className="font-medium text-3xl my-2 mx-2">Settings</h1>

      <div className="container flex flex-col items-center justify-center">
        <Toggle
          size="md"
          className="mb-6"
          checked={siteTheme === "dark"}
          onChange={toggleSiteTheme}
        />
        <Table>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
          </Table.Head>

          <Table.Body>
            <Table.Row hover>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Blue</span>
            </Table.Row>

            <Table.Row hover>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row hover>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Red</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

SettingsPage.pageTitle = "Tabula Rasa: Settings Page"
SettingsPage.getLayout = getLayout

export default SettingsPage
