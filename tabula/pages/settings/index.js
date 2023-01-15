/* 
  The is the main settings page for the site.
*/
// import { useEffect, useState } from "react"
import { Divider, Table, Toggle } from "react-daisyui"
import cls from "classnames"
import { shallow } from "zustand/shallow"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

import { getLayout } from "@/layouts/MainLayout"
import PageTitleSection from "@/components/PageTitleSection"
import {
  usePreferenceSettingsStore,
  useAppSettingsStore,
} from "../../state-stores"

/* ========================================================================= */

// A Simple Card component for displaying settings:
function SettingsCard({ title, children }) {
  return (
    <div
      className={cls(
        "w-full max-w-lg min-w-max m-3 p-5",
        "border-2 border-info rounded-xl shadow-md"
      )}
    >
      <h2 className="text-2xl font-semibold underline px-2 pb-5">{title}</h2>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  // Retrieve the current state for: siteTheme, stickyNavbarHeader, sidebarOpen:
  const [siteTheme, toggleSiteTheme, navbarIsSticky, toggleStickyNavbar] =
    usePreferenceSettingsStore(
      (state) => [
        state.theme,
        state.toggleTheme,
        state.stickyNavbarHeader,
        state.toggleStickyNavbarHeader,
      ],
      shallow
    )

  // Retrieve the current state for: sidebarOpen:
  const [sidebarIsOpen, toggleSidebarOpen] = useAppSettingsStore(
    (state) => [state.sidebarOpen, state.toggleSidebarOpen],
    shallow
  )
  // const siteTheme = usePreferenceSettingsStore((state) => state.theme)
  // Get the action to toggle the site theme:
  // const toggleSiteTheme = usePreferenceSettingsStore(
  //   (state) => state.toggleTheme
  // )
  // Retrieve the current sticky header setting:
  // const navbarIsSticky = usePreferenceSettingsStore(
  //   (state) => state.stickyNavbarHeader
  // )
  // Get the action to toggle the sticky header setting:
  // const toggleStickyNavbar = usePreferenceSettingsStore(
  //   (state) => state.toggleStickyNavbarHeader
  // )
  // Retrieve the current sidebar open setting:
  // const sidebarIsOpen = useAppSettingsStore((state) => state.sidebarOpen)
  // Get the action to toggle the sidebar open setting:
  // const toggleSidebarOpen = useAppSettingsStore(
  //   (state) => state.toggleSidebarOpen
  // )

  return (
    <div className="p-2 overflow-x-auto">
      <PageTitleSection title="Site Settings" />

      <div className="flex flex-col">
        <div className="flex flex-wrap">
          {/* Preference Settings Card */}
          <SettingsCard title="Preferences">
            <Table className="w-full">
              <Table.Body>
                <Table.Row>
                  <span>🗺️ Sticky Navbar</span>
                  <span></span>
                  <span>
                    <Toggle
                      size="md"
                      className="block mx-auto "
                      checked={navbarIsSticky === true}
                      onChange={toggleStickyNavbar}
                    />
                  </span>
                </Table.Row>
                <Table.Row>
                  <span></span>
                  <span></span>
                  <span></span>
                </Table.Row>
              </Table.Body>
            </Table>
          </SettingsCard>

          {/* Experimental Settings Card */}
          <SettingsCard title="Experimental Features">
            <Table className="w-full">
              <Table.Body>
                <Table.Row>
                  <span>🌜 Dark Mode</span>
                  <span></span>
                  <span>
                    <Toggle
                      size="md"
                      className="block mx-auto "
                      checked={siteTheme === "dark"}
                      onChange={toggleSiteTheme}
                    />
                  </span>
                </Table.Row>
                <Table.Row>
                  <span>Open Sidebar</span>
                  <span></span>
                  <span>
                    <Toggle
                      size="md"
                      className="block mx-auto "
                      checked={sidebarIsOpen === true}
                      onChange={toggleSidebarOpen}
                    />
                  </span>
                </Table.Row>
                <Table.Row>
                  <span></span>
                  <span></span>
                  <span></span>
                </Table.Row>
              </Table.Body>
            </Table>
          </SettingsCard>
        </div>

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

SettingsPage.pageTitle = "Site Settings"
SettingsPage.getLayout = getLayout
