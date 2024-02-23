import { InterfaceBrowseAll } from "@/mocks/BrowseAll"
import { artista, musics } from "@/mocks/playlists-albuns"
import { MdVerified } from "react-icons/md"
import { Link } from "react-router-dom"

interface mobileSearchModelProps {
  artistasUnicos: artista[]
  filterGenre: InterfaceBrowseAll[]
  musicasUnicas: musics[]
}

export const MobileSearchModal = ({ artistasUnicos, filterGenre, musicasUnicas }: mobileSearchModelProps) => {
  return (
    <div className=" overflow-y-scroll flex flex-col gap-4 p-2">
      {/* Artista */}
      <div className=" flex  flex-col gap-3">
        {artistasUnicos.slice(0, 3).map((artista: artista, i: number) => (
          <div key={i}>
            {/* Aqui você pode renderizar a imagem do artista e outras informações se necessário */}
            <div className="flex items-center gap-3">
              <img src={artista.foto} className="size-12 rounded-full shadow shadow-black" />
              <div className="flex flex-col">
                <p className="text-md text-zinc-50 flex items-center gap-1">
                  {artista.name}
                  <MdVerified color="#1DA1F2"
                    size={13} />
                </p>
                <span className="text-[13px] font-normal">
                  Artista
                </span>

              </div>

            </div>
          </div>
        ))}
      </div>
      {/* GENERO */}
      {filterGenre.map((card: InterfaceBrowseAll, i: number) => (
        <Link to={'/'} key={i}>
          <div className="  flex gap-2">
            <img src={card.capa} className="size-12 rounded-[4px]" />
            <div className="flex flex-col">
              <p className="text-md text-zinc-50">{card.genre}</p>
              <span className="text-[13px] font-normal">Gênero</span>
            </div>

          </div>

        </Link>
      ))}
      {/* MUSICAS */}
      <div>
        <div className="flex flex-col gap-4">
          {musicasUnicas.map((music, i) => (
            <Link to={'/'} key={i}>
              <div className="  flex gap-2">
                <img src={music.capa} className=" size-12 rounded-[2px]" />
                <div className="flex flex-col">
                  <p className="text-md text-zinc-50">{music.name}</p>
                  <span className="text-[13px] font-normal">Musica <i className="text-[10px]">• </i>{music.artista.map((artista) => (
                    artista.name
                  ))}</span>
                </div>

              </div>

            </Link>
          ))}
        </div>


      </div>
    </div>
  )
}