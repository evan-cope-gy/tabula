import Link from "next/link"
import { Menu } from "@headlessui/react"
import cls from "classnames"

const DropdownMenu = ({ title, links }) => {
    return (
      <Menu>
        <Menu.Button className="inline-block text-stone-700 font-medium transition rounded p-2 hover:text-sky-400 hover:ring-sky-400 hover:ring-1">
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
        <Menu.Items className="absolute z-10 w-48 mt-2 origin-top-right bg-white divide-y divide-zinc-300 rounded-md shadow-lg outline-none">
          {links.map((link) => (
            <Menu.Item
              key={link.href}
              disabled={link?.disabled}
              // as="a"
            >
              {({ active }) => (
                <Link
                  href={link.href}
                  className={cls(
                    "block px-4 py-2 text-sm font-medium transition rounded",
                    `${
                      active ? "bg-sky-400 text-white" : "bg-white text-zinc-600"
                    }`,
                    `${link?.disabled ? "opacity-75" : ""}`
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

export default DropdownMenu
