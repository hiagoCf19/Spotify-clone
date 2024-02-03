import { musics } from "@/mocks/playlists-albuns"
import { Music } from "lucide-react"
import { IoHeart } from "react-icons/io5"
import { MenuMusics } from "./Home/GenericList/Curtidos/menu"
import { TiArrowDown } from "react-icons/ti";

export interface propsMsc {
  music: musics
}
export const CardMusic = ({ music }: propsMsc) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center  overflow-hidden gap-3">
        {'capa' in music ? <img src={music.capa} className=" w-14 h-14" /> :
          <div className="w-[77px] h-14 flex items-center justify-center bg-[#272727] ">
            <Music />
          </div>
        }
        <div className="flex flex-col border  w-[80%] ">
          <div className=" overflow-hidden text-nowrap overflow-ellipsis   text-sm ">
            <p className="font-medium text-sm text-zinc-50">
              {music.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className=" w-4 h-4 rounded-full flex items-center justify-center  bg-[#1DB954]">
              <TiArrowDown size={16} color="#000" />
            </div>

            <span className="text-[12px]">
              {music.artista}
            </span>
          </div>




        </div>
      </div>
      <div className=" flex gap-2">
        <IoHeart size={25} color="#1DB954" />
        <MenuMusics music={music} />
      </div>

    </div>
  )
}