import { GoHome } from "react-icons/go";

import { CiSearch } from "react-icons/ci";

export const TopAside = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-[6px] flex flex-col gap-6 font-medium h-[15%]">
      <a href="" className="flex items-center gap-4 hover:text-zinc-50">
        <GoHome size={25} />
        Inicio
      </a>
      <a href="" className="flex items-center gap-4 hover:text-zinc-50">
        <CiSearch size={25} />
        Buscar
      </a>
    </div>
  )
}