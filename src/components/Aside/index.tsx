
import { BottomAside } from "./BottomAside";
import { TopAside } from "./TopAside";
export const Aside = () => {

  return (
    <aside className=" w-80 h-[88vh] flex flex-col gap-2">
      <TopAside />
      <BottomAside />
    </aside>

  )
}