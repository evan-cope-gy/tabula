import Link from "next/link"
import Image from "next/image"
import DropdownMenu from "./MyDropdownMenu"
import cls from "classnames"


const HeaderNavbar = () => {

  const directLinks = [
    { label: "Monitor", href: "/" },
    { label: "History", href: "/" },
    { label: "Services", href: "/" },
    { label: "Projects", href: "/" },
  ]



  return (
    <div className="mx-auto flex h-18 items-center gap-8 divide-x-2 divide-double divide-neutral-400/70 px-4 sm:px-6 lg:px-8">
      <Link
        className="inline "
        href="/"
      >
        <span className="sr-only">Home</span>
        <Image
          className="inline mb-1"
          src="/default-icon.svg"
          width={50}
          height={50}
          alt="Dashboard Logo"
        />
        <div className="inline-block pt-3">
          <span className="font-medium text-2xl text-cyan-800">
            Tabula Rasa
          </span>
        </div>
      </Link>

      <div className="flex flex-1 items-center justify-end ml-3 md:justify-between">
        <nav
          aria-label="Site Navigation"
          className="md:block"
        >
          <ul className="flex items-center ml-4 gap-6 text-sm  font-medium text-stone-700">
            { directLinks.map((link, linkIndex) => (
              <li key={ linkIndex }>
                <Link
                  className={cls(
                    "transition rounded p-2",
                    "hover:ring-1 hover:ring-sky-400 hover:text-sky-400"
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <DropdownMenu
                title="Examples"
                links={[
                  { label: "Static Table View", href: "/tables" },
                  { label: "Table with Search", href: "/tabular/searchable" },
                  { label: "Kitchen Sink", href: "/kitchen-sink-demo" },
                  { label: "Coming Soon!", href: "/", disabled: true}
                ]}
              />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="rounded-lg p-2 antialiased text-gray-600 border-2 border-solid border-gray-600 text-sm font-medium hover:text-white hover:border-2 hover:bg-gray-600 transition sm:block"
              href="/settings"
              alt="Settings"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNavbar
