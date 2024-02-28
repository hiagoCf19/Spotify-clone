import { cards } from "@/mocks/playlists-albuns"
import { } from "../perfilArtista/discografia"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"
import { Album } from "@/scripts/DataConstructor"



interface propsCard {
  props: cards | Album
}
export const Card = ({ props }: propsCard) => {
  return (
    <Link

      to={urlFormater(`${props.title}`)}
      className=" w-[15%] min-h-[32vh] overflow-hidden"
    >
      <div className=" w-full h-full p-3  rounded-[10px] bg-[#191919] hover:bg-[#171717] flex flex-col overflow-hidden cursor-pointer">
        <div className="flex items-center justify-center  p-1">
          <img src={props.image ?? ''} alt="" className="h-auto w-full   rounded " />
        </div>
        <div className="flex flex-col py-2 px-1">
          <p className="font-bold text-[16px] text-zinc-50 text-ellipsis text-nowrap overflow-clip anti ">{props.title}</p>
          <span className="text-sm line-clamp-2 text-ellipsis overflow-clip" >{props.description}</span>
        </div>
        <div>

        </div>

      </div>
    </ Link>
  )
}