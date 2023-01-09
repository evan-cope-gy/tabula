/*
  Page displayed for 404 not found errors.
*/
import { useEffect, useState } from "react"
import Link from "next/link"
import { CodeMockup } from "react-daisyui"
import { getLayout } from "../layouts/BasicLayout"
import cls from "classnames"
/* ========================================================================= */

const Custom404NotFound = () => {
  const [emoticon, setEmoticon] = useState("")

  // Emoticons to choose from:
  // (https://gist.github.com/jordanorelli/11229304)
  // (https://fsymbols.com/emoticons/)
  const emoticons = [
    "¯_(ツ)_/¯", // shrug
    "(－‸ლ)", // facepalm
    "( ˘︹˘ )", // sad face
    "(͠◉_◉᷅ )", // confused face
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
        404 - PAGE NOT FOUND!
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
          // Handle page not found:
        </CodeMockup.Line>
        <CodeMockup.Line
          className=""
          dataPrefix={false}
        >
          <span className="text-rose-600">if </span>
          {"("}
          <span className="text-sky-500">{"!"}</span>
          <span className="text-amber-600 italic">{"found"}</span>
          {") {"}
        </CodeMockup.Line>
        <CodeMockup.Line
          className=""
          dataPrefix={false}
        >
          <span className="pl-15px text-sky-500 pl-5">{"throw"}</span>
          <span>
            {"("}
            <span className="text-lime-500">"{emoticon}"</span>
            {");"}
          </span>
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

Custom404NotFound.pageTitle = "404 Error!"
Custom404NotFound.getLayout = getLayout

export default Custom404NotFound
