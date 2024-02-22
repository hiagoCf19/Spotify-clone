/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowseAll } from "@/mocks/BrowseAll"
import { musics, playlists } from "@/mocks/playlists-albuns"
import { useEffect, useState } from "react"
interface ModalSearchProps {
  search: any

}

export const ModalSearch = ({ search }: ModalSearchProps) => {
  const [musics, setMusics] = useState<musics[]>([])





  useEffect(() => {
    playlists.forEach(pl => {
      pl.cards.forEach((cards) => {
        setMusics(prevMusics => prevMusics.concat(cards.musicas));
      })
    })
  }, [])
  useEffect(() => {

  }, [musics]);
  const filterGenre = search !== '' ?
    BrowseAll.filter(genre =>
      genre.genre.toLowerCase().includes(search.toLowerCase()))
    :
    BrowseAll
  const filterMusics = musics.filter(music =>
    music.name.toLowerCase().includes(search.toLowerCase()) ||
    music.artista.toLowerCase().includes(search.toLowerCase()) ||
    music.genre.toLowerCase().includes(search.toLowerCase()) ||
    music.album.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      {filterGenre.map((card) => (
        <p>{card.genre}</p>
      ))}
      <div>
        {filterMusics.map((music) => (
          <p>
            {music.name}
          </p>
        ))}
      </div>
    </div>
  )
}