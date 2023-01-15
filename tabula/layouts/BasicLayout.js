/*
  General container layout for basic pages.
*/
/* ========================================================================= */

export default function BasicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
    </div>
  )
}

export const getLayout = (page) => <BasicLayout>{page}</BasicLayout>
