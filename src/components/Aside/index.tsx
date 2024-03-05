
import { BottomAside } from "./BottomAside";
import { TopAside } from "./TopAside";
export const Aside = () => {

  return (
    <section className="hidden sm:block">
      <aside className=" w-80 h-[90vh] flex flex-col gap-2 ">
        <TopAside />
        <BottomAside />
      </aside >
    </section>



  )
}