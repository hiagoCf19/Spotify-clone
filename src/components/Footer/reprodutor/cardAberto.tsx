
import { playlists } from "@/mocks/playlists-albuns"
import { Heart, MonitorSpeaker, MoreVertical, Share2, ShuffleIcon } from "lucide-react"
import { FiMinusCircle } from "react-icons/fi";
import { Slider } from "@/components/ui/slider"
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import styled from "styled-components";
const Gradient = styled.div<{ color: string }>`

    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});

`;

export const CardAberto = () => {
  const bg = playlists[0].cards[0].musicas[0].MusicColor
  const [isLiked, setIsLiked] = useState(false)
  const [pause, setPause] = useState(true)
  const [follow, setFollow] = useState(false)
  return (


    <div className={`text-zinc-50  bg-[rgb(18,18,18)]`} >
      <Gradient color={bg ?? ''} className='p-6'>
        <header className="flex justify-between items-center mt-10">
          <div className="w-px" />
          <h1 className="uppercase  text-sm  ml-5">RECOMENDAÇÕES  PARA VOCÊ </h1>
          <MoreVertical />
        </header>
        <div className="mt-10 flex flex-col gap-8 relative">
          <img src={playlists[0].cards[0].musicas[0].capa} className="w-full rounded-[12px]" />
          <div className="flex flex-col gap-10">
            <div className=" flex justify-between items-center">
              {/* music info */}
              <div className="flex flex-col">
                <h1 className="text-xl text-zinc-50 font-bold">{playlists[0].cards[0].musicas[0].name}</h1>
                <span className="text-sm text-[#b7b7b7]">{playlists[0].cards[0].musicas[0].artista[0].name}</span>
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
            {/* slider */}
            <div className="flex flex-col gap-2 ">
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="flex justify-between text-[#b7b7b7]">
                <span>vi</span>
                <span>vf</span>
              </div>

            </div>
            {/* controladores */}
            <div className="flex justify-between items-center">
              <ShuffleIcon color="#b7b7b7" className="size-7" />
              <div className="flex items-center gap-7">
                {/* back music svg */}
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7 text-white" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
                {/* pause svg */}
                <div
                  className="bg-white p-5 rounded-full"
                  onClick={() => pause ? setPause(false) : setPause(true)}>
                  {
                    pause ?
                      <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-6"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                      : <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-6"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                  }
                </div>
                {/* next music icon */}
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
              </div>


              {/* rotate icon */}
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7 text-[#b7b7b7]" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
            </div>
            {/*  icons de compartilhamento */}
            <div className="flex justify-between">
              <MonitorSpeaker size={28} />
              <span className="flex items-center gap-6">
                <Share2 className="size-5" />
                {/* fila svg  */}
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-[#b7b7b7]" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>
              </span>
            </div>

          </div>

        </div>
      </Gradient>
      {/*  Sobre o artista */}
      <div className="w-full ">
        <div className="p-6 relative">
          <img src={playlists[0].cards[0].musicas[0].artista[0].foto} className="w-full  rounded-t-[12px] h-[300px] brightness-50" />
          <h2 className="absolute top-0 p-4 pt-10 text-zinc-50">Sobre o artista</h2>
          <div className="flex bg-[#202020] rounded-b-[12px] justify-between items-center p-3">
            <div className="flex flex-col gap-2 ">
              <h2>{playlists[0].cards[0].musicas[0].artista[0].name}</h2>
              <span> xx ouvintes mensais</span>
            </div>
            <button
              onClick={() => !follow ? setFollow(true) : setFollow(false)}
              className="border p-2 rounded-[14px] h-min text-xs text-zinc-50 hover:scale-105 cursor-pointer"
            >
              {!follow ? <p>Seguir</p> : <p>Seguindo</p>}

            </button>

          </div>
        </div>

      </div >
    </div >



  )
}