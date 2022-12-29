import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-gray-400/40 mx-3 mb-1 px-2 py-2 sm:min-w-max md:flex md:items-center md:justify-between md:p-4 lg:px-6 dark:bg-gray-800">
      <span className="text-xs font-medium text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link
          className="hover:text-zinc-600 hover:underline"
          href="https://github.com/copev313"
        >
          Hashy Codes
        </Link>
        .
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-1">
        <li>
          <Link
            className="mr-4 hover:text-zinc-600 hover:underline md:mr-6"
            href="/team"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            className="mr-4 hover:text-zinc-600 hover:underline md:mr-6"
            href="https://github.com/copev313"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-zinc-600 hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
