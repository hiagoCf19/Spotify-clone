/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowseAll } from "@/mocks/BrowseAll"
import { artista, musics, playlists } from "@/mocks/playlists-albuns"
import { useEffect, useState } from "react"
import { DesktopSearchmodal } from "./searching/desktopSearchmodal";
import { MobileSearchModal } from "./searching/mobileSearchModal";

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
  const albunsNomeUnicos = new Set();
  const albunsUnicos: any = []
  musicasUnicas.forEach((album) => {
    if (!albunsNomeUnicos.has(album.album)) {
      albunsNomeUnicos.add(album.album)
      albunsUnicos.push(album)
    }
  })

  const [pesquisaV, setPesquisaV] = useState<null | boolean>(null)
  useEffect(() => {
    artistasUnicos.length === 0 && musicasUnicas.length === 0 && filterGenre.length === 0 ? setPesquisaV(false) : setPesquisaV(true)
  }, [artistasUnicos.length, filterGenre.length, musicasUnicas.length, search])

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
    pesquisaV ? desktopModal
      ?
      <DesktopSearchmodal
        artistasUnicos={artistasUnicos}
        filterGenre={filterGenre}
        musicasUnicas={musicasUnicas}
        albunsUnicos={albunsUnicos}
      />

      :
      <MobileSearchModal
        artistasUnicos={artistasUnicos}
        filterGenre={filterGenre}
        musicasUnicas={musicasUnicas} />

      :
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-zinc-50 sm:text-3xl text-xl font-semibold text-center">Nenhum resultado encontrado para "{search}"</h1>
        <span className="text-sm text-center">Confira se você digitou corretamente ou verifique nossos sons disponíveis</span>
      </div>


  )
}