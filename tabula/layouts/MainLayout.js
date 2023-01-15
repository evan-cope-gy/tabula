/*
  The Main Layout used for displaying most pages on the site.
*/
// import { useState, useEffect } from "react"
import cls from "classnames"
import BasicFooter from "../components/BasicFooter"
// import MainSidebar from "../components/MainSidebar"
import HeaderNavbar from "../components/HeaderNavbar"
// import {
//   useAppSettingsStore,
//   usePreferenceSettingsStore,
// } from "../state-stores"

/* ========================================================================= */

export default function MainLayout({ children, ...props }) {
  return (
    <div className="flex flex-col min-h-screen max-w-none">
      <HeaderNavbar />

      <main className="flex-1 ">
        {/* Section for Sidebar (when applicable) */}
        {/* <MainSidebar /> */}

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

      <BasicFooter />
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>
