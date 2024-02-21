import { GoHome } from "react-icons/go";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import SearchCtx from "@/context/context.Search";
import { useContext } from "react";
import { urlFormater } from "@/scripts/normalize";

export const TopAside = () => {
  const { setSearchOpen } = useContext(SearchCtx);
  return (
    <div className="bg-[#121212] px-6 justify-center rounded-[6px] flex flex-col gap-6 font-medium h-[15%]">
      <Link to="/" className="flex items-center gap-4 hover:text-zinc-50 font-semibold text-[15px]">
        <GoHome size={25} />
        Início
      </Link>
      <Link to={urlFormater('search')}
        className="flex items-center gap-4 hover:text-zinc-50 font-semibold  text-[15px]"
        onClick={() => setSearchOpen(true)}
      >
        <CiSearch size={25} />
        Buscar
      </Link>
    </div>
  )
}