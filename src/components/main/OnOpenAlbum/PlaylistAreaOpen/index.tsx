import styled from 'styled-components';
import { ArrowDownCircle, ArrowLeft, Clock, List, Shuffle } from 'lucide-react';
import { FaSpotify } from 'react-icons/fa';
import { IoMdPlay } from 'react-icons/io';
import { HeaderMain } from '../../Home/HeaderMain';
import { CardMusic } from './cardMusic';

import { musics } from '@/mocks/playlists-albuns';
import React from 'react';


interface PropsAlbum {
  color: string
  image: string
  title: string
  description: string
  classe: string
  musicas: musics[]
}

const Gradient = styled.div<{ color: string }>`
  width: 100%;
  padding: 0 12px;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});
  background: -webkit-linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});
  background: linear-gradient(357deg, rgba(18, 18, 18, 0.9556197478991597) 76%, ${(props) => props.color});

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 59%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 59%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 59%, ${(props) => props.color});
  }
`;

export const OpenAlbumOrPlaylist = ({ color, image, title, description, classe, musicas }: PropsAlbum) => {


  return (
    <div className="flex-1 sm:rounded-[6px] sm:h-[90vh] overflow-y-scroll gap-1 flex flex-col bg-[rgb(20,20,20)] ">
      {/* Utilização do componente estilizado */}
      <Gradient color={color}>
        <div className="fixed py-4 sm:hidden" onClick={() => window.history.back()}>
          <ArrowLeft size={30} color="#a7a7a7" />
        </div>
        <div className="flex flex-col gap-6">
          <HeaderMain />
          <div className="sm:flex items-end gap-5 text-zinc-50">
            <div className="flex w-full justify-center py-4 sm:justify-normal sm:py-0 sm:w-auto ">
              <img src={image} className="sm:rounded sm:w-[232px] w-[60%] flex" />
            </div>
            <div className="flex gap-3 sm:gap-1 flex-col">
              <span className="text-[#b7b7b7] text-sm sm:hidden font-medium">{description}</span>
              <span className="font-medium text-sm hidden sm:block sm:-mb-6">{classe}</span>
              <p className={`${title.length >= 18 ? 'text-[4rem]' : 'text-[6rem]'} font-bold text-zinc-50 hidden sm:block sm:-mb-4`}>{title}</p>
              <div className="font-medium text-sm flex flex-col sm:flex-row gap-2">
                <span className="flex gap-2">
                  <FaSpotify color="#1DB954" size={20} /> Feito para
                  <strong className="font-bold flex gap-2">
                    User@user.com
                    <i className="hidden sm:block text-[10px]">•</i>
                  </strong>
                </span>
                <span>{`${musicas.length} músicas`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ArrowDownCircle size={25} className="sm:hidden" />
          <div className="flex items-center gap-5 sm:pt-10 pb-5 sm:justify-between sm:w-full">
            <Shuffle className="sm:hidden" />
            <div className=" flex items-center justify-center rounded-full w-12 h-12 bg-spotgreen mr-[-20px] ">
              <IoMdPlay color="#000" size={20} />
              <div className="hidden sm:block"></div>
            </div>
            <a className="flex items-center gap-3 hover:text-slate-50 cursor-pointer">
              <span className="font-semibold text-sm hidden sm:block">Lista</span>
              <List className="hidden sm:block" />
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center justify-between border-b border-solid border-[#a7a7a74e] pb-2 text-sm font-medium">
            <span className="w-[20%]  flex pl-3 gap-8">
              <i>#</i>
              Titulo
            </span>
            <p className="w-[20%]  flex ml-[2%]">Álbum</p>
            <p className="w-[20%]  flex mr-[3%]">Adicionado em</p>
            <Clock size={18} className="mr-[4%]" />
          </div>
        </div>
        <div className="min-h-[500px]">
          <div className="my-2  sm:overflow-y-scroll overflow-hidden mr-[-10px] flex flex-col gap-2 sm:px-3  ">
            {musicas.map((card, i) => (
              <React.Fragment key={i}>
                <CardMusic
                  hiddenTopics={false}

                  props={card}
                  i={i + 1}
                  key={i} />
              </React.Fragment>
            ))}

          </div>
        </div>

      </Gradient>

    </div>
  );
};