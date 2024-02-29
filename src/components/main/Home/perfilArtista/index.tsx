import { artista, musics, playlists } from "@/mocks/playlists-albuns"
import { HeaderMain } from "../HeaderMain"
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import { CardMusic } from "../../OnOpenAlbum/PlaylistAreaOpen/cardMusic";
import { IoMdHeart, IoMdPlay } from "react-icons/io";
import { TitleSpt } from "@/components/Recorrentes/Title";
import { useEffect, useState } from "react";
import { Discografia } from "./discografia";
import { GenericSectionsInPerfil } from "./genericSections";
import { ChevronRight, MoreVertical, Shuffle } from "lucide-react";


interface PropsPerfil {
  artist: artista[]

}


const Gradient = styled.div`
border-radius: 6px;
  width: 100%;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 45%, ${(props) => props.color});
  background: -webkit-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 45%, ${(props) => props.color});
  background: linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 45%, ${(props) => props.color});

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


  const desktopScreen = larguraDaTela >= 640 ? true : false

  return (

    <section className="flex flex-col gap-3 w-full  h-[88vh] ">

      <div className="flex-1  min-h-[40vh] sm:h-40   gap-1 flex flex-col bg-[#121212]    relative rounded-[6px] overflow-y-scroll overflow-x-hidden " >
        <div className="p-4 z-50 fixed w-full">
          <HeaderMain />
        </div>
        {/* BACKGROUND */}
        <div className=" w-full relative ">
          <div
            className={` bg-config brightness-75 rounded-t-[6px]`}
            style={{ backgroundImage: `url(${artist[0].bannerID})` }}
          />
          <div className=" z-30 sm:px-4 sm:-mt-36 -mt-24 absolute ">
            <div className="text-zinc-50 flex flex-col ">
              <div className="hidden sm:block">
                <span className="flex items-center gap-2 text-sm ">
                  <MdVerified color="#1DA1F2"
                    size={20} />
                  Artista verificado
                </span>
              </div>

              <h1 className={`sm:text-[5rem] px-3 ${artist[0].name.length >= 12 ? 'text-[3em]' : 'text-[4rem]'} font-extrabold leading-none tracking-tight `}>
                {artist[0].name}

              </h1>
            </div>
          </div>
        </div>

        <Gradient className="-mt-4" color={musicas[0].artista[0].color ?? ''}>
          <div className="min-h-8 hidden sm:block" />
          {desktopScreen ?
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
            :
            <div>
              <p className="sm:hidden  mt-8 text-base text-zinc-50 px-3"> 910,2 mil ouvintes mensais</p>
              <div className="mt-4 mx-3 flex items-center gap-5 justify-between">

                <div className="flex gap-4 items-center">

                  <button
                    onClick={() => !follow ? setFollow(true) : setFollow(false)}
                    className="border p-1 rounded px-2 text-sm text-zinc-50 hover:scale-105 cursor-pointer"
                  >
                    {!follow ? <p>Seguir</p> : <p>Seguindo</p>}
                  </button>
                  <MoreVertical />
                </div>
                <div className="flex items-center gap-5">
                  <Shuffle />
                  <div className="bg-spotgreen p-4 rounded-full shadow-black shadow-md flex items-center justify-center">
                    <IoMdPlay color="#000" size={20} />
                  </div>
                </div>
              </div>
            </div>}

          {desktopScreen ? null
            :
            <div className="my-4 flex justify-between items-center">
              <div className="relative flex gap-3  px-3">
                <div className="size-14 rounded-full relative ">
                  <img src={artist[0].foto} className="rounded-full" />
                  <IoMdHeart
                    color="#1DB954"
                    size={20}
                    className="absolute bottom-0 right-0"

                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-zinc-50">Musicas Curtidas</p>
                  <span className="text-sm">X musicas <i className="text-[10px]">•</i> {artist[0].name} </span>
                </div>


              </div>
              <ChevronRight size={28} className="mx-3" />
            </div>
          }
          <div className=" -z-1 w-full sm:p-4 sm:m-2 p-3 " >
            <TitleSpt title="Populares" />
            <div className="sm:p-4 flex sm:block flex-col gap-3 py-3">
              {musicas.slice(0, 5).map((musica, i) => (
                <CardMusic
                  hiddenTopics={false}
                  props={musica}
                  key={i}
                  i={i + 1}
                />
              ))}
            </div>

          </div>

        </Gradient >

        <div className="-z-1 w-full sm:p-4 sm:m-2 flex flex-col sm:gap-10 gap-4 p-3">
          <GenericSectionsInPerfil
            apareceEm={false}
            title={`Os Fãs também curtem`}
            artist={artist[0]}
            desktopScreen={desktopScreen}
          />
          <Discografia
            musicas={musicas}
            desktopScreen={desktopScreen}
          />
          <GenericSectionsInPerfil
            desktopScreen={desktopScreen}
            title={`Aparece em`}
            artist={artist[0]}
            apareceEm
          />
          <div className="  w-full" />
        </div>

      </div >


    </section >


  )
}