import { BrowseAll } from "@/mocks/BrowseAll"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"

export const EstaticHome = () => {
  return (
    <div className="grid sm:grid-cols-7 grid-cols-2 w-full ml-1 sm:ml-0">
      {BrowseAll.map((card) => (
        <Link to={urlFormater(card.genre)} key={card.genre}>
          <div className={` sm:h-[20vh] h-[15vh] sm:w-[90%] w-[95%] rounded-[8px] p-4 sm:my-4 my-2 relative overflow-hidden cursor-pointer ${card.background} `} key={card.genre}>

            <h3 className="sm:text-[22px] text-2xl font-bold text-zinc-50 ">{card.genre}</h3>

            <img src={card.capa} alt="" className="absolute sm:h-[10vh] h-[10vh] transform rotate-[25deg] -bottom-2 -right-4" />

          </div>
        </Link>
      ))}

    </div>
  )
}