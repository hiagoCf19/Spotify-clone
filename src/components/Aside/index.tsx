import { GoHome } from "react-icons/go";

import { CiSearch } from "react-icons/ci";
import { Hour } from "@/scripts/Saudacao.ts";


const message = Hour();
console.log(message);


export const Aside = () => {
  
  
  return (
    <aside className=" w-80 border ">
      <nav className=" hidden sm:block ">
        <div className="flex flex-col gap-2 h-full">
          <div className="bg-[#121212] p-6 rounded-[6px] flex flex-col gap-6 font-medium h-[15%]">
          <a href="" className="flex items-center gap-4 hover:text-zinc-50">
            <GoHome size={25}/>
            Inicio
          </a>
          <a href="" className="flex items-center gap-4 hover:text-zinc-50">
            <CiSearch size={25} />
            Buscar
          </a>
        </div>
        <div className="bg-[#141414] p-6 rounded-[6px] flex flex-col gap-6 font-medium h-[86%] ">
          Bib área
        </div>
        </div>
        
      </nav>
    
      
    </aside>
    
  )
}