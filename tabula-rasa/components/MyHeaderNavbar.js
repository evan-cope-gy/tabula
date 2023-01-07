import Link from "next/link"
import styles from "../styles/HeaderNavbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAnglesRight,
  faGear,
  faSnowplow,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons"
// import DropdownMenu from "./MyDropdownMenu"
import cls from "classnames"
/* ========================================================================= */

const HeaderNavbar = () => {
  const directLinks = [
    { label: "Monitor", href: "/" },
    { label: "History", href: "/" },
    { label: "Services", href: "/" },
    { label: "Projects", href: "/" },
  ]

  return (
    <div className={cls("flex items-center gap-1 md:gap-4 py-2 px-5 ")}>
      <Link
        className="flex flex-nowrap items-center text-slate-900 hover:text-slate-900/90"
        href="/"
      >
        <span className="sr-only">Home</span>
        <div className="">
          <FontAwesomeIcon
            icon={faSnowplow}
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          />
        </div>

        <div className="md:pl-2 pt-1">
          <span
            className={cls(
              "font-bold uppercase hidden md:inline",
              "md:text-lg lg:text-xl",
              `${styles.navbarTitle}`
            )}
          >
            Snowplow
          </span>
        </div>
      </Link>

      <div
        className={cls(
          "flex flex-1 items-center justify-between",
          "ml-3",
          "border-solid border-l-2 border-zinc-600/70"
        )}
      >
        <nav
          aria-label="Site Navigation"
          className="block"
        >
          <ul
            className={cls(
              "flex items-center ml-4",
              "gap-3 md:gap-4 lg:gap-6 ",
              "text-sm font-medium text-zinc-900"
            )}
          >
            {directLinks.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  className={cls("p-2 hover:text-sky-500")}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* <li className="hover:text-sky-500">
              <DropdownMenu
                title="Examples"
                links={[
                  { label: "Static Table View", href: "/tables" },
                  { label: "Table with Search", href: "/tabular/searchable" },
                  { label: "Kitchen Sink", href: "/kitchen-sink-demo" },
                  { label: "Coming Soon!", href: "/", disabled: true },
                ]}
              />
            </li> */}
          </ul>
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className={cls(
                "rounded-lg text-gray-800 text-sm font-medium transition",
                "border-2 border-solid border-gray-800",
                "hover:text-white hover:bg-gray-800",
                "p-1 lg:p-1.5",
                ""
              )}
              href="/settings"
              alt="Settings"
            >
              <FontAwesomeIcon
                icon={faGear}
                className="h-5 w-5"
              />
            </Link>
          </div>
        </div>

        <div className="flex sm:hidden">
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderNavbar
