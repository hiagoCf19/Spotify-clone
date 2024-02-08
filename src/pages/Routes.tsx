
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import { Main } from '@/components/main/Home'
import { Footer } from '@/components/Footer'
import { playlists } from "@/mocks/playlists-albuns";
import { Aside } from "@/components/Aside";
import { urlFormater } from "@/scripts/normalize";

import { LibraryCards } from "@/scripts/bibliotecas";
import { OpenAlbumOrPlaylist } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen";


function App() {
  const dontLibraryCards = playlists.filter((item) => {
    return item.biblioteca === false
  })
  console.log()
  return (
    <BrowserRouter>

      <div className=' sm:p-2 pb-0  flex flex-col gap-4'>
        <div className='flex sm:flex-1 sm:flex-row flex-col-reverse gap-2 relative '>
          <Aside />
          <Routes>
            <Route path="/" element={<Main />} />
            {LibraryCards.map((route, i) => (
              <Route
                path={urlFormater(`${route.name}-${i}`)}
                element={<OpenAlbumOrPlaylist album={route} />} key={i} />
            ))}
            {dontLibraryCards.map((item) => (

              item.cards != undefined ? item.cards?.map((card, i) => (

                <Route path={urlFormater(`${card.title}-${i}`)} element={<OpenAlbumOrPlaylist album={item} key={i} />} />

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
