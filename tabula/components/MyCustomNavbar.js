import { forwardRef, useEffect } from "react"
import Link from "next/link"
import { Navbar, Nav } from "rsuite"
const { Item, Menu } = Nav
import HomeIcon from "@rsuite/icons/legacy/Home"
import ListIcon from "@rsuite/icons/List"
import CogIcon from "@rsuite/icons/legacy/Cog"
import TableIcon from "@rsuite/icons/Table"
import ArrowDownIcon from "@rsuite/icons/ArrowDown"
import SettingIcon from "@rsuite/icons/Setting"
import cls from "classnames"

const NavLink = forwardRef((props, ref) => {
  const { href, as, ...rest } = props
  return (
    <Link
      href={href}
      as={as}
    >
      <a
        ref={ref}
        {...rest}
      />
    </Link>
  )
})

const CustomNavbar = ({ activeKey, onSelect, ...props }) => {
  return (
    <div
      {...props}
      className="border-b-2 pt-1"
    >
      <div className={cls("text-2xl px-3 py-2", "navbar-title")}>
        Tabula Rasa
      </div>

      <Nav
        onSelect={onSelect}
        activeKey={activeKey}
        className="h-10 rounded-md inline-flex px-2"
      >
        <Item
          as={NavLink}
          className="h-10 rounded-md"
          eventKey="home"
          href="/"
          icon={<HomeIcon />}
        >
          {" "}
          Home
        </Item>

        <Item
          as={NavLink}
          className="h-10 rounded-md"
          eventKey="list-table"
          href="/list-table"
          icon={<ListIcon />}
        >
          {" "}
          ListTable
        </Item>

        <Item
          as={NavLink}
          className="h-10 rounded-md "
          eventKey="search-table"
          href="/search-table"
          icon={<TableIcon />}
        >
          {" "}
          SearchTable
        </Item>

        <Menu
          className="rounded-md"
          title="Utilities"
          icon={<CogIcon />}
          // noCaret
        >
          <Item
            as={NavLink}
            className=""
            eventKey="company"
            href="/company"
          >
            Convert a Thing
          </Item>

          <Item
            as={NavLink}
            className=""
            eventKey="team"
            href="/team"
          >
            Build a Thing
          </Item>

          <Item
            as={NavLink}
            className=""
            eventKey="contact"
            href="/contact"
          >
            Edit a Thing
          </Item>
        </Menu>

        <Item
          as={NavLink}
          className="h-10 rounded-md"
          icon={<SettingIcon />}
          eventKey="settings"
          href="/settings"
        >
          Settings
        </Item>
      </Nav>
    </div>
  )
}

export default CustomNavbar
