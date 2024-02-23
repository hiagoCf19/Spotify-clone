import { InterfaceBrowseAll } from "@/mocks/BrowseAll"
import { artista, musics } from "@/mocks/playlists-albuns"

interface desktopSearchModalProps {
  artistasUnicos: artista[]
  filterGenre: InterfaceBrowseAll[]
  musicasUnicas: musics[]
}
export const DesktopSearchmodal = ({ artistasUnicos, filterGenre, musicasUnicas }: desktopSearchModalProps) => {
  return (
    <div className="">
      <p>
        {artistasUnicos.map((artista) => (
          artista.name
        ))}

      </p>
      <p>
        {filterGenre.map((genre) => (
          genre.genre
        ))}
      </p>
      <p>
        {musicasUnicas.map((musica) => (
          musica.name
        ))}
      </p>

    </div>
  )
}