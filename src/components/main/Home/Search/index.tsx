import SearchCtx from "@/context/context.Search";
import { HeaderMain } from "../HeaderMain";
import { useContext, useEffect } from "react";
import { BrowseAll } from "@/mocks/BrowseAll";
import { urlFormater } from "@/scripts/normalize";
import { Link } from "react-router-dom";
import { HeaderSearchMobile } from "./HeaderSearchmobile";
import { Search } from "lucide-react";

export const SearchComponent = () => {

  const { searchOpen, setSearchOpen } = useContext(SearchCtx);
  useEffect(() => {
    setSearchOpen(true);
  }, [setSearchOpen]);
  return (
    <div className="flex-1 sm:rounded-[6px] h-[88vh]  overflow-y-scroll gap-1 flex flex-col bg-[#171717] sm:px-6 p-2 "

    >
      <HeaderMain search={searchOpen} />
      <HeaderSearchMobile />
      <div className="sm:hidden no-underline w-full flex items-center gap-2 bg-zinc-50  p-2 rounded my-5">
        <Search color="#272727" />
        <input type="text" className=" w-[90%] rounded placeholder:text-[#272727] placeholder:font-semibold outline-none" placeholder="O que você quer ouvir ? " />
      </div>

      <div className="sm:py-4">
        <h1 className="sm:text-[22px] text-xl font-bold text-zinc-50 hover:underline">Navegar por todas as seções</h1>
        <div className="grid sm:grid-cols-7 grid-cols-2 w-full ml-1 sm:ml-0">
          {BrowseAll.map((card) => (
            <div className={` sm:h-[20vh] h-[15vh] sm:w-[90%] w-[95%] rounded-[8px] p-4 sm:my-4 my-2 relative overflow-hidden cursor-pointer ${card.background} `} key={card.genre}>
              <Link to={urlFormater(card.genre)}>
                <h3 className="sm:text-[22px] text-2xl font-bold text-zinc-50 ">{card.genre}</h3>

                <img src={card.image} alt="" className="absolute sm:h-[10vh] h-[10vh] transform rotate-[25deg] -bottom-2 -right-4" />
              </Link>
            </div>
          ))}

        </div>
      </div>
      <div className="sm:hidden h-[15vh]" />
    </div>
  )
};
