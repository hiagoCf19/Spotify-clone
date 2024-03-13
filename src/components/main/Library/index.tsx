
import { useState } from "react";
import { HeaderLibrary } from "./header.library";
import { ArrowUpDown } from "lucide-react";
import { LibraryCards } from "./cards.library";

export const LibraryComponent = () => {
  const baseButton = ['Playlist', ' Álbuns', 'Artistas'];
  const [ativo, setAtivo] = useState(0)
  // const albunsFavoritados = [];
  // const artistasFavoritado = [];


  return (
    <div className="sm:h-[90vh] h-screen  overflow-y-scroll 
      sm:rounded w-full  bg-[#121212] flex flex-col gap-4" >
      <HeaderLibrary baseButton={baseButton} ativo={ativo} setAtivo={setAtivo} />
      <div className="flex justify-between px-4">
        <div className="flex gap-2 items-center text-zinc-50">
          <ArrowUpDown size={18} />
          <span className="text-sm">Recentes</span>
        </div>
        <div>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="text-zinc-50 size-4" fill="currentColor"><path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path></svg>
        </div>

      </div>
      {ativo === 0 ?
        <LibraryCards />
        : ativo === 1 ?
          <div className="w-full h-[50%] flex justify-center items-center text-center text-zinc-50">
            <p>
              Você ainda não adicionou nenhum <strong className="text-spotgreen"> album</strong> a biblioteca
            </p>
          </div>
          : <div className="w-full h-[50%] flex justify-center items-center text-center text-zinc-50">
            <p>
              Você ainda não adicionou nenhum <strong className="text-spotgreen"> artista</strong> a biblioteca
            </p>
          </div>}

    </div>
  )
}