import { AudioLines, Disc, PlusCircle, Radio } from "lucide-react"
import { FaArrowDownShortWide, FaUserPlus } from 'react-icons/fa6'
import { IoShareSocialOutline } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";


export const BodyDrawerCard = () => {
  return (
    <div>
      <ul className="flex flex-col gap-8 p-4">
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <PlusCircle />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Adicionar a outra playlist
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <FaArrowDownShortWide size={20} />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Adicionar á fila
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <Disc />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Ver o álbum
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <FaUserPlus size={25} />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Ver o artista
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <IoShareSocialOutline size={25} />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Compartilhar
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <Radio />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Ir para a rádio da música
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <LuUserPlus size={25} />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Mostrar créditos
          </p>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-[5%]">
            <AudioLines size={25} />
          </div>

          <p className="text-zinc-50 font-medium text-[1rem]">
            Mostrar código do Spotify
          </p>
        </li>

      </ul>
    </div>
  )
}