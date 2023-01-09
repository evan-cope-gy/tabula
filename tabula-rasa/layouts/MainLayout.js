/*
  The Main Layout used for displaying most pages on the site.
*/
import { useState } from "react"
import HeaderNavbar from "../components/HeaderNavbar"
import cls from "classnames"
import BasicFooter from "../components/BasicFooter"
/* ========================================================================= */

const MainLayout = ({ children, ...props }) => {
  const [stickyHeader, setStickyHeader] = useState(true)

  return (
    <div className="flex flex-col min-h-screen max-w-none">
      <header
        aria-label="Site Navbar"
        className={cls(
          "flex w-full items-center font-sans",
          `${stickyHeader && "sticky top-0 z-50"}`,
          "mb-5 md:mb-3"
        )}
      >
        <>
          <HeaderNavbar
            title="Snowplow"
            examplesDropdownItems={[
              { title: "Basic", href: "/tables" },
              { title: "Searchable", href: "/tables/searchable" },
              // { title: "Pagination", href: "/tables/pagination" },
              { title: "Extras...", href: "/tables/kitchen-sink-demo" },
            ]}
            stickyHeader={stickyHeader}
          />
        </>
      </header>
      {/* <header className="min-w-fit max-w-full"></header> */}

      <main className="flex-1 ">
        <div className="mx-3 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10">{children}</div>
      </main>

      <footer aria-label="Site Footer">
        <BasicFooter
          resourceLinks={[
            { title: "Team", href: "/team" },
            { title: "GitHub", href: "/" },
            { title: "Docs", href: "/docs" },
            { title: "Contact", href: "/" },
          ]}
        />
      </footer>
    </div>
  )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
