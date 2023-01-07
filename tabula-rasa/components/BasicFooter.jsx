import Link from "next/link"
import { Footer } from "react-daisyui"
// import styles from "../styles/HeaderNavbar.module.css"
/* ========================================================================= */

const BasicFooter = ({ ...args }) => {
  return (
    <Footer
      className="flex justify-between px-10 py-2 bg-neutral text-base-100 font-medium"
      {...args}
    >
      <div>
        <span>
          &copy; {`${new Date().getFullYear()}, `}
          <Link
            href="https://github.com/copev313"
            className="hover:text-primary"
          >
            Hashy Codes
          </Link>
          .
        </span>
      </div>

      <div className="flex flex-row space-x-12">
        <Link
          href="/"
          className="hover:text-primary"
        >
          Team
        </Link>
        <Link
          href="/"
          className="hover:text-primary"
        >
          GitHub
        </Link>
        <Link
          href="/"
          className="hover:text-primary"
        >
          Contact
        </Link>
      </div>
    </Footer>
  )
}

export default BasicFooter
