import { Heart, MonitorSpeaker } from "lucide-react"
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";

import { musics } from "@/mocks/playlists-albuns";
import { IoPlay } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CardAberto } from "./pageMusicOpen";
import styled from "styled-components";
import { InputRange } from "../controlador";



const Gradient = styled.div<{ color: string }>`

    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});

 @media (min-width: 640px) {
    padding: 1rem 1.5rem;
    background: rgb(18, 18, 18);
    
  }
  
`;
interface propsMobileReprodutor {
  playing: musics
  tempoAtual: number
  pausado: boolean
  setPausado: React.Dispatch<React.SetStateAction<boolean>>

}
export const MobileReprodutor = ({ playing, tempoAtual, pausado, setPausado, }: propsMobileReprodutor) => {
  // criar contexto para liked
  const [isLiked, setIsLiked] = useState(false)


  return (
    <section className="rounded-[6px] h-16 mx-2 p-2 flex flex-col  justify-center relative" style={{ background: playing.MusicColor }}>
      <div className=' flex justify-between relative items-center gap-3' >
        <Sheet>
          <SheetTrigger className=" w-full">
            <div className="flex gap-3 items-center ">
              <img src={playing.capa} className="size-11 rounded" />
              <div className="flex flex-col">
                <h1 className={`text-base ${pausado ? 'text-zinc-50 ' : 'text-spotgreen'} font-bold -mb-px text-left line-clamp-1`}>{playing.name}</h1>
                <span className="text-sm text-start">{playing.artista[0].name}</span>
              </div>
            </div>
          </SheetTrigger>

          <SheetContent side={'bottom'} className=" p-0 ">
            <Gradient color={playing.MusicColor ?? ''} className=' overflow-y-scroll h-screen'>
              <CardAberto playing={playing} tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />
            </Gradient>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-3">
          <MonitorSpeaker size={28} />
          {
            !isLiked ?
              <Heart
                color="#FFF"
                size={25}

                onClick={() => setIsLiked(true)}
              />
              :
              <IoMdHeart
                color="#1DB954"
                size={25}

                onClick={() => setIsLiked(false)}
              />

          }
          <div onClick={() => pausado ? setPausado(false) : setPausado(true)}>
            {
              pausado ?
                <IoPlay size={26} color="#FFF" />
                : <IoPauseSharp size={26} color="#FFF" />
            }

          </div>

        </div>

      </div>
      <div className="absolute bottom-0 -mx-2 -my-[6px] px-2 w-full" >
        <InputRange className="slider w-full">
          <input type="range" max={playing.durationInSecounts} value={tempoAtual} className="level" readOnly />
        </InputRange>
      </div>

    </section>

  )
}