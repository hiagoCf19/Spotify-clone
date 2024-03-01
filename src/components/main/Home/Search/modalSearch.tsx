

import { artista, musics, playlists } from "@/mocks/playlists-albuns"
import { useEffect, useState } from "react"
import { DesktopSearchmodal } from "./searching/desktopSearchmodal";
import { MobileSearchModal } from "./searching/mobileSearchModal";
import { BrowseAll } from "@/mocks/BrowseAll";
import { MontaThisIs } from "@/scripts/DataConstructor";


interface ModalSearchProps {
  search: string

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
  const artistas: MontaThisIs[] = [];
  playlists.forEach(pl => {
    pl.cards.forEach(cd => {
      cd.musicas.forEach(ar => {
        ar.artista.forEach(name => {
          artistas.push(new MontaThisIs(name.name, name.thisIs ?? '', name.name))
        });
      });
    });
  });

  const multiFilter = [...new Set(musics.filter(music =>
    music.name.toLowerCase().includes(search.toLowerCase()) ||
    music.artista.some(artist => artist.name.toLowerCase().includes(search.toLowerCase())) ||
    music.genre.toLowerCase().includes(search.toLowerCase()) ||
    music.album.toLowerCase().includes(search.toLowerCase())
  ))];

  const thisISuni = new Set<string>(); // Conjunto para armazenar artistas únicos

  const thisIsFilter = artistas.filter(artist => {

    const includesSearchTerm = artist.title.toLowerCase().includes(search.toLowerCase());
    if (includesSearchTerm && !thisISuni.has(artist.title)) {
      thisISuni.add(artist.title); // Adiciona o título do artista ao conjunto de artistas únicos
      return true; // Retorna true para incluir este artista no resultado
    }

    return false; // Retorna false para excluir este artista do resultado
  });

  const artistasNomesUnicos = new Set();
  const artistasUnicos: artista[] = [];
  multiFilter.forEach(music => {
    music.artista.forEach(artist => {
      if (!artistasNomesUnicos.has(artist.name)) {
        artistasNomesUnicos.add(artist.name);
        artistasUnicos.push(artist);
      }
    });
  });
  const albunsNomeUnicos = new Set();
  const albunsUnicos: musics[] = []
  multiFilter.forEach((album) => {
    if (!albunsNomeUnicos.has(album.album)) {
      albunsNomeUnicos.add(album.album)
      albunsUnicos.push(album)
    }
  })
  const musicsNomeunico = new Set()
  const musicas: musics[] = []
  multiFilter.forEach((musica) => {
    if (!musicsNomeunico.has(musica.name)) {
      musicsNomeunico.add(musica.name)
      musicas.push(musica)
    }
  })

  const [pesquisaV, setPesquisaV] = useState<null | boolean>(null)
  useEffect(() => {
    artistasUnicos.length === 0 && multiFilter.length === 0 && filterGenre.length === 0 && thisIsFilter.length === 0 ? setPesquisaV(false) : setPesquisaV(true)
  }, [artistasUnicos.length, filterGenre.length, multiFilter.length, search, thisIsFilter.length])

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
    pesquisaV ?
      desktopModal
        ?
        <DesktopSearchmodal
          artistasUnicos={artistasUnicos}
          filterGenre={filterGenre}
          musicasUnicas={musicas}
          albunsUnicos={albunsUnicos}
          thisIsUni={thisIsFilter}
        />

        :
        <MobileSearchModal
          artistasUnicos={artistasUnicos}
          filterGenre={filterGenre}
          musicasUnicas={musicas}
          thisIsUni={thisIsFilter}

        />

      : <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-zinc-50 sm:text-3xl text-xl font-semibold text-center">Nenhum resultado encontrado para "{search}"</h1>
        <span className="text-sm text-center">Confira se você digitou corretamente ou verifique nossos sons disponíveisa</span>
      </div>


  )
}