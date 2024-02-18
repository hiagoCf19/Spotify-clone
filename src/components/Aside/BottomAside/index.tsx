
import { SptBNT } from "./SptBTN";
import { HeaderBottomAside } from "./HeaderBottom";
import { CiSearch } from "react-icons/ci";
import { List } from "lucide-react";
import { Table } from "./Table";
import { Tiip } from "@/components/ui/tolltiResume";


export const BottomAside = () => {
  return (
    <section className=" h-[87%]  bg-[#141414] overflow-hidden overflow-y-scroll p-3 rounded-[6px]">
      <div className="  font-medium flex flex-col gap-3 h-max ">
        {/* sua biblioteca */}
        <HeaderBottomAside />
        <div className="flex gap-2">
          <SptBNT props="Playlists" />
          <SptBNT props="Álbuns" />
        </div>
        <div className="flex items-center justify-between">
          <div className=" flex items-center justify-center p-1 rounded-full hover:bg-[#252525]">
            <Tiip exibition={<CiSearch size={22} className="hover:text-zinc-50" />} hover="Buscar em sua biblioteca" />
          </div>

          <a href="" className="flex items-center gap-1 text-[13px] hover:text-zinc-50">
            Recentes
            <List size={19} />
          </a>
        </div>
        <Table />
      </div>

    </section>




  )
}