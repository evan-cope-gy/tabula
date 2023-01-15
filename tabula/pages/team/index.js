/* 
  The landing for the team page.
*/
// import { useState } from "react"
import { getLayout } from "../../layouts/MainLayout"
import PageTitleSection from "../../components/PageTitleSection"
// import cls from "classnames"
/* ========================================================================= */

export default function TeamHomePage() {
  return (
    <div className="p-2">
      <PageTitleSection title="Team > Home" />
    </div>
  )
}

TeamHomePage.pageTitle = "Team - Home"
TeamHomePage.getLayout = getLayout
