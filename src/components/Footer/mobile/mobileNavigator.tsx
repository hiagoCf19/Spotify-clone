import { urlFormater } from "@/scripts/normalize";
import { GoHomeFill } from "react-icons/go";

import { Link } from "react-router-dom";

export const MobileNavigator = () => {
  return (
    <nav className=' py-2 px-5 bg-gradient-to-b to-[rgb(0,0,0)] from-[#171717ba]  '>
      <div className="flex justify-between w-full  items-center font-semibold">
        <Link to='/' className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1 flex-1">
          <GoHomeFill size={35} />
          Inicio
        </Link>
        <Link to={urlFormater('search')} className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1 flex-1">
          <svg data-encore-id="icon" role="img" aria-hidden="true" className="size-8 svg-icon text-[#b7b7b7] hover:text-zinc-50" viewBox="0 0 24 24" fill="currentColor">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
            </svg>
          </svg>
          Buscar
        </Link>
        <a href="" className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1 flex-1">
          <svg data-encore-id="icon" role="img" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" className="size-8 text-[#b7b7b7] hover:text-[#FFF]"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
          Biblioteca
        </a>

      </div>

    </nav>

  )
}