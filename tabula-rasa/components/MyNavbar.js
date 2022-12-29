import Link from "next/link"
import Image from "next/image"
import { Menu } from "@headlessui/react"
import cls from "classnames"

const dropDownLinks = [
  { label: "Go Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Team", href: "/team" },
]

const MyDropdown = ({ title, links }) => {
  return (
    <Menu>
      <Menu.Button className="inline-block text-gray-500 font-medium transition hover:text-gray-500/75">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 inline ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute z-10 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {links.map((link) => (
          <Menu.Item
            key={link.href}
            // as="a"
          >
            {({ active }) => (
              <Link
                href={link.href}
                className={cls(
                  "block px-4 py-2 text-sm font-medium transition rounded-lg",
                  `${
                    active ? "bg-sky-500 text-white" : "bg-white text-gray-500"
                  }`
                )}
              >
                {link.label}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

const HeaderNavbar = () => {
  return (
    <div className="mx-auto flex h-20 items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link
        className="inline "
        href="/"
      >
        <span className="sr-only">Home</span>
        <Image
          className="inline mb-1"
          src="/default-icon.svg"
          width={50}
          height={50}
          alt="Logo"
        />
        <div className="inline-block mt-3">
          <span className="font-medium text-2xl text-cyan-700">
            Tabula Rasa
          </span>
        </div>
      </Link>

      <div className="flex flex-1 items-center justify-end ml-3 md:justify-between">
        <nav
          aria-label="Site Navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                className="text-gray-500 font-medium transition hover:text-gray-500/75"
                href="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 font-medium transition hover:text-gray-500/75"
                href="/"
              >
                History
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 font-medium transition hover:text-gray-500/75"
                href="/"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 font-medium transition hover:text-gray-500/75"
                href="/"
              >
                Projects
              </Link>
            </li>

            <li>
              <MyDropdown
                title="Dropdown Menu"
                links={dropDownLinks}
              />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            {/* <Link
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              href="/"
            >
              Login
            </Link> */}

            <Link
              className="hidden rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 sm:block"
              href="/"
            >
              Register
            </Link>
          </div>

          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderNavbar
