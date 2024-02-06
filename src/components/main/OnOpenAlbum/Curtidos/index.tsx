
import { ArrowDownCircle, Clock, Music, Shuffle } from "lucide-react"
import { IoMdPlay } from "react-icons/io";
import { ListCpn } from "./list";
import { HeaderMain } from "../../Home/HeaderMain";
import { List } from "lucide-react";
import { Pl } from "@/mocks/playlists-albuns";
//import { MdPause } from "react-icons/md";


interface propsAlbum {
  album: Pl
}
export const OpenAlbumOrPlaylist = ({ album }: propsAlbum) => {
  return (
    <div className="flex-1 rounded-[6px] h-[88vh]  overflow-y-scroll gap-1 flex flex-col bg-[#272727] ">
      <div className="backgroundGradientMobile sm:backgroundGradientDesktop w-full sm:p-4 sm:px-6 px-3">
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
                  </strong>  • {album.musics?.length} músicas
                </span>
              </div>

            </div>

          </div>
        </div>
        <div className="pt-10 sm:hidden">
          <h1 className="text-2xl font-bold text-zinc-50">
            {album.name}
          </h1>
          <span className="text-[13px] font-medium">{album.musics?.length} músicas</span>
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

            <span className="w-[20%]  flex jus pl-5 gap-3">
              <i>#</i>Titulo</span>
            <p className="w-[20%]  flex ">Álbum</p>
            <p className="w-[20%]  flex jus mr-[3%]">Adicionado em</p>
            <Clock size={18} className="mr-[3%]" />


          </div>

        </div>
        <ListCpn />
      </div>

    </div>
  )
}