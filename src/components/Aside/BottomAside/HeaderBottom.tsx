import { Tiip } from "@/components/ui/tolltiResume";
import { ArrowRight, LibraryIcon, Plus } from "lucide-react";
export const HeaderBottomAside = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <a className="flex items-center gap-3 hover:text-slate-50 p-3 pt-0">
        <LibraryIcon size={28} />
        <Tiip exibition={<span className="font-semibold">Sua Bibliotéca </span>} hover="Ocultar sua bibliotéca" />
      </a>
      <div className="flex gap-5">
        <Tiip exibition={<Plus size={20} />} hover="Criar playlist ou pasta" />
        <Tiip exibition={<ArrowRight size={20} />} hover="Mostrar mais" />
      </div>
    </div>
  )
}