/* 
  The is the main settings page for the site.
*/
// import { useEffect, useState } from "react"
import { getLayout } from "../../layouts/MainLayout"

import { Table, Toggle } from "react-daisyui"
import PageTitleSection from "../../components/PageTitleSection"
import { usePreferenceSettingsStore } from "../../stores/appSettingsStore"
// import cls from "classnames"
/* ========================================================================= */

const SettingsPage = ({ ...props }) => {
  // Retrieve the current site theme:
  const siteTheme = usePreferenceSettingsStore((state) => state.theme)
  // Retrieve the toggleSiteTheme action:
  const toggleSiteTheme = usePreferenceSettingsStore(
    (state) => state.toggleTheme
  )

  // const toggleTheme = () => {
  //   toggleSiteTheme()
  // }

  return (
    <div className="p-2 overflow-x-auto">
      <PageTitleSection title="Settings" />

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

SettingsPage.pageTitle = "Settings Page"
SettingsPage.getLayout = getLayout

export default SettingsPage
