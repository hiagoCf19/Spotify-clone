import { TitleSpt } from "@/components/Recorrentes/Title"
import PlayingCtx from "@/context/context.Playing";
import { musics, playlists } from "@/mocks/playlists-albuns"
import { extrairMusicas } from "@/scripts/desestruturacao";
import { urlFormater } from "@/scripts/normalize";
import { Fragment, useContext, useEffect, useState } from "react";


import { BsPlusCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6"
import { Link } from "react-router-dom";

export const MobileLancamentos = () => {

  const { setMusicPlaying } = useContext(PlayingCtx)
  const [randomMusic, setRandomMusic] = useState<musics[]>([]);
  useEffect(() => {
    const musicas = extrairMusicas(playlists);
    const indiceAleatorio = Math.floor(Math.random() * musicas.length);
    setRandomMusic([musicas[indiceAleatorio]]);
  }, []);


  return (
    <div className="sm:hidden flex flex-col gap-2 mt-4 p-2 ">
      {randomMusic.map((data, i) => (
        <Fragment key={i}>
          <header className="flex gap-2 items-center">
            <img
              src={data.artista[0].foto}
              className="size-12   rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm -mb-1">Recomendação do dia</span>
              <Link
                to={urlFormater(data.artista[0].name)}
                className="hover:underline"
              >
                <TitleSpt title={data.artista[0].name} />
              </Link>

            </div>
          </header>
          <div className="w-full rounded-[6px] flex bg-[#202020]">

            <img src={data.capa} className=" size-36 rounded-l-[6px]" />
            <div className="p-3 pt-2 relative flex flex-col  w-full overflow-hidden">
              <div className="flex flex-col gap-1 ">
                <div className="text-zinc-50  overflow-hidden  flex-col">
                  <Link to={urlFormater(data.album)}>
                    <h1 className="text-lg line-clamp-1"> {data.name}  </h1>
                  </Link>

                  <span className="text-sm text-[#b7b7b7] line-clamp-1">{data.album}</span>
                </div>
                <div className="flex items-center gap-1 text-sm ">
                  <span>
                    {data.album === data.name ? 'Single' : 'Album'}
                  </span>
                  <i className="text-[10px]">•</i>
                  <span className="line-clamp-1">

                    {data.artista[0].name}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-3 p-3 -m-3  w-full">
                <div className="flex w-full items-center justify-between">
                  <BsPlusCircle color="#FFF" size={28} />
                  <div className="size-10 rounded-full bg-spotgreen flex justify-center items-center" onClick={(() => {
                    setMusicPlaying([data])
                  })}>
                    <FaPlay color="#000" />
                  </div>
                </div>

              </div>


            </div>
          </div>
        </Fragment>
      ))}







    </div>

  )
}