import { MoreVertical, Music } from "lucide-react"
import {
  Drawer,

  DrawerContent,

  DrawerHeader,

  DrawerTrigger,
} from "@/components/ui/drawer"
import { propsMsc } from "@/components/main/cardMusic"



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
                <div className=" overflow-hidden text-nowrap overflow-ellipsis   text-sm ">
                  {music.name}

                </div>
                <div>
                  {music.artista}
                </div>


              </div>
            </div>


          </div>
          <div className=" bg-[#a7a7a7a1] w-full h-[1px]"></div>
          <div>
            a
          </div>
        </DrawerContent>
      </Drawer>

    </div>
  )
}