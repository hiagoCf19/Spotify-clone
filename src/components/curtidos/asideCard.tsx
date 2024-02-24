
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"

export const AsideCardLiked = () => {
  return (
    <Link
      to={urlFormater('Musicas-curtidas')}
    >
      <div
        className="flex gap-3 hover:bg-[#191919] rounded border-solid py-2 cursor-pointer px-2 mx-[-10px]">

        <img
          src='assets/Art.png'
          className=" w-12 rounded-[4px]"
        />

        <div className="flex flex-col justify-center">
          <p className="text-zinc-50 font-medium text-[15px]">Músicas Curtidas</p>
          <span className="text-[13px] font-normal flex gap-2 items-center">
            Playlist <i className="text-[10px]">•</i> X músicas
          </span>
        </div>

      </div>
    </Link >
  )
}