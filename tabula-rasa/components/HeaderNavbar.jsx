import React from "react"
import Link from "next/link"
import { Button, Dropdown, Menu, Navbar, Tooltip } from "react-daisyui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleDown,
  faBars,
  faGear,
  // faSnowplow,
  faPersonSnowboarding,
  // faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons"
import cls from "classnames"
import styles from "../styles/HeaderNavbar.module.css"
/* ========================================================================= */

const HeaderNavbar = ({ stickyHeader, title, ...props }) => {
  const { examplesDropdownItems } = props

  return (
    <Navbar
      className={cls(
        "md:m-3 md:rounded-lg",
        "bg-neutral shadow-lg",
        `${stickyHeader && "sticky top-0 z-50"}`
      )}
    >
      {/* Start of Dropdown Menu for Responsive Header */}
      <Dropdown>
        <div>
          <Button
            color="ghost"
            tabIndex={0}
            className="p-3 mr-1 text-info md:hidden "
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 w-5"
            />
          </Button>
        </div>

        <Dropdown.Menu
          tabIndex={0}
          className="w-52 menu-compact mt-3"
        >
          <Dropdown.Item>
            <Link href="/">Item 1</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/">Item 2</Link>
          </Dropdown.Item>
          {examplesDropdownItems && (
            <li tabIndex={0}>
              <a className="justify-between">
                <span>Examples</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="h-3 w-3"
                />
              </a>
              <ul className="p-1 bg-base-100 shadow">
                {examplesDropdownItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </Dropdown.Menu>
      </Dropdown>
      {/* End of Dropdown Menu for Responsive Header */}

      {/* Start of Left Side Title Section of Navbar */}
      <Link
        aria-label="Dashboard Home"
        href="/"
        className={cls(
          "uppercase text-lg md:text-xl",
          "px-2 md:px-3 text-base-100 hover:text-primary",
          "md:mr-4 lg:mr-6",
          styles.navbarTitle
        )}
      >
        <div className="flex flex-row gap-2">
          <FontAwesomeIcon
            icon={faPersonSnowboarding}
            className="h-8 w-8"
          />
          <span className="pt-1">{title}</span>
        </div>
      </Link>
      {/* End of Left Side Title Section of Navbar */}

      {/* Start of the Middle Section of Navbar */}
      <div
        className={cls(
          "hidden md:flex md:flex-grow",
          "text-sm font-medium xl:text-base xl:font-normal"
        )}
      >
        {/* Left Side Horizontal Line Divider */}
        <div className="hidden md:flex md:w-28 lg:w-40 xl:w-48 border border-info"></div>
        <Menu
          horizontal
          className={cls("text-info xl:space-x-1 lg:mx-2 xl:mx-4")}
        >
          <Tooltip
            color="info"
            message="I'm Item 1"
            position="bottom"
          >
            <Menu.Item>
              <Link
                href="/"
                className="rounded-md hover:text-base-100"
              >
                Item 1
              </Link>
            </Menu.Item>
          </Tooltip>
          <Tooltip
            color="info"
            message="I'm Item 2"
            position="bottom"
          >
            <Menu.Item>
              <Link
                href="/"
                className="rounded-md"
              >
                Item 2
              </Link>
            </Menu.Item>
          </Tooltip>

          {examplesDropdownItems && (
            <Menu.Item tabIndex={0}>
              <a className="rounded-md">
                Examples
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="h-3 w-3"
                />
              </a>
              <Menu
                className={cls(
                  "p-1 menu-compact xl:menu-normal",
                  "rounded-md bg-base-100 text-neutral shadow-md"
                )}
              >
                {examplesDropdownItems.map((item, itemIndex) => (
                  <Menu.Item key={itemIndex}>
                    <Link href={item.href}>{item.title}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Menu.Item>
          )}
        </Menu>
        {/* Right Side Horizontal Line Divider */}
        <div className="hidden md:flex flex-grow lg:border border-info"></div>
      </div>
      {/* End of the Middle Section of Navbar */}

      {/* Start of Right Side Button Links Section */}
      <div class="ml-auto md:ml-4 lg:ml-6">
        <Link
          href="/settings"
          className={cls(
            "flex flex-row items-center flex-none",
            "text-base-100 rounded-md hover:text-accent"
          )}
        >
          <Button
            size="md"
            className="hover:text-accent p-3"
          >
            <FontAwesomeIcon
              icon={faGear}
              className="h-5 w-5"
            />
          </Button>
        </Link>
      </div>
      {/* End of Right Side Button Links Section */}
    </Navbar>
  )
}

export default HeaderNavbar
