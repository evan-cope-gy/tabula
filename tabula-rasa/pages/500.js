import Link from "next/link"
import { getLayout } from "../layouts/BasicLayout"

const Custom500NotFound = () => {
  return (
    <div className="bg-gray-700 text-gray-100 text-lg font-mono min-h-screen">
      <div className="font-bold text-center text-4xl pt-12">
        {" "}
        500 - SERVER SIDE ERROR ENCOUNTERED!
      </div>
      <div className="container h-16"></div>
      <div className="container w-96 p-4 mt-4">
        <span className="block text-gray-400 italic">
          // Handle server error:
        </span>
        <span className="block">
          <span className="text-violet-400">catch </span>
          {"("}
          <span className="text-rose-700">{"Error e"}</span>
          {") {"}
          <span className="text-green-600 italic">{""}</span>
        </span>
        <span className="block">
          <span className="pl-15px text-amber-600 pl-5">{"setAngryFace"}</span>
          <span>
            {"("}
            <span className="text-lime-500">"ლ(ಠ益ಠლ)"</span>
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

Custom500NotFound.pageTitle = "Tabula Rasa: 500 Error!"
Custom500NotFound.getLayout = getLayout

export default Custom500NotFound
