import { Pl } from "@/mocks/playlists-albuns"
import { Card } from "./Card"
import { HeaderMain } from "../HeaderMain"

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
        <div className="grid grid-cols-7">
          {item.cards.map((card, i) => (
            <Card props={card} key={i} />
          ))}
        </div>
      </div>


    </div>
  )
}