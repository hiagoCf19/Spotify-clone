import { ArrowRight, LibraryIcon, Plus } from "lucide-react";
export const HeaderBottomAside = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <a className="flex items-center gap-3 hover:text-slate-50">
        <LibraryIcon />
        <span className="font-semibold">Sua Bibliotéca</span>
      </a>
      <div className="flex gap-2">
        <a href="">
          <Plus size={20} />
        </a>

        <a href="">
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  )
}