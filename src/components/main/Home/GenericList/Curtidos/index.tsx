import { likeds } from "@/mocks/Likeds"
import { ArrowDownCircle, Shuffle } from "lucide-react"
import { IoMdPlay } from "react-icons/io";
import { List } from "./list";
//import { MdPause } from "react-icons/md";




export const Curtidos = () => {
  return (
    <div className="flex-1 sm:p-4 sm:px-6 px-3 rounded-[6px] h-[88vh]  overflow-y-scroll gap-4 flex flex-col bg-[#121212]">
      <div className="pt-10">
        <h1 className="text-2xl font-semibold text-zinc-50">
          {likeds[0].name}
        </h1>
        <span className="text-sm">{likeds[0].musicsQnt}</span>
      </div>
      <div className="flex items-center justify-between">
        <ArrowDownCircle size={25} />
        <div className="flex items-center gap-5">
          <Shuffle />
          <div className=" flex items-center justify-center rounded-full w-12 h-12 bg-[#1DB954]">
            <IoMdPlay color="#000" size={20} />
          </div>
        </div>

      </div>
      <List />
    </div>
  )
}