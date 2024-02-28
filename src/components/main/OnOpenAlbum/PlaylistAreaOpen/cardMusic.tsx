import { musics } from "@/mocks/playlists-albuns"
import { Heart, Music } from "lucide-react"
import { MenuMusics } from "./MenuMusic"
import { Fragment, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


export interface propsMsc {
  props: musics;
  i: number
  hiddenTopics: boolean
}

export const CardMusic = ({ props, i, hiddenTopics }: propsMsc) => {
  const [isLiked, setIsLiked] = useState(props.liked ? true : false)
  const [mouseInside, setMouseInside] = useState(false)
  let time
  const convert = () => {
    const base = props.durationMultipliedBy100 / 100
    time = base.toFixed(2).replace('.', ':')
    return time
  }
  const hidden = hiddenTopics
  convert()
  return (
    <div className="flex items-center justify-between gap-4 sm:py-1 sm:hover:bg-[#ffffff11] sm:-ml-3 sm:p-2 rounded"
      onMouseOver={() => setMouseInside(true)}
      onMouseOut={() => setMouseInside(false)}>
      <div className="flex items-center  overflow-hidden gap-3 sm:w-[22%]"

      >
        {hidden ? null : <span
          className="text-sm font-medium mx-1 hidden sm:block sm:min-w-5"
        >
          {!mouseInside ? i : <FaPlay size={15} color="#FFF" />}

        </span>}
        {'capa' in props ? <img src={props.capa} className=" w-12 h-12 rounded-[4px]" /> :
          <div className="w-[77px] sm:w-14 sm:rounded-[4px] h-12 flex items-center justify-center bg-[#272727] ">
            <Music />
          </div>
        }
        <div className="flex flex-col  w-[80%] gap-1 ">
          <div className=" overflow-hidden text-nowrap overflow-ellipsis text-sm sm:flex justify-between">
            <p className="font-medium text-sm text-zinc-50">
              {props.name}
            </p>
          </div>

          <div className="flex items-center  gap-1">
            <span className="text-[13px] font-medium">
              {props.artista.map((artista) => (
                artista.name
              ))}
            </span>
          </div>
        </div>
      </div>
      {hidden ? null : <Fragment>
        <p className="w-[20%] hidden sm:block text-[13px] ">{props.album}</p>
        <p className="w-[20%] hidden sm:block text-[13px]  ">{props.addEm}</p>
      </Fragment>}


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

        <span className="text-[13px]  hidden sm:block mr-3">{
          time
        }</span>

        <span className="sm:hidden">
          <MenuMusics music={props} />
        </span>
        <span className="hidden sm:block" />
      </div>

    </div>
  )
}