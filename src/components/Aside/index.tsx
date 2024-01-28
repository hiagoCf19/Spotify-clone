
import { BottomAside } from "./BottomAside";
import { TopAside } from "./TopAside";
export const Aside = () => {

  return (
    <aside className=" w-80 border ">
      <nav className=" hidden sm:block ">
        <div className="flex flex-col gap-2">
          <TopAside />
          <BottomAside />
        </div>
      </nav>
    </aside>

  )
}