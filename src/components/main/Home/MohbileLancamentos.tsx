import { TitleSpt } from "@/components/Recorrentes/Title"
import { musics, playlists } from "@/mocks/playlists-albuns"
import { extrairMusicas } from "@/scripts/desestruturacao";
import { urlFormater } from "@/scripts/normalize";
import { Fragment } from "react";


import { BsPlusCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6"
import { Link } from "react-router-dom";

export const MobileLancamentos = () => {

  const musicas = extrairMusicas(playlists)
  const escolherMusicaAleatoria = (musicas: musics[]) => {

    const indiceAleatorio = Math.floor(Math.random() * musicas.length)
    return [musicas[indiceAleatorio]];
  };



  return (
    <div className="sm:hidden flex flex-col gap-4 mt-4 ">
      {escolherMusicaAleatoria(musicas).map((data) => (
        <Fragment>
          <header className="flex gap-3 items-center">
            <img
              src={data.artista[0].foto}
              className="size-14 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm">A recomendação do dia é</span>
              <Link
                to={urlFormater(data.artista[0].name)}
                className="hover:underline"
              >
                <TitleSpt title={data.artista[0].name} />
              </Link>

            </div>
          </header>
          <Link to={urlFormater(data.album)} className="w-full rounded flex bg-[#202020]">

            <img src={data.capa} className=" size-40 rounded-l" />
            <div className="p-3 relative flex flex-col  w-full overflow-hidden">
              <div className="flex flex-col gap-3 ">
                <div className="text-zinc-50  overflow-hidden  flex-col">
                  <h1 className="text-lg line-clamp-1"> {data.name}  </h1>
                  <span className="text-sm text-[#b7b7b7]">{data.album}</span>
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
                  <div className="size-10 rounded-full bg-zinc-50 flex justify-center items-center">
                    <FaPlay color="#000" />
                  </div>
                </div>

              </div>


            </div>
          </Link>
        </Fragment>
      ))}







    </div>

  )
}