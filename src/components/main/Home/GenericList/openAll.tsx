
import { HeaderMain } from "../HeaderMain"
import { GridGeneric } from "../Search/searching/gridGeneric"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"
import { MontaMiniCardArtists } from "@/scripts/DataConstructor"

interface MostrarTudoProps {
  title: string;
  base: MontaMiniCardArtists[];

}
export const OpenAll = ({ title, base }: MostrarTudoProps) => {
  return (
    <div className="flex-1  sm:rounded-[6px] h-[88vh]  overflow-y-scroll 
     bg-[#141414] flex flex-col sm:p-4 sm:px-6 p-2">
      <HeaderMain />
      <div className="flex flex-col gap-1">
        <h1 className="py-4 text-2xl font-semibold text-zinc-50">{title}</h1>
        <div className="flex gap-6  w-full flex-wrap ">
          {base.map((card, i) => (
            <Link
              to={urlFormater(`${card.title}`)}
              key={i}
              className=" w-[14%]  overflow-hidden"

            >
              <GridGeneric image={card.capa} text={card.title} imageRoundedFull key={i} span={''} />
            </Link>

          ))}
        </div>
      </div>


    </div>
  )
}