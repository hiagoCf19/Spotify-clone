import { musics } from "@/mocks/playlists-albuns"
import { Heart, Music } from "lucide-react"
import { MenuMusics } from "./MenuMusic"
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

export interface propsMsc {
  props: musics;
  i: number
}
export const CardMusic = ({ props, i }: propsMsc) => {
  const [isLiked, setIsLiked] = useState(false)
  const [mouseInside, setMouseInside] = useState(false)
  return (
    <div className="flex items-center justify-between gap-4 sm:py-1 sm:hover:bg-[#ffffff11] sm:-ml-3 sm:p-2 rounded"
      onMouseOver={() => setMouseInside(true)}
      onMouseOut={() => setMouseInside(false)}>
      <div className="flex items-center  overflow-hidden gap-3 sm:w-[22%]"

      >
        <span
          className="text-sm font-medium mx-1 hidden sm:block sm:min-w-5"
        >
          {!mouseInside ? i : <FaPlay size={15} color="#FFF" />}

        </span>
        {'capa' in props ? <img src={props.capa} className=" w-12 h-12 rounded-[4px]" /> :
          <div className="w-[77px] sm:w-14 sm:rounded-[4px] h-12 flex items-center justify-center bg-[#272727] ">
            <Music />
          </div>
        }
        <div className="flex flex-col  w-[80%] ">
          <div className=" overflow-hidden text-nowrap overflow-ellipsis text-sm sm:flex justify-between">
            <p className="font-semibold text-sm text-zinc-50">
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
      <p className="w-[20%] hidden sm:block text-[13px] font-medium ">{props.album}</p>
      <p className="w-[20%]  hidden sm:block text-[13px] font-medium ">{props.addEm}</p>

      <div className="sm:flex items-center gap-6">
        <div>
          {
            isLiked === false ?
              <Heart
                color="#b7b7b7"
                size={20}
                className="hidden sm:block"
                onClick={() => setIsLiked(true)}
              />
              :
              <IoMdHeart
                color="#1DB954"
                size={20}
                className="hidden sm:block"
                onClick={() => setIsLiked(false)}
              />

          }
        </div>

        <span className="text-[13px] font-semibold hidden sm:block mr-3">2:41</span>

        <span className="sm:hidden">
          <MenuMusics music={props} />
        </span>
        <span className="hidden sm:block" />
      </div>

    </div>
  )
}