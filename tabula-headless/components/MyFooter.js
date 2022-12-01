import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mx-3 mb-1 px-2 py-2 tablet:min-w-max bg-slate-50 rounded-lg shadow-lg laptop:flex laptop:items-center laptop:justify-between laptop:p-4 desktop:px-6 dark:bg-gray-800">
      <span className="text-xs font-medium text-gray-500 tablet:text-center dark:text-gray-400">
        © 2022{" "}
        <Link
          className="hover:text-zinc-600 hover:underline"
          href="https://github.com/copev313"
        >
          Hashy Codes
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-500 dark:text-gray-400 tablet:mt-1">
        <li>
          <Link
            className="mr-4 hover:text-zinc-600 hover:underline laptop:mr-6"
            href="#"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="mr-4 hover:text-zinc-600 hover:underline laptop:mr-6"
            href="/team"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            className="mr-4 hover:text-zinc-600 hover:underline laptop:mr-6"
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
