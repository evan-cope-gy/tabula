/* 
  The landing for the docs page.
*/
import { getLayout } from "../../layouts/MainLayout"
import PageTitleSection from "../../components/PageTitleSection"
// import cls from "classnames"
/* ========================================================================= */

const DocsHomePage = () => {
  return (
    <div className="p-2">
      <PageTitleSection title="Docs > Home" />
    </div>
  )
}

DocsHomePage.pageTitle = "Docs - Home"
DocsHomePage.getLayout = getLayout

export default DocsHomePage
