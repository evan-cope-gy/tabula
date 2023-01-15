// import Link from "next/link"
// import { Drawer } from "react-daisyui"
import cls from "classnames"

import {
  useAppSettingsStore,
  // usePreferenceSettingsStore,
} from "../state-stores"
/* ========================================================================= */

const MainSidebar = ({ ...props }) => {
  // Retrieve the sidebar open setting:
  const sidebarOpen = useAppSettingsStore((state) => state.sidebarOpen)

  return (
    <div
      className={cls(
        "flex flex-row md:ml-4 md:mb-3",
        "bg-neutral text-base-100 font-medium shadow-lg md:rounded-lg",
        "md:w-60 md:max-h-screen md:overflow-y-auto flex-none",
        `${!sidebarOpen && "hidden"}`
        // "text-xs lg:text-sm"
      )}
    >
      {/* <div className="flex flex-col"></div> */}
    </div>
  )
}

export default MainSidebar
