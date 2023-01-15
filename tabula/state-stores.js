/*
  A state management store for site settings and preference data.
*/
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

/* ========================================================================= */

export const useAppSettingsStore = create((set, get) => ({
  appTitle: "Snowboard",

  // Settings related to the sidebar in the MainLayout:
  sidebarOpen: true,
  toggleSidebarOpen: () => set({ sidebarOpen: !get().sidebarOpen }),
  setSidebarOpen: () => set({ sidebarOpen: true }),
  setSidebarClosed: () => set({ sidebarOpen: false }),
}))

export const usePreferenceSettingsStore = create(
  persist(
    (set, get) => ({
      // Different preference settings related to the site's theme:
      theme: "customLightTheme",
      setTheme: () => set((state) => ({ theme: state.theme })),
      toggleTheme: () =>
        set({
          theme:
            get().theme === "customLightTheme" ? "dark" : "customLightTheme",
        }),

      // Different preference settings related to the navbar header:
      stickyNavbarHeader: true,
      getStickyNavbarHeader: () => get().stickyNavbarHeader,
      toggleStickyNavbarHeader: () =>
        set({ stickyNavbarHeader: !get().stickyNavbarHeader }),
    }),
    {
      name: "snowboard-storage",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
)
