/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowseAll } from "@/mocks/BrowseAll"
import { artista, musics, playlists } from "@/mocks/playlists-albuns"
import { useEffect, useState } from "react"
import { DesktopSearchmodal } from "./desktopSearchmodal";
import { MobileSearchModal } from "./MobileSearchModal";

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

  const filterGenre = search !== '' ?
    BrowseAll.filter(genre =>
      genre.genre.toLowerCase().includes(search.toLowerCase()))
    :
    BrowseAll
  const musicasUnicas = [...new Set(musics.filter(music =>
    music.name.toLowerCase().includes(search.toLowerCase()) ||
    music.artista.some(artist => artist.name.toLowerCase().includes(search.toLowerCase())) ||
    music.genre.toLowerCase().includes(search.toLowerCase()) ||
    music.album.toLowerCase().includes(search.toLowerCase())
  ))];
  const artistasNomesUnicos = new Set();
  const artistasUnicos: artista[] = [];
  musicasUnicas.forEach(music => {
    music.artista.forEach(artist => {
      if (!artistasNomesUnicos.has(artist.name)) {
        artistasNomesUnicos.add(artist.name);
        artistasUnicos.push(artist);
      }
    });
  });


  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [larguraDaTela]);

  const desktopModal = larguraDaTela >= 640 ? true : false

  return (
    desktopModal
      ?
      <DesktopSearchmodal
        artistasUnicos={artistasUnicos}
        filterGenre={filterGenre}
        musicasUnicas={musicasUnicas}
      />

      :
      <MobileSearchModal
        artistasUnicos={artistasUnicos}
        filterGenre={filterGenre}
        musicasUnicas={musicasUnicas} />

  )
}