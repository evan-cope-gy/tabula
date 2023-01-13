/*
  The Main Layout used for displaying most pages on the site.
*/
import { useState, useEffect } from "react"

import cls from "classnames"
import BasicFooter from "../components/BasicFooter"
import MainSidebar from "../components/MainSidebar"
import HeaderNavbar from "../components/HeaderNavbar"

import {
  useAppSettingsStore,
  usePreferenceSettingsStore,
} from "../stores/appSettingsStore"

/* ========================================================================= */

const MainLayout = ({ children, ...props }) => {
  // Retrieve tha App Title for the Navbar Header:
  const appTitle = useAppSettingsStore((state) => state.appTitle)
  // Retrieve the sticky header setting:
  const stickyHeader = usePreferenceSettingsStore(
    (state) => state.getStickHeader
  )

  return (
    <div className="flex flex-col min-h-screen max-w-none">
      <header
        aria-label="Site Navbar"
        className={cls(
          "flex w-full items-center font-sans",
          `${stickyHeader && "sticky top-0 z-50"}`,
          "mb-5 md:mb-3"
        )}
      >
        <>
          <HeaderNavbar
            title={appTitle}
            examplesDropdownItems={[
              { title: "Basic", href: "/tables" },
              { title: "Searchable", href: "/tables/searchable" },
              // { title: "Pagination", href: "/tables/pagination" },
              { title: "Extras...", href: "/tables/kitchen-sink-demo" },
            ]}
            stickyHeader={stickyHeader}
          />
        </>
      </header>

      <main className="flex-1 ">
        {/* Section for Sidebar (when applicable) */}
        <MainSidebar />

        {/* Section for Main Content */}
        <div
          className={cls(
            // `${sidebarOpen && "flex-1 min-w-0 overflow-auto"}`,
            "mx-3 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10"
          )}
        >
          {children}
        </div>
      </main>

      <footer aria-label="Site Footer">
        <BasicFooter
          resourceLinks={[
            { title: "Team", href: "/team" },
            { title: "GitHub", href: "/" },
            { title: "Docs", href: "/docs" },
            { title: "Contact", href: "/" },
          ]}
        />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
