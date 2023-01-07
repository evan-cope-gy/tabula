import React from "react"
import Link from "next/link"
import { Button, Divider, Dropdown, Menu, Navbar, Tooltip } from "react-daisyui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  // faAnglesRight,
  faAngleDown,
  faBars,
  faLinesLeaning,
  faMinus,
  faGear,
  faSnowplow,
  // faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons"
import cls from "classnames"
import styles from "../styles/HeaderNavbar.module.css"
/* ========================================================================= */

const HeaderNavbar = ({ title, ...props }) => {
  const { stickyHeader, examplesDropdownItems } = props

  return (
    <Navbar
      className={cls(
        "bg-neutral rounded-xl shadow-lg",
        `${stickyHeader && "sticky top-0 z-50"}`
      )}
    >
      <Navbar.Start>
        <Dropdown>
          <Button
            color="ghost text-base-100 hover:text-info"
            tabIndex={0}
            className="md:hidden"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 w-5"
            />
          </Button>

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

        <Link
          aria-label="Dashboard Home"
          href="/"
          className={cls(
            "",
            "text-xl px-4 uppercase text-base-100 hover:text-primary",
            styles.navbarTitle
          )}
        >
          <div className="flex flex-row gap-3">
            <FontAwesomeIcon
              icon={faSnowplow}
              className="h-8 w-8"
            />
            <span className="pt-1">{title}</span>
          </div>
        </Link>
        {/* <FontAwesomeIcon
          icon={faMinus}
          className="h-12 w-6 rotate-90 text-base-100 px-2"
        /> */}
      </Navbar.Start>

      <div className="hidden md:flex flex-grow border border-info"></div>
      <Navbar.Center className="hidden md:flex">
        <Menu
          horizontal
          className="p-0 text-info "
        >
          <Tooltip
            color="info"
            message="I'm Item 1"
            position="bottom"
          >
            <Menu.Item>
              <Link
                href="/"
                className="rounded-md"
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
              <Menu className="p-1 menu-compact xl:menu-normal rounded-md bg-base-100 text-neutral shadow-md">
                {examplesDropdownItems.map((item, itemIndex) => (
                  <Menu.Item key={itemIndex}>
                    <Link href={item.href}>{item.title}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Menu.Item>
          )}
        </Menu>
      </Navbar.Center>

      <Navbar.End>
        <Link
          href="/settings"
          className="text-base-100 hover:text-info"
        >
          <FontAwesomeIcon
            icon={faGear}
            className="h-5 w-5 px-5"
          />
        </Link>
      </Navbar.End>
    </Navbar>
  )
}

export default HeaderNavbar
