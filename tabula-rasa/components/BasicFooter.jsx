import Link from "next/link"
import { Footer } from "react-daisyui"
import cls from "classnames"
/* ========================================================================= */

const BasicFooter = ({ resourceLinks, ...props }) => {
  return (
    <Footer
      className={cls(
        "flex justify-between px-3 md:px-6 xl:px-10 py-2",

        "bg-neutral text-base-100 font-medium",
        "text-xs lg:text-sm"
      )}
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

      <div className="flex flex-row space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
        {resourceLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-primary"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </Footer>
  )
}

export default BasicFooter
