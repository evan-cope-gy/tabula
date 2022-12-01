import Link from "next/link"
import { getLayout } from "../layouts/BasicLayout"

const Custom404NotFound = () => {
  return (
    <div className="bg-gray-700 text-gray-100 text-lg font-mono min-h-screen">
      <div className="font-bold text-center text-4xl pt-12">
        {" "}
        404 - PAGE NOT FOUND!
      </div>
      <div className="container h-16"></div>
      <div className="container w-96 p-4 mt-4">
        <span className="block text-gray-400 italic">
          // 404 page not found:
        </span>
        <span className="block">
          <span className="text-rose-600">if </span>
          {"("}
          <span className="text-sky-500">{"!"}</span>
          <span className="text-amber-600 italic">{"found"}</span>
          {") {"}
        </span>
        <span className="block">
          <span className="pl-15px text-sky-500 pl-5">{"    throw"}</span>
          <span>
            {"("}
            <span className="text-lime-500">"(╯°□°)╯︵ ┻━┻"</span>
            {");"}
          </span>
          <span className="block">{"}"}</span>
          <span className="text-gray-400 italic">
            //{" "}
            <Link
              className="underline text-gray-400 hover:text-purple-500"
              href="/"
            >
              Go home!
            </Link>
          </span>
        </span>
      </div>
    </div>
  )
}

Custom404NotFound.getLayout = getLayout

export default Custom404NotFound
