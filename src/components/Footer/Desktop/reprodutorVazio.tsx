import { Slider } from "@/components/ui/slider"
import { Maximize2, Mic2, MonitorSpeaker, PlaySquare } from "lucide-react"
import { CgMiniPlayer } from "react-icons/cg"
import { ControlBar } from "../controlador"

interface propsReprodutorVazio {
  tempoAtual: number
  pausado: boolean
  setPausado: React.Dispatch<React.SetStateAction<boolean>>

}
export const ReprodutorVazio = ({ tempoAtual, pausado, setPausado }: propsReprodutorVazio) => {
  return (
    <section className="flex justify-between  h-min items-center px-2  ">
      <div className="flex-1" />
      <div className="flex-1 w-full">
        <ControlBar tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />
      </div>
      <div className="flex-1 justify-end items-center flex gap-3">
        <PlaySquare size={17} className="hover:text-zinc-50 cursor-pointer" />
        <Mic2 size={17} className="hover:text-zinc-50 cursor-pointer" />
        {/* fila */}
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="size-4 hover:text-zinc-50 cursor-pointer text-[#b7b7b7]" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>
        <MonitorSpeaker size={20} className="hover:text-zinc-50 cursor-pointer" />
        <div className="w-[15%] flex gap-1 cursor-pointer hover:text-spotgreen">
          <svg data-encore-id="icon" role="presentation" aria-label="Volume alto" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" className=" size-5" fill="currentColor"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <CgMiniPlayer size={17} className="hover:text-zinc-50 cursor-pointer" />
        <Maximize2 size={14} className={"hover:text-zinc-50 cursor-pointer"} />
      </div>
    </section>
  )
}