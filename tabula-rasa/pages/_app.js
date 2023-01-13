/*
  This is the central / root component for the Next.js app.
*/
import { useEffect, useState } from "react"
import Head from "next/head"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { Theme } from "react-daisyui"
import "../styles/globals.css"

import {
  useAppSettingsStore,
  usePreferenceSettingsStore,
} from "../stores/appSettingsStore"

/* ========================================================================= */

export default function MyApp({ Component, pageProps }) {
  // Get App Title:
  const appTitle = useAppSettingsStore((state) => state.appTitle)
  // Retrieve the site theme:
  const siteTheme = usePreferenceSettingsStore((state) => state.theme)

  // Function to define layouts on a per page basis:
  const getLayout = Component.getLayout || ((page) => page)

  // For setting page titles on a per page basis:
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
          httpEquiv="X-UA-Compatible"
          content="ie=edge"
        />
        <meta
          name="description"
          content="Enterprise job monitoring and management tool."
        />
        <meta
          property="og:locale"
          content="en_US"
        />
        <meta
          property="og:type"
          content="website"
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
