import { GoHome } from "react-icons/go";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export const TopAside = () => {
  return (
    <div className="bg-[#121212] px-6 py-4 rounded-[6px] flex flex-col gap-6 font-medium h-[12%]">
      <Link to="/" className="flex items-center gap-4 hover:text-zinc-50 font-semibold text-[15px]">
        <GoHome size={25} />
        Início
      </Link>
      <a href="" className="flex items-center gap-4 hover:text-zinc-50 font-semibold  text-[15px]">
        <CiSearch size={25} />
        Buscar
      </a>
    </div>
  )
}