import { likeds } from "@/mocks/Likeds"
import { ArrowDownCircle, Shuffle } from "lucide-react"
import { IoMdPlay } from "react-icons/io";
import { ListCpn } from "./list";
import { HeaderMain } from "../../Home/HeaderMain";
import { List } from "lucide-react";
//import { MdPause } from "react-icons/md";




export const Curtidos = () => {
  return (
    <div className="flex-1 rounded-[6px] h-[88vh]  overflow-y-scroll gap-1 flex flex-col bg-[#272727] ">
      <div className="backgroundGradientMobile sm:backgroundGradientDesktop w-full sm:p-4 sm:px-6 px-3">
        <div className="flex flex-col gap-6">
          <HeaderMain />
          <div className="hidden sm:block">
            <div className="flex items-end gap-5 text-zinc-50">
              <img src={likeds[0].image} alt="" className="rounded w-[232px]" />
              <div>
                <span className="font-medium text-sm">Playlist</span>
                <p className="text-[6rem] font-bold text-zinc-50">Musicas curtidas</p>
                <span className="font-medium text-sm">
                  <strong className="font-bold">
                    User@user.com
                  </strong>  • {likeds[0].musicsQnt}</span>
              </div>

            </div>

          </div>
        </div>
        <div className="pt-10 sm:hidden">
          <h1 className="text-2xl font-semibold text-zinc-50">
            {likeds[0].name}
          </h1>
          <span className="text-sm">{likeds[0].musicsQnt}</span>
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
          <div className="border-b border-solid border-[#a7a7a759] px-2">
            <div className="py-2 flex justify-between">
              <p>titulo</p>
              <p>album</p>
              <p>adicionada em</p>
              <p>  </p>
            </div>
          </div>

        </div>
        <ListCpn />
      </div>

    </div>
  )
}