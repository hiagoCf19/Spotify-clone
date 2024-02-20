
import { SptBNT } from "./SptBTN";
import { HeaderBottomAside } from "./HeaderBottom";
import { CiSearch } from "react-icons/ci";
import { List } from "lucide-react";

import { Tiip } from "@/components/ui/tolltiResume";
import { useState } from "react";
import 'animate.css'

import { AsideCardLiked } from "@/components/curtidos/asideCard";

export const BottomAside = () => {
  const [SearchDiv, setSearchDiv] = useState(false)




  return (
    <section className=" h-[87%]  bg-[#141414] overflow-hidden overflow-y-scroll p-3 rounded-[6px]">
      <div className="  font-medium flex flex-col gap-3 h-max ">
        {/* sua biblioteca */}
        <HeaderBottomAside />
        <div className="flex gap-2">
          <SptBNT props="Playlists" />
          <SptBNT props="Álbuns" />
        </div>
        <div className="flex items-center justify-between gap-2 ">
          <div
            className={`animate__animated animate__fadeInLeft  flex items-center justify-center p-1 hover:bg-[#252525] gap-2 text-normal  ${SearchDiv ? 'rounded-[6px] bg-[#252525]' : 'rounded-full'} `}
            onClick={() => setSearchDiv(true)}

          >
            <Tiip exibition={<CiSearch size={22} className="hover:text-zinc-50" />} hover="Buscar em sua biblioteca" />
            {SearchDiv ?
              <input
                type="text"
                className="animate__animated animate__fadeInLeft bg-transparent outline-none text-normal w-[80%] text-[13px] font-normal placeholder:text-[#a7a7a7] "
                placeholder="Buscar em sua bibliotéca"
                autoFocus
                onBlur={() => setSearchDiv(false)}

              /> :
              ''}
          </div>

          <div className="flex items-center gap-1 text-[13px] hover:text-zinc-50">
            Recentes
            <List size={19} />
          </div>
        </div>
        <AsideCardLiked />

      </div>

    </section>




  )
}