/*
  This is the central / root component for the Next.js app.
*/
// import { useEffect, useState } from "react"
import Head from "next/head"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { Theme } from "react-daisyui"
import "@/styles/globals.css"

import {
  useAppSettingsStore,
  usePreferenceSettingsStore,
} from "../state-stores"

/* ========================================================================= */

export default function MyApp({ Component, pageProps }) {
  // Get the app's title:
  const appTitle = useAppSettingsStore((state) => state.appTitle)
  // Retrieve the site theme:
  const siteTheme = usePreferenceSettingsStore((state) => state.theme)

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  // USe page title defined at the page level, if available:
  const pageTitle = `${appTitle}: ${Component.pageTitle}` || appTitle

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="description"
          content="Enterprise job monitoring and management tool."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <title>{pageTitle}</title>
      </Head>
      <Theme dataTheme={siteTheme}>
        {getLayout(<Component {...pageProps} />)}
      </Theme>
    </>
  )
}
