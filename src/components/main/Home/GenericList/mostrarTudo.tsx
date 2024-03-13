import { Pl } from "@/mocks/playlists-albuns"
import { HeaderMain } from "../HeaderMain"
import { GridGeneric } from "../Search/searching/gridGeneric"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"

interface MostrarTudoProps {
  item: Pl
}
export const MostrarTudo = ({ item }: MostrarTudoProps) => {
  return (
    <div className="flex-1  sm:rounded-[6px] h-[88vh]  overflow-y-scroll 
     bg-[#141414] flex flex-col sm:p-4 sm:px-6 p-2">
      <HeaderMain />
      <div className="flex flex-col gap-1">
        <h1 className="py-4 text-2xl font-semibold text-zinc-50">{item.name}</h1>
        <div className="flex gap-6  w-full">
          {item.cards.map((card, i) => (
            <Link
              to={urlFormater(`${card.title}`)}
              key={i}
              className=" w-[14%]  sm:min-w-[150px] overflow-hidden"

            >
              <GridGeneric image={card.image} text={card.title} imageRoundedFull={false} key={i} span={card.description} />
            </Link>

          ))}
        </div>
      </div>


    </div>
  )
}