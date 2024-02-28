import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from '@/components/main/Home';
import { Footer } from '@/components/Footer';
import { Aside } from "@/components/Aside";
import { urlFormater } from "@/scripts/normalize";
import { exibidos } from "@/scripts/exibitionControl";
import { OpenAlbumOrPlaylist } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen";
import { MostrarTudo } from "@/components/main/Home/GenericList/mostrarTudo";
import { Curtidos } from "@/components/curtidos";
import { SearchComponent } from "@/components/main/Home/Search";
import { BrowseAll } from "@/mocks/BrowseAll";
import { OpenGenre } from "@/components/main/Home/Search/OpenCardGenre/OpenGenre";
import { playlists } from "@/mocks/playlists-albuns";
import { PerfilArtista } from "@/components/main/Home/perfilArtista";
import '../styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className=' sm:p-2 pb-0  flex flex-col gap-4 h-[100vh]'>
        <div className='flex sm:flex-1 sm:flex-row flex-col-reverse gap-2 relative '>
          <Aside />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path={urlFormater('Musicas-curtidas')} element={<Curtidos />} />
            <Route path={urlFormater('search')} element={<SearchComponent />} />
            {playlists.map((playlist) => (
              playlist.cards.map((card) => (

                card.musicas.map((musica, indexOfMusic) => (
                  <React.Fragment key={`${musica.name}-${indexOfMusic}`}>
                    {/* Criar componente para albuns e singles */}
                    <Route path={urlFormater(musica.album)} element={<div>{musica.album}</div>} />
                    {musica.artista.map((artista, indexOfArtist) => (
                      <Route
                        key={`${artista.name}-${indexOfArtist}`}
                        path={urlFormater(artista.name)}
                        element={
                          <PerfilArtista
                            artist={musica.artista}
                          />
                        } />
                    ))}
                  </React.Fragment>

                ))
              ))
            ))}
            {BrowseAll.map((card) => (
              <Route path={urlFormater(card.genre)} element={<OpenGenre music={card.musics} />} key={card.genre} />
            ))}
            {exibidos.map((item) => (
              item.cards != undefined ? item.cards?.map((card, i) => (
                <>
                  <Route path={urlFormater(`${card.title}`)} element={<OpenAlbumOrPlaylist album={card} key={i} pl={item} />} />
                  <Route path={`/${urlFormater(item.name)}`} element={<MostrarTudo item={item} />} />
                </>
              )) : ''
            ))}

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App