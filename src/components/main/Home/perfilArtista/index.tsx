import { artista, musics, playlists } from "@/mocks/playlists-albuns"
import { HeaderMain } from "../HeaderMain"
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import { CardMusic } from "../../OnOpenAlbum/PlaylistAreaOpen/cardMusic";
import { IoMdPlay } from "react-icons/io";
import { TitleSpt } from "@/components/Recorrentes/Title";
import { useState } from "react";
import { Discografia } from "./discografia";
import { GenericSectionsInPerfil } from "./genericSections";



interface PropsPerfil {
  artist: artista[]

}


const Gradient = styled.div`
border-radius: 6px;
  width: 100%;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});
  background: -webkit-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});
  background: linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});

  @media (min-width: 640px) {
    
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 10%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 10%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 10%, ${(props) => props.color});
  }
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PerfilArtista = ({ artist }: PropsPerfil) => {

  function extrairMusicasPorArtista(artistName: string): musics[] {
    const musicasNomeUnico: Set<string> = new Set();
    const musicasEncontradas: musics[] = [];

    playlists.forEach((playlist) => {
      playlist.cards.forEach((card) => {
        card.musicas.forEach((musica) => {
          if (musica.artista.some((artista) => artista.name === artistName)) {
            if (!musicasNomeUnico.has(musica.name)) {
              musicasNomeUnico.add(musica.name);
              musicasEncontradas.push(musica);
            }
          }
        });
      });
    });

    return musicasEncontradas;
  }
  const musicas = extrairMusicasPorArtista(artist[0].name)
  const [follow, setFollow] = useState(false)




  return (

    <section className="flex flex-col gap-3 w-full  h-[88vh] ">

      <div className="flex-1  min-h-[40vh] sm:h-40   gap-1 flex flex-col bg-[#121212]   relative rounded-[6px] overflow-y-scroll overflow-x-hidden " >
        <div className="p-4 z-50 fixed w-full">
          <HeaderMain />
        </div>
        {/* BACKGROUND */}
        <div className=" w-full relative   ">
          <div
            className={` bg-config brightness-75 rounded-t-[6px]`}
            style={{ backgroundImage: `url(${artist[0].bannerID})` }}
          />
          <div className=" z-30 px-4 -mt-36 absolute ">
            <div className="text-zinc-50 flex flex-col ">
              <span className="flex items-center gap-2 text-sm">
                <MdVerified color="#1DA1F2"
                  size={20} />
                Artista verificado
              </span>
              <h1 className="text-[5rem] font-extrabold leading-none tracking-tight">
                {artist[0].name}
              </h1>
              <span className="text-[15px] mt-2"> 26.247.207 ouvintes mensais</span>
            </div>
          </div>
        </div>

        <Gradient className="-mt-4" color={musicas[0].artista[0].color ?? ''}>
          <div className="min-h-8" />
          <div className=" mx-6 flex items-center gap-6">
            <div className="bg-spotgreen p-4 rounded-full shadow-black shadow-md flex items-center justify-center">
              <IoMdPlay color="#000" size={20} />
            </div>
            <button
              onClick={() => !follow ? setFollow(true) : setFollow(false)}
              className="border p-1 rounded-full px-2 text-xs text-zinc-50 hover:scale-105 cursor-pointer"
            >
              {!follow ? <p>Seguir</p> : <p>Seguindo</p>}

            </button>
            <div className="flex justify-center gap-1 hover:text-zinc-50 cursor-pointer  hover:scale-105">
              <i className="text-[10px]">•</i>
              <i className="text-[10px]">•</i>
              <i className="text-[10px]">•</i>
            </div>
          </div>
          <div className=" -z-1 w-full p-4 m-2 " >
            <TitleSpt title="Populares" />
            <div className="p-4">
              {musicas.slice(0, 5).map((musica, i) => (
                <CardMusic hiddenTopics={false} props={musica} key={i} i={i + 1} />
              ))}
            </div>

          </div>

        </Gradient>

        <div className="-z-1 w-full p-4 m-2 flex flex-col gap-10">
          <GenericSectionsInPerfil apareceEm={false} title={`Os Fãs também curtem`} artist={artist[0]} />
          <Discografia musicas={musicas} />
          <GenericSectionsInPerfil title={`Aparece em`} artist={artist[0]} apareceEm />

        </div>

      </div>

    </section>


  )
}