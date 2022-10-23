import { Navbar, Nav } from "rsuite"
import HomeIcon from "@rsuite/icons/legacy/Home"
import CogIcon from "@rsuite/icons/legacy/Cog"

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar
      {...props}
      className="border-b-2 px-2 pt-1"
    >
      <div className="text-3xl font-medium m-3">Tabula Rasa</div>
      <Nav>
        <Nav.Item
          className=""
          eventKey="1"
          icon={<HomeIcon />}
        >
          Home
        </Nav.Item>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item eventKey="4">Company</Nav.Item>
          <Nav.Item eventKey="5">Team</Nav.Item>
          <Nav.Item eventKey="6">Contact</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default CustomNavbar
