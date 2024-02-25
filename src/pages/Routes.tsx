import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css'
import { Main } from '@/components/main/Home'
import { Footer } from '@/components/Footer'
import { Aside } from "@/components/Aside";
import { urlFormater } from "@/scripts/normalize";

import { exibidos } from "@/scripts/exibitionControl";
import { OpenAlbumOrPlaylist } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen";
import { MostrarTudo } from "@/components/main/Home/GenericList/mostrarTudo";
import { Curtidos } from "@/components/curtidos";
import { SearchComponent } from "@/components/main/Home/Search";
import { BrowseAll } from "@/mocks/BrowseAll";
import { OpenGenre } from "@/components/main/Home/Search/OpenCardGenre/OpenGenre";



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
            {BrowseAll.map((card) => (
              <Route path={urlFormater(card.genre)} element={<OpenGenre music={card.musics} />} key={card.genre} />
            ))}
            {exibidos.map((item, Im) => (

              item.cards != undefined ? item.cards?.map((card, i) => (
                <Route path={urlFormater(`${item.name}-${Im}`)} element={<OpenAlbumOrPlaylist album={card} key={i} pl={item} />} />
              )) : ''
            ))}
            {exibidos.map((item) => (
              item.cards != undefined ? item.cards?.map((card, i) => (
                <>
                  <Route path={urlFormater(`${card.title}-${i}`)} element={<OpenAlbumOrPlaylist album={card} key={i} pl={item} />} />
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
