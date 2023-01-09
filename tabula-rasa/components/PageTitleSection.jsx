/*
  A simple component to display a title and a divider for a page.
*/
// import Link from "next/link"
// import cls from "classnames"
/* ========================================================================= */

const PageTitleSection = ({ title, divider, ...props }) => {
  // If divider is undefined, default to true:
  if (divider === undefined) divider = true

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium mx-3 my-1">{title}</h1>
      {divider && <hr className="flex flex-1 mt-4 mb-6 mx-2" />}
    </div>
  )
}

export default PageTitleSection
