import { MoreVertical, Music } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { BodyDrawerCard } from "./body"
import { musics } from "@/mocks/playlists-albuns"

interface propsMenu {
  music: musics
}

export const MenuMusics = ({ music }: propsMenu) => {

  return (
    <div>
      <Drawer>
        <DrawerTrigger className="" >
          <MoreVertical />
        </DrawerTrigger>
        <DrawerContent className=" bg-[#202020]">
          <DrawerHeader className="flex justify-center">
            <div className="w-8 h-1 bg-[#a7a7a7b0] rounded-full "></div>
          </DrawerHeader>
          <div className="flex items-center justify-between gap-4 pt-0 p-2 pb-4">
            <div className="flex items-center  overflow-hidden gap-3">
              {'capa' in music ? <img src={music.capa} className=" w-14 h-14 rounded" /> :
                <div className="w-[77px] h-14 flex items-center justify-center bg-[#272727] ">
                  <Music />
                </div>
              }
              <div className="flex flex-col  w-[80%] ">
                <div className=" font-medium text-sm text-zinc-50">
                  {music.artista.map((artista) => (
                    <div>
                      <p className="text-zinc-50 text-[18px]">{music.name}</p>
                      <span className="text-sm font-medium text-[#b7b7b7]">{artista.name}</span>
                    </div>
                  ))}

                </div>


              </div>
            </div>


          </div>
          <div className=" bg-[#a7a7a7a1] w-full h-[1px]"></div>
          <BodyDrawerCard />
        </DrawerContent>
      </Drawer>

    </div>
  )
}