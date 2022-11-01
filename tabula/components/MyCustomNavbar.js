import { forwardRef, useEffect } from "react"
import Link from "next/link"
import { Navbar, Nav } from "rsuite"
import HomeIcon from "@rsuite/icons/legacy/Home"
import CogIcon from "@rsuite/icons/legacy/Cog"

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
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

  // Debugging navbar activeKey state:
  useEffect(() => {
    console.log("Navbar mounted! Active key: ", activeKey)
  }, [activeKey, onSelect])

  return (
    <Navbar
      {...props}
      className="border-b-2 px-2 pt-1"
    >
      <div className="text-3xl font-medium m-3">Tabula Rasa</div>
      <Nav
        onSelect={onSelect}
        activeKey={activeKey}
      >
        <Nav.Item
          as={NavLink}
          className=""
          eventKey="home"
          href="/"
          icon={<HomeIcon />}
        >
          Home
        </Nav.Item>
        <Nav.Item
          as={NavLink}
          className=""
          eventKey="list-table"
          href="/list-table"
        >
          ListTable
        </Nav.Item>
        <Nav.Item
          as={NavLink}
          className=""
          eventKey="search-table"
          href="/search-table"
        >
          SearchableTable
        </Nav.Item>

        <Nav.Menu title="More...">
          <Nav.Item
            as={NavLink}
            className=""
            eventKey="company"
            href="/company"
          >
            Company
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            className=""
            eventKey="team"
            href="/team"
          >
            Team
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            className=""
            eventKey="contact"
            href="/contact"
          >
            Contact
          </Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item
          as={NavLink}
          className=""
          icon={<CogIcon />}
          eventKey="settings"
          href="/settings"
        >
          Settings
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default CustomNavbar
