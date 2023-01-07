import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import cls from "classnames"
/* ========================================================================= */

const DropdownMenu = ({ title, links }) => {
  return (
    <div className="p-2">
      <Menu>
        <Menu.Button className="">
          <div className={cls("flex flex-nowrap")}>
            <span className="pr-2">{title}</span>
            <span className="">
              <FontAwesomeIcon
                icon={faCaretDown}
                className="mt-0.5 h-4 w-4"
              />
            </span>
          </div>
        </Menu.Button>
        <Menu.Items
          className={cls(
            "absolute z-10 w-48 mt-2 origin-top-right",
            "bg-white divide-y divide-zinc-300 outline-none",
            "rounded-md shadow-lg"
          )}
        >
          {links.map((link) => (
            <Menu.Item
              key={link.href}
              disabled={link?.disabled}
            >
              <Link
                href={link.href}
                className={cls(
                  "block rounded font-medium transition px-4 py-2",
                  "bg-white text-zinc-800/90 hover:bg-sky-400/80 hover:text-white",
                  `${link?.disabled && "opacity-75"}`
                )}
              >
                {link.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default DropdownMenu
