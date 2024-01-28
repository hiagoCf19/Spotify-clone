
import { SptBNT } from "./SptBTN";
import { HeaderBottomAside } from "./HeaderBottom";
import { CiSearch } from "react-icons/ci";
import { List } from "lucide-react";
import { Table } from "./Table";


export const BottomAside = () => {
  return (
    <section className=" h-[75vh] bg-[#141414] p-6 rounded-[6px]">
      <div className="  font-medium flex flex-col gap-5 h-max ">
        {/* sua biblioteca */}
        <HeaderBottomAside />
        <div className="flex gap-2">
          <SptBNT props="Playlists" />
          <SptBNT props="Álbuns" />
        </div>
        <div className="flex items-center justify-between">
          <CiSearch size={22} className="hover:text-zinc-50" />
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