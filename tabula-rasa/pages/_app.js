/*
  This is the central / root component for the Next.js app.
*/
import { useState } from "react"
import Head from "next/head"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { Theme } from "react-daisyui"
import "../styles/globals.css"
/* ========================================================================= */

export default function MyApp({ Component, pageProps }) {
  // State for changing DaisyUI themes:
  const [siteTheme, setSiteTheme] = useState("myCustomLightTheme")

  // Function to define layouts on a per page basis:
  const getLayout = Component.getLayout || ((page) => page)

  // For setting page titles on a per page basis:
  const pageTitle = `Snowplow: ${Component.pageTitle}` || appTitle

  return (
    <Theme dataTheme={siteTheme}>
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
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <title>{pageTitle}</title>
      </Head>

      {getLayout(
        <Component
          siteTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          {...pageProps}
        />
      )}
    </Theme>
  )
}
