import { useState } from "react"
import "rsuite/dist/rsuite.min.css"
import "../styles/globals.css"
import { CustomProvider } from "rsuite"

function MyApp({ Component, pageProps }) {
  const [appTheme, setAppTheme] = useState("light")

  return (
    <CustomProvider theme={appTheme}>
      <Component {...pageProps} />
    </CustomProvider>
  )
}

export default MyApp
