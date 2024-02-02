import { GoHome } from "react-icons/go";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export const TopAside = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-[6px] flex flex-col gap-6 font-medium h-[15%]">
      <Link to="/" className="flex items-center gap-4 hover:text-zinc-50">
        <GoHome size={25} />
        Inicio
      </Link>
      <a href="" className="flex items-center gap-4 hover:text-zinc-50">
        <CiSearch size={25} />
        Buscar
      </a>
    </div>
  )
}