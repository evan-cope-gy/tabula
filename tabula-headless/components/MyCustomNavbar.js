// import { forwardRef, useEffect } from "react"
// import Link from "next/link"
import cls from "classnames"

// const NavLink = forwardRef((props, ref) => {
//   const { href, as, ...rest } = props
//   return (
//     <Link
//       href={href}
//       as={as}
//     >
//       <a
//         ref={ref}
//         {...rest}
//       />
//     </Link>
//   )
// })

const CustomNavbar = () => {
  return (
    <div className="border-b-2 pt-1">
      <div className={cls("text-2xl px-3 py-2", "navbar-title")}>
        Tabula Rasa
      </div>
    </div>
  )
}

export default CustomNavbar
