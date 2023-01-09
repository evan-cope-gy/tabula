/*
  Page displayed for 500 server errors.
*/
import { useEffect, useState } from "react"
import Link from "next/link"
import { CodeMockup } from "react-daisyui"
import { getLayout } from "../layouts/BasicLayout"
import cls from "classnames"
/* ========================================================================= */

const Custom500ErrorPage = () => {
  const [emoticon, setEmoticon] = useState("")

  // Emoticons to choose from:
  // (https://gist.github.com/jordanorelli/11229304)
  // (https://fsymbols.com/emoticons/)
  const emoticons = [
    "(╯°□°)╯︵ ┻━┻", // table flip
    "(ง︡'-'︠)ง", // fists up
    "ლ(ಠ益ಠლ)", // angry face
  ]

  useEffect(() => {
    const randomEmoticon =
      emoticons[Math.floor(Math.random() * emoticons.length)]
    setEmoticon(randomEmoticon)
  }, [])

  return (
    <div
      className={cls(
        "bg-zinc-700 text-gray-100 text-lg font-mono",
        "min-h-screen py-8"
      )}
    >
      <div
        className={cls(
          "mt-8 font-bold text-center text-zinc-100",
          "text-3xl sm:text-4xl md:text-5xl"
        )}
      >
        {" "}
        500 - INTERNAL ERROR!
      </div>
      {/* Space filler container... */}
      <div className="container h-20"></div>
      {/* Code Mockup Window */}
      <CodeMockup
        className={cls(
          "container bg-zinc-900 shadow-lg",
          "max-w-sm sm:max-w-md md:max-w-lg",
          "min-w-max"
        )}
      >
        <CodeMockup.Line
          className="text-zinc-400 italic"
          dataPrefix={false}
        >
          // Handle server error:
        </CodeMockup.Line>
        <CodeMockup.Line
          className=""
          dataPrefix={false}
        >
          <span className="text-violet-400">catch </span>
          {"("}
          <span className="text-rose-700">{"Error e"}</span>
          {") {"}
          <span className="text-green-600 italic">{""}</span>
        </CodeMockup.Line>
        <CodeMockup.Line
          className=""
          dataPrefix={false}
        >
          <span className="pl-15px text-amber-600 pl-5">{"setAngryFace"}</span>

          {"("}
          <span className="text-lime-500">"{emoticon}"</span>
          {");"}
        </CodeMockup.Line>
        <CodeMockup.Line dataPrefix={false}>{"}"}</CodeMockup.Line>
        <CodeMockup.Line
          className="text-zinc-400 italic"
          dataPrefix={false}
        >
          //{" "}
          <Link
            className="underline hover:text-purple-400"
            href="/"
          >
            Go home!
          </Link>
        </CodeMockup.Line>
      </CodeMockup>
    </div>
  )
}

Custom500ErrorPage.pageTitle = "500 Error!"
Custom500ErrorPage.getLayout = getLayout

export default Custom500ErrorPage
