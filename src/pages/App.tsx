
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import { Main } from '@/components/main/Home'
import { Footer } from '@/components/Footer'

import { playlists } from "@/mocks/playlists-albuns";
import { Aside } from "@/components/Aside";


import { urlFormater } from "@/scripts/normalize";
import { Recomendacoes } from "@/mocks/Recomendacoes";
import React from "react";

import { OpenAlbumOrPlaylist } from "@/components/main/OnOpenAlbum/Curtidos";
import { OpenCard } from "@/components/main/OnOpenAlbum/albuns&pls";






function App() {



  return (
    <BrowserRouter>

      <div className=' sm:p-2 pb-0  flex flex-col gap-4'>
        <div className='flex sm:flex-1 sm:flex-row flex-col-reverse gap-2 relative '>
          <Aside />
          <Routes>
            <Route path="/" element={<Main />} />

            {playlists.map((route, i) => (
              <Route
                path={urlFormater(`${route.name}-${i}`)}
                element={<OpenAlbumOrPlaylist album={route} />} key={i} />
            ))}
            {Recomendacoes.map((route, i) => (
              <React.Fragment key={i}>
                {route.cards.map((card, i) => (
                  <Route
                    path={urlFormater(`${card.title}-${i}`)}
                    element={<OpenCard />}
                    key={`${card.title}-${i}`} />
                ))}
              </React.Fragment>
            ))}


          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
