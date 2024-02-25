import { urlFormater } from "@/scripts/normalize"
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom"

export const MiniCardLiked = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  return (

    <Link
      to={urlFormater('Musicas-curtidas')}

      className=" sm:w-[24.2%] w-[48%] sm:h-16 h-14 flex items-center gap-4 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff13] hover:bg-[#ffffff22]  cursor-pointer relative"
      onMouseOver={() => setHoveredIndex(true)}
      onMouseOut={() => setHoveredIndex(false)}
    >

      <div className="flex items-center sm:gap-4 gap-2">
        <img src='./assets/capas/Art.png' alt='artCurtidos' className=" sm:h-16 h-14 rounded rounded-r-none" />

        <p className="sm:text-base text-[13px] font-semibold text-zinc-50  whitespace-nowrap overflow-hidden overflow-ellipsis">Musicas Curtidas</p>
        <div className={` absolute right-0 p-4 rounded-full sm:bg-spotgreen sm:shadow-lg shadow-[#000000c1] mx-4 ${hoveredIndex === true ? '' : 'hidden'}`}>
          <FaPlay color="#000" className="hidden sm:block" />
        </div>

      </div>


    </Link>


  )
}