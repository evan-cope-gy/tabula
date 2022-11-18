import Link from "next/link"


const MyFooter = () => {
  return (
    <footer className="mx-3 mb-1 px-2 py-2 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800">
      <span className="text-xs text-gray-400 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link href="https://github.com/copev313">
          <a className="hover:underline">Hashy Codes</a>
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xs text-gray-400 dark:text-gray-400 sm:mt-1">
        <li>
          <Link href="#">
            <a className="mr-4 hover:underline md:mr-6 ">About</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="mr-4 hover:underline md:mr-6">Suggestions</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/copev313">
            <a className="mr-4 hover:underline md:mr-6">GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default MyFooter
