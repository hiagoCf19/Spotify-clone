
import { ArrowDownCircle, Clock, Music, Shuffle } from "lucide-react"
import { IoMdPlay } from "react-icons/io";
import { HeaderMain } from "../../Home/HeaderMain";
import { List } from "lucide-react";
import { Pl } from "@/mocks/playlists-albuns";
//import { MdPause } from "react-icons/md";
import { styled } from 'styled-components'
import { CardMusic } from "./cardMusic";
import React from "react";


interface propsAlbum {
  album: Pl
}
export const OpenAlbumOrPlaylist = ({ album }: propsAlbum) => {

  const Gradient = styled.div`
  
  width: 100%;
  padding: 0 12px;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 87%,
    ${album.color}
    
  );
  background: -webkit-linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 87%,
    ${album.color}
  );
  background: linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 87%,
    ${album.color}
  );
  @media (min-width: 640px) {
    padding: 1rem 1.5rem;

    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 59%,
      ${album.color}
    );
    background: -webkit-linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 59%,
      ${album.color}
    );
    background: linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 59%,
      ${album.color}
    );
  }

  `
  return (
    <div className="flex-1 sm:rounded-[6px] h-[88vh]  overflow-y-scroll gap-1 flex flex-col bg-[#171717] ">
      <Gradient>
        <div className="flex flex-col gap-6">
          <HeaderMain />
          <div className="hidden sm:block">
            <div className="flex items-end gap-5 text-zinc-50">
              {'image' in album ? <img src={album.image} alt="" className="rounded w-[232px]" /> :
                <div className=" w-[232px] h-[232px] flex items-center justify-center bg-[#272727] ">
                  <Music size={60} />
                </div>
              }
              <div className="flex gap-3 flex-col">
                <span className="font-medium text-sm">{album.classe}</span>
                <p className="text-[6rem] font-bold text-zinc-50">
                  {album.name}
                </p>
                <span className="font-medium text-sm">
                  <strong className="font-bold">
                    User@user.com
                  </strong>  • { }
                  {album.cards.map((card, i) => (
                    <React.Fragment key={i}>
                      {`${card.musicas.length} músicas`}
                    </React.Fragment>

                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:hidden">
          <h1 className="text-2xl font-bold text-zinc-50">
            {album.name}
          </h1>
          <span className="text-[13px] font-medium">2 músicas</span>
        </div>
        <div className="flex items-center justify-between">
          <ArrowDownCircle size={25} className="sm:hidden" />
          <div className="flex items-center gap-5 sm:pt-10 pb-5 sm:justify-between sm:w-full">
            <Shuffle className="sm:hidden" />
            <div className=" flex items-center justify-center rounded-full w-12 h-12 bg-[#1DB954] mr-[-20px] ">
              <IoMdPlay color="#000" size={20} />
              <div className="hidden sm:block">
              </div>
            </div>
            <a className="flex items-center gap-3 hover:text-slate-50 cursor-pointer">
              <span className="font-semibold text-sm hidden sm:block">Lista</span>
              <List className="hidden sm:block" />
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center justify-between  border-b border-solid border-[#a7a7a74e] pb-2 text-sm font-medium">
            <span className="w-[20%]  flex pl-5 gap-3">
              <i>#</i>Titulo</span>
            <p className="w-[20%]  flex ">Álbum</p>
            <p className="w-[20%]  flex mr-[3%]">Adicionado em</p>
            <Clock size={18} className="mr-[3%]" />
          </div>
        </div>
        <div className="min-h-[500px]">

          <div className=" my-2  overflow-y-scroll sm:overflow-hidden mr-[-10px] flex flex-col gap-2 sm:px-3 ">
            {album.cards.map((card) => (
              <React.Fragment key={card.title}>
                {
                  card.musicas.map((musica, i) => (
                    <CardMusic props={musica} i={i + 1} />
                  ))}
              </React.Fragment>

            ))}

          </div>


        </div>


      </Gradient>

    </div>
  )
}