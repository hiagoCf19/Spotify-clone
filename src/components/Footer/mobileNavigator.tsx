import { LibraryIcon } from "lucide-react"
import { CiSearch } from "react-icons/ci"

import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

export const MobileNavigator = () => {
  return (
    <nav className='sm:hidden block py-2 px-5 glass'>
      <div className="flex justify-between items-center px-8 font-semibold">
        <Link to='/' className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1">
          <TiHome size={35} />
          Inicio
        </Link>
        <a href="" className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1">
          <CiSearch size={35} />
          Buscar
        </a>
        <a href="" className="flex items-center flex-col text-[12px] hover:text-zinc-50 gap-1">
          <LibraryIcon size={35} />
          Biblioteca
        </a>
      </div>
    </nav>

  )
}