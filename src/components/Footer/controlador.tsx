import { ShuffleIcon } from "lucide-react"
import { useState } from "react"
import { musics } from "@/mocks/playlists-albuns"
import styled from "styled-components"

interface propsControlBar {
  time: musics
}

export const InputRange = styled.label`

  /* slider */
  --slider-width: 100%;
  --slider-height: 6px;
  --slider-bg: rgb(82, 82, 82);
  --slider-border-radius: 999px;
  /* level */
  --level-color: #FFF;
  --level-transition-duration: .1s;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;



.level {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: var(--slider-bg);
  overflow: hidden;
  border-radius: var(--slider-border-radius);
  -webkit-transition: height var(--level-transition-duration);
  -o-transition: height var(--level-transition-duration);
  transition: height var(--level-transition-duration);
  cursor: inherit;
}

.level::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0;
  height: 0;
  -webkit-box-shadow: -200px 0 0 200px var(--level-color);
  box-shadow: -200px 0 0 200px var(--level-color);
}


`
export const ControlBar = ({ time }: propsControlBar) => {
  const [pausado, setPausado] = useState(true)
  const [tempoAtual, setTempoAtual] = useState(0);

  function formatarTempoAtual(tempoAtual: number) {
    const minutos = Math.floor(tempoAtual / 60);
    const segundos = tempoAtual % 60;
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos;

    return `${minutos}:${segundosFormatados}`;
  }


  !pausado ?
    setTimeout(() => {
      if (tempoAtual < time.durationInSecounts) {
        setTempoAtual(tempoAtual + 1);
      }
      else {
        clearInterval
      }
    }, 1000)
    : null


  return (
    <div className="flex flex-col sm:flex-col-reverse sm:gap-2">
      <div className="flex flex-col sm:flex-row gap-2 bg-spo ">
        <span className="hidden sm:block">vi</span>
        <InputRange className="slider">
          <input type="range" max={time.durationInSecounts} value={tempoAtual} className="level" readOnly />
        </InputRange>


        <span className="hidden sm:block">vf</span>

        <div className="flex justify-between text-[#b7b7b7] text-sm sm:hidden">
          <span>{formatarTempoAtual(tempoAtual)}</span>
          <span>{formatarTempoAtual(time.durationInSecounts)}</span>
        </div>

      </div>

      <div className="flex justify-between sm:justify-center sm:gap-5 items-center">
        <ShuffleIcon color="#b7b7b7" className="size-7 sm:size-4" />
        <div className="flex items-center gap-7 sm:gap-5">
          {/* back music svg */}
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7 sm:size-4 text-white" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
          {/* pausado svg */}
          <div
            className="bg-white p-5 sm:p-2 rounded-full"
            onClick={() => {
              if (pausado) {

                setPausado(false);
              } else {

                setPausado(true);
              }
            }}
          >
            {
              pausado ?
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-6 sm:size-4"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                :
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-6 sm:size-4"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
            }
          </div>
          {/* next music icon */}
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7 sm:size-4" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
        </div>
        {/* rotate icon */}
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-7 sm:size-4 text-[#b7b7b7]" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
      </div>
    </div>

  )
}