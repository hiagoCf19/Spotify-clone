
import { likeds } from "@/mocks/Likeds"
import { playlists } from "@/mocks/playlists-albuns"
import { Hour } from "@/scripts/Saudacao"
import { urlFormater } from "@/scripts/normalize"
import { Bell, Clock, Music, Settings } from "lucide-react"
import { Link } from "react-router-dom"


export const FirstSectionMain = () => {
  const play = playlists
  const saudacao = Hour()
  return (
    <div className="flex flex-col gap-4 mt-6 sm:mt-0">
      <div className="flex sm:flex-col justify-between">
        <h1 className="sm:text-[30px] text-2xl font-bold text-zinc-50">{saudacao}</h1>
        <div className="sm:hidden flex gap-4 text-zinc-50 ">
          <Bell size={25} />
          <Clock size={25} />
          <Settings size={25} />
        </div>

      </div>
      {/* LISTA DESKTOP */}
      <div className="
      hidden sm:block">
        <div className="flex gap-3 flex-wrap ">
          {/* seus curtidos */}
          <Link
            to={urlFormater(`${likeds[0].name}`)}

            className=" w-[371px] h-16 flex items-center gap-4 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff26] hover:bg-[#ffffff41] cursor-pointer"
          >
            <img src={likeds[0].image} className=" h-16 rounded rounded-r-none" />

            <p className="text-[16px] font-semibold text-zinc-50">{likeds[0].name}</p>
          </Link>
          {play.slice(0, 7).map((card, i) => (
            <Link
              to={urlFormater(`${card.name}-${i}`)}
              key={`${card.name}-${i}`}
              className=" w-[371px] h-16 flex items-center gap-4 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff26] hover:bg-[#ffffff41]  cursor-pointer"
            >
              {'image' in card ? <img src={card.image} alt={card.classe} className=" h-16 rounded rounded-r-none" /> : <div className="w-16 h-16 flex items-center justify-center bg-[#272727] rounded rounded-r-none">
                <Music />
              </div>}

              <p className="text-[16px] font-semibold text-zinc-50">{card.name}</p>
            </Link>
          ))}

        </div>
      </div>
      {/* Lista Mobile */}
      <div className="sm:hidden ">

        <div className="flex gap-2 flex-wrap justify-center ">
          {/* CURTIDOS */}
          <Link
            to={urlFormater(`${likeds[0].name}`)}

            className=" w-[48%] h-14 flex items-center gap-2 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff0f] hover:bg-[#ffffff1a] cursor-pointer"
          >
            <img src={likeds[0].image} alt={likeds[0].classe} className=" h-14 w-14 rounded rounded-r-none" />
            <p className="text-[13px] font-semibold text-zinc-50 w-18 whitespace-nowrap overflow-hidden overflow-ellipsis">{likeds[0].name}</p>

          </Link>
          {play.slice(0, 5).map((card, i) => (
            <Link
              to={urlFormater(`${card.name}-${i}`)}
              key={`${card.name}-${i}`}
              className=" w-[48%] h-14 flex items-center gap-2 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff0f] hover:bg-[#ffffff1a] cursor-pointer"
            >
              {'image' in card ? <img src={card.image} alt={card.classe} className=" h-14 w-14 rounded rounded-r-none" /> : <div className="w-14 h-14 flex items-center justify-center bg-[#272727] rounded rounded-r-none">
                <Music />
              </div>}

              <p className="text-[13px] font-semibold text-zinc-50 w-18 whitespace-nowrap overflow-hidden overflow-ellipsis">{card.name}</p>

            </Link>
          ))}

        </div>
      </div>

    </div>

  )
}