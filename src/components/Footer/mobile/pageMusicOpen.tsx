
import { musics } from "@/mocks/playlists-albuns"
import { Heart, MonitorSpeaker, MoreVertical, Share2 } from "lucide-react"
import { FiMinusCircle } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import styled from "styled-components";
import { SobreOArtista } from "./sobreArtista";
import { Creditos } from "./creditos";
import { ControlBar } from "../controlador";
const Gradient = styled.div<{ color: string }>`

    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});

`;
interface propsCardAberto {
  playing: musics
  tempoAtual: number
  pausado: boolean
  setPausado: React.Dispatch<React.SetStateAction<boolean>>

}
export const CardAberto = ({ playing, tempoAtual, pausado, setPausado, }: propsCardAberto) => {

  const [isLiked, setIsLiked] = useState(false)

  return (


    <div className={`text-zinc-50  bg-[rgb(18,18,18)]`} >
      <Gradient color={playing.MusicColor ?? ''} className='p-6'>
        <header className="flex justify-between items-center mt-[15%]">
          <div className="w-px" />
          <h1 className="uppercase  text-sm  ml-5">RECOMENDAÇÕES  PARA VOCÊ </h1>
          <MoreVertical />
        </header>
        <div className="mt-5 flex flex-col gap-6 relative">
          <img src={playing.capa} className="w-full rounded-[12px]" />
          <div className="flex flex-col gap-6">
            <div className=" flex justify-between items-center">
              {/* music info */}
              <div className="flex flex-col">
                <h1 className="text-lg text-zinc-50 font-bold line-clamp-1">{playing.name}</h1>
                <span className="text-sm text-[#b7b7b7] line-clamp-1">{playing.artista[0].name}</span>
              </div>
              {/* icons */}
              <div className="flex items-center gap-5">
                <FiMinusCircle size={32} />
                {
                  isLiked === false ?
                    <Heart
                      color="#FFF"
                      size={32}

                      onClick={() => setIsLiked(true)}
                    />
                    :
                    <IoMdHeart
                      color="#1DB954"
                      size={32}

                      onClick={() => setIsLiked(false)}
                    />

                }

              </div>
            </div>
            <ControlBar playing={playing} tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />
            {/*  icons de compartilhamento */}
            <div className="flex justify-between -mt-2">
              <MonitorSpeaker size={28} color="#a7a7a7" />
              <span className="flex items-center gap-6">
                <Share2 className="size-5" />
                {/* fila svg  */}
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-4 text-[#b7b7b7]" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>
              </span>
            </div>

          </div>
        </div>
      </Gradient>
      <SobreOArtista playing={playing} />
      <Creditos playing={playing} />
    </div >



  )
}