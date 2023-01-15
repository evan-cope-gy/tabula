/*
    A simple footer component for the bottom of the page.
*/
// import { useState, useEffect } from "react"
import Link from "next/link"
import { Footer as DFooter } from "react-daisyui"
import cls from "classnames"
/* ========================================================================= */

export default function BasicFooter() {
  // A list of links to display in the footer.
  const resourceLinks = [
    { title: "Team", href: "/team" },
    {
      title: "GitHub",
      href: "https://github.com/copev313/Tabula-Rasa",
      target: "_blank",
    },
    { title: "Docs", href: "/" },
    { title: "Contact", href: "/" },
  ]

  return (
    <footer aria-label="Site Footer">
      <DFooter
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
              target={link.target ? link.target : "_self"}
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </DFooter>
    </footer>
  )
}
