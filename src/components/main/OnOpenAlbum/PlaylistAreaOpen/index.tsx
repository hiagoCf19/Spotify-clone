
import { ArrowDownCircle, Clock, Shuffle } from "lucide-react"
import { IoMdPlay } from "react-icons/io";
import { HeaderMain } from "../../Home/HeaderMain";
import { List } from "lucide-react";
import { Pl, cards } from "@/mocks/playlists-albuns";
//import { MdPause } from "react-icons/md";
import { styled } from 'styled-components'
import { CardMusic } from "./cardMusic";
import React from "react";
import { FaSpotify } from "react-icons/fa6";


interface propsAlbum {
  album: cards
  pl?: Pl
}
export const OpenAlbumOrPlaylist = ({ album, pl }: propsAlbum) => {

  const Gradient = styled.div`
  
  width: 100%;
  padding: 0 12px;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(357deg,
     rgba(18,18,18,0.9556197478991597) 76%,
      ${album.color});
  background: -webkit-linear-gradient(357deg,
     rgba(18,18,18,0.9556197478991597) 76%,
      ${album.color});
  background: linear-gradient(357deg,
     rgba(18,18,18,0.9556197478991597) 76%,
      ${album.color});


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
          <div className="sm:flex items-end gap-5 text-zinc-50">
            <div className="flex w-full justify-center py-4 sm:justify-normal sm:py-0 sm:w-auto ">
              <img src={album.image} className="sm:rounded sm:w-[232px] w-[60%] flex" />
            </div>

            <div className="flex gap-3 sm:gap-0  flex-col">
              <span className="text-[#b7b7b7] text-sm sm:hidden font-medium ">
                {album.description}
              </span>
              <span className="font-medium text-sm hidden sm:block sm:-mb-6">{pl?.classe}</span>
              <p className="text-[6rem] font-bold text-zinc-50 hidden sm:block sm:-mb-4">
                {album.title}
              </p>
              <div className="font-medium text-sm flex flex-col sm:flex-row gap-2">
                <span className="flex gap-2">
                  <FaSpotify color="#1DB954" size={20} /> Feito para
                  <strong className="font-bold flex  gap-2">
                    User@user.com
                    <i className="hidden sm:block">•</i>
                  </strong>
                </span>
                <span >

                  {`${album.musicas.length} músicas`}
                </span>




              </div>
            </div>
          </div>

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
            {album.musicas.map((card, i) => (
              <React.Fragment key={card.name}>


                <CardMusic props={card} i={i + 1} />

              </React.Fragment>

            ))}

          </div>


        </div>


      </Gradient>

    </div>
  )
}