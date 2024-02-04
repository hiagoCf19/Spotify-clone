import { MoreVertical, Music } from "lucide-react"
import {
  Drawer,

  DrawerContent,

  DrawerHeader,

  DrawerTrigger,
} from "@/components/ui/drawer"

import { BodyDrawerCard } from "./body"
import { propsMsc } from "../cardMusic"



export const MenuMusics = ({ music }: propsMsc) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger >
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
              <div className="flex flex-col border  w-[80%] ">
                <div className=" font-medium text-sm text-zinc-50">
                  {music.name}

                </div>
                <span className="text-[12px] font-medium">
                  {music.artista}
                </span>
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