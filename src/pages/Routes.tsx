import React, { Fragment } from "react";
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
import { extrairMusicasPorArtista } from "@/scripts/musicasDoArtista";
import { OpenAlbum } from "@/components/main/Home/perfilArtista/OpenAlbum";



function App() {

  return (
    <BrowserRouter>

      <div className=' sm:p-2 pb-0  flex flex-col h-[100vh]'>
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
                    <Route path={urlFormater(musica.album)} element={
                      <OpenAlbum
                        album={musica.album}
                        gradient={musica.MusicColor}
                        capa={musica.capa}
                        foto={musica.artista[0].foto}
                        artista={musica.artista[0].name}
                        musica={musica}
                      />
                    } />
                    {musica.artista.map((artista, indexOfArtist) => (
                      <Fragment key={`${artista.name}-${indexOfArtist}`}>
                        <Route

                          path={urlFormater(artista.name)}
                          element={
                            <PerfilArtista
                              artist={musica.artista}
                            />
                          } />
                        <Route path={urlFormater(`this-is-${artista.name}`)} element={
                          <OpenAlbumOrPlaylist
                            color={artista.color ?? ''}
                            image={artista.thisIs ?? ''}
                            title={`This Is ${artista.name}`}
                            description={`This is ${artista.name}. Os maiores sucessos em uma unica playlist`}
                            classe={'Playlist'}
                            musicas={extrairMusicasPorArtista(artista.name)}
                          />} />
                      </Fragment>

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
                <Fragment key={i}>
                  <Route path={urlFormater(`${card.title}`)} element={
                    <OpenAlbumOrPlaylist
                      color={card.color ?? ''}
                      image={card.image ?? ''}
                      title={`${card.title}`}
                      description={`${card.description}`}
                      classe={'Playlist'}
                      musicas={card.musicas}
                    />} />
                  <Route path={`/${urlFormater(item.name)}`} element={<MostrarTudo item={item} />} />
                </Fragment>
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