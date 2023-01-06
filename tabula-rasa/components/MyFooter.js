import React from "react"
import Link from "next/link"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cls from "classnames"

const Footer = () => {
  return (
    <div
      className={cls(
        "text-white text-xs font-medium mx-3",
        "flex items-center justify-between py-3 lg:px-6 2xl:px-8"
      )}
    >
      <div className="">
        &copy; {`${new Date().getFullYear()}, `}
        <Link
          className="hover:text-sky-400"
          href="https://github.com/copev313"
        >
          Hashy Codes
        </Link>
        .
      </div>
      <ul className="flex flex-nowrap items-center">
        <li>
          <Link
            className="hover:text-sky-400 mr-6"
            href="/team"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-400 mr-6"
            href="https://github.com/copev313"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-400 mr-6"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
