
import { playlists } from "@/mocks/playlists-albuns"
import { Hour } from "@/scripts/Saudacao"
import { Bell, Clock, Music, Settings } from "lucide-react"

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

      <div className="flex gap-3 flex-wrap">
        {play.slice(0, 8).map((card, i) => (
          <div className=" w-[371px] h-16 flex items-center gap-4 rounded bg-opacity-10 backdrop-blur-20 bg-[#ffffff0f] hover:bg-[#ffffff1a] cursor-pointer" key={i}>
            {'image' in card ? <img src={card.image} alt={card.classe} className=" h-16 rounded rounded-r-none" /> : <div className="w-16 h-16 flex items-center justify-center bg-[#272727] rounded rounded-r-none">
              <Music />
            </div>}

            <p className="text-[16px] font-semibold text-zinc-50">{card.name}</p>
          </div>
        ))}

      </div>
    </div>

  )
}