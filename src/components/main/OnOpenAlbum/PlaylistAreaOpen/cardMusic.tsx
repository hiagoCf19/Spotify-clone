import { musics } from "@/mocks/playlists-albuns"
import { Music } from "lucide-react"

import { MenuMusics } from "./MenuMusic"
import { IoMdHeart } from "react-icons/io";




export interface propsMsc {
  props: musics;
  i: number
}
export const CardMusic = ({ props, i }: propsMsc) => {

  return (
    <div className="flex items-center justify-between gap-4 sm:py-1  ">
      <div className="flex items-center  overflow-hidden gap-3 sm:w-[20%]">
        <span className="text-sm font-medium mr-2">
          {i}
        </span>
        {'capa' in props ? <img src={props.capa} className=" w-12 h-12 rounded-[4px]" /> :
          <div className="w-[77px] sm:w-14 sm:rounded-[4px] h-12 flex items-center justify-center bg-[#272727] ">
            <Music />
          </div>
        }
        <div className="flex flex-col border  w-[80%] ">
          <div className=" overflow-hidden text-nowrap overflow-ellipsis   text-sm sm:flex justify-between">
            <p className="font-medium text-sm text-zinc-50">
              {props.name}
            </p>


          </div>

          <div className="flex items-center  gap-1">
            <div className="bg-[#a7a7a796] p-1 rounded text-[7px] text-[#121212] font-semibold">
              LYRICS
            </div>

            <span className="text-[12px] font-medium">
              {props.artista}
            </span>
          </div>




        </div>
      </div>
      <p className="w-[20%] hidden sm:block text-sm font-medium ">Album</p>
      <p className="w-[20%]  hidden sm:block text-[13px] font-medium ">{props.addEm}</p>

      <div className="sm:flex items-center gap-6">
        <IoMdHeart color="#1DB954" size={20} className="hidden sm:block" />
        <span className="text-sm font-semibold hidden sm:block mr-3">2:41</span>

        <span className="sm:hidden">
          <MenuMusics music={props} />
        </span>
        <span className="hidden sm:block" />
      </div>

    </div>
  )
}