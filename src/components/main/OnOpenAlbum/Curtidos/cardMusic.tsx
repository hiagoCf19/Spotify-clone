import { musics } from "@/mocks/playlists-albuns"
import { Music } from "lucide-react"

import { MenuMusics } from "./MenuMusic"


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
          <div className="flex items-center  gap-1">
            <div className="bg-[#a7a7a796] p-1 rounded text-[8px] text-[#121212] font-semibold">
              LYRICS
            </div>

            <span className="text-[12px] font-medium">
              {music.artista}
            </span>
          </div>




        </div>
      </div>
      <div className=" flex gap-2">

        <MenuMusics music={music} />
      </div>

    </div>
  )
}