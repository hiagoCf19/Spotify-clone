
import PlayingCtx from "@/context/context.Playing"
import { InterfaceBrowseAll } from "@/mocks/BrowseAll"
import { artista, musics } from "@/mocks/playlists-albuns"
import { MontaThisIs } from "@/scripts/DataConstructor"
import { urlFormater } from "@/scripts/normalize"
import { useContext } from "react"
import { MdVerified } from "react-icons/md"
import { Link } from "react-router-dom"

interface mobileSearchModelProps {
  artistasUnicos: artista[]
  filterGenre: InterfaceBrowseAll[]
  musicasUnicas: musics[]
  thisIsUni: MontaThisIs[]

}

export const MobileSearchModal = ({ artistasUnicos, filterGenre, musicasUnicas, thisIsUni }: mobileSearchModelProps) => {
  const { setMusicPlaying } = useContext(PlayingCtx)
  return (
    <div className=" overflow-y-scroll flex flex-col gap-4 p-2">
      {/* Artista */}
      <div className=" flex  flex-col gap-3">
        {artistasUnicos.slice(0, 2).map((artista: artista, i: number) => (
          <Link to={urlFormater(artista.name)} key={i}>

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
          </Link>
        ))}
      </div>


      <div className="flex flex-col gap-4">
        {thisIsUni.slice(0, 3).map((thisis, i) => (
          <Link
            to={urlFormater(`${thisis.title}`)}
            key={i}

          >
            <div className="  flex gap-2">
              <img src={thisis.capa} className=" size-12 rounded-[2px]" />
              <div className="flex flex-col">
                <p className="text-md text-zinc-50">{thisis.title}</p>
                <span className="text-[13px] font-normal line-clamp-1">Playlist <i className="text-[10px]">• </i> Spotify</span>
              </div>

            </div>
          </Link>

        ))}
        {musicasUnicas.map((music, i) => (
          <div key={i} onClick={() => setMusicPlaying([music])}>
            <div className="  flex gap-2">
              <img src={music.capa} className=" size-12 rounded-[2px]" />
              <div className="flex flex-col">
                <p className="text-md text-zinc-50">{music.name}</p>
                <span className="text-[13px] font-normal">Musica <i className="text-[10px]">• </i>{music.artista.map((artista) => (
                  artista.name
                ))}</span>
              </div>

            </div>

          </div>
        ))}
        {/* This is e MUSICAS */}

        {/* GENERO */}
        {filterGenre.map((card: InterfaceBrowseAll, i: number) => (
          <Link to={urlFormater(card.genre)} key={i}>
            <div className="  flex gap-2">
              <img src={card.capa} className="size-12 rounded-[4px]" />
              <div className="flex flex-col">
                <p className="text-md text-zinc-50">{card.genre}</p>
                <span className="text-[13px] font-normal">Gênero</span>
              </div>

            </div>

          </Link>
        ))}
      </div>


      <div className="p-2" />
    </div>
  )
}