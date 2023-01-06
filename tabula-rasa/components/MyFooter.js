import Link from "next/link"

const Footer = () => {
  return (
    <div className="text-white text-xs font-medium antialiased mx-3 mb-0 px-2 sm:min-w-max md:flex md:items-center md:justify-between md:p-2 lg:px-6">
      <span className="sm:text-center">
        © { `${new Date().getFullYear()}, ` }
        <Link
          className="hover:text-cyan-400"
          href="https://github.com/copev313"
        >
          Hashy Codes
        </Link>
        .
      </span>
      <ul className="flex flex-nowrap items-center mt-3 sm:mt-1">
        <li>
          <Link
            className="mr-4 hover:text-cyan-400 md:mr-6"
            href="/team"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            className="mr-4 hover:text-cyan-400 md:mr-6"
            href="https://github.com/copev313"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-cyan-400"
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
