import { useState } from "react"
import "rsuite/dist/rsuite.min.css"
import "../styles/globals.css"
import { CustomProvider } from "rsuite"
import enUS from "rsuite/locales/en_US"

function MyApp({ Component, pageProps }) {
  const [appTheme, setAppTheme] = useState("light")

  return (
    <CustomProvider
      locale={enUS}
      theme={appTheme}
    >
      <Component {...pageProps} />
    </CustomProvider>
  )
}

export default MyApp
