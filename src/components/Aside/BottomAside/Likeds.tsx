import { likeds } from "@/mocks/Likeds"
import { urlFormater } from "@/scripts/normalize"

import { Link } from "react-router-dom"

export const SeusCurtidos = () => {
  return (
    <Link
      to={urlFormater(`${likeds[0].name}`)}
    >
      <div
        className="flex gap-3 hover:bg-[#181818] rounded border-solid py-2 cursor-pointer px-2 mx-[-10px]">
        <img
          src={likeds[0].image}
          alt={likeds[0].classe}
          className=" w-12 rounded-[4px]"
        />
        <div className="flex flex-col justify-center text-sm">
          <p className="text-zinc-50">{likeds[0].name}</p>
          <span className="text-[13px]">
            {likeds[0].classe} • {likeds[0].musicsQnt}
          </span>
        </div>

      </div>
    </Link>
  )
}