import { HeaderMain } from "./HeaderMain"
import { FirstSectionMain } from "./firstSection"

export const Main = () => {
  return (
    <main className="flex-1 p-4 px-6 backgroundMobile rounded-[6px] h-[88vh]  overflow-y-scroll gap-4 flex flex-col">
      <HeaderMain />
      <FirstSectionMain />

    </main>
  )
}