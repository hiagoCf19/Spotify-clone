
import { MiniCardLiked } from "@/components/curtidos/miniCard"
import { playlists } from "@/mocks/playlists-albuns"
import { Hour } from "@/scripts/Saudacao"
import { urlFormater } from "@/scripts/normalize"
import { Bell, Clock, Music, Settings } from "lucide-react"
import { useState } from "react"
import { FaPlay } from "react-icons/fa6"
import { Link } from "react-router-dom"


export const FirstSectionMain = () => {

  let cardsRendered: number = 0


  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
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


      <div className="flex sm:gap-3 gap-2 flex-wrap ">
        <MiniCardLiked />
        {
          playlists.map((playlist) => (
            playlist.cards.map((card, i) => {
              if (cardsRendered >= 7) return null;
              cardsRendered++;
              return (
                <Link
                  to={urlFormater(`${card.title}-${i}`)}
                  key={`${card}-${i}`}
                  className="sm:w-[24.4%] w-[48%] sm:h-16 h-14 flex items-center sm:gap-4 gap-2 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff13] hover:bg-[#ffffff22] cursor-pointer sm:relative"
                  onMouseOver={() => setHoveredIndex(card.title)}
                  onMouseOut={() => setHoveredIndex(null)}
                >

                  <div className="flex items-center sm:gap-4 gap-2 overflow-hidden">
                    {card.image !== "" ? <img src={card.image} alt={card.title} className="sm:h-16 h-14 rounded rounded-r-none" /> : <div className="sm:size-16 size-14 flex items-center justify-center bg-[#272727] rounded rounded-r-none">
                      <Music />
                    </div>}

                    <p className=" sm:text-base text-[13px] font-semibold text-zinc-50 whitespace-nowrap overflow-hidden overflow-ellipsis">{card.title}</p>

                    <div className={` absolute right-0 p-4 rounded-full sm:bg-spotgreen bg-transparent sm:shadow-lg shadow-[#000000c1] mx-4 ${hoveredIndex === card.title ? '' : 'hidden'}`}>
                      <FaPlay color="#000" className="hidden sm:block" />
                    </div>
                  </div>



                </Link>
              );
            })
          ))
        }
      </div>




    </div>

  )
}