import { ArrowDownCircle, Bell, ChevronLeft, ChevronRight, CircleUser } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tiip } from "@/components/ui/tolltiResume"


export const HeaderMain = () => {

  return (
    <header className="hidden sm:block ">

      <div className="flex items-center justify-between">
        <div className="flex gap-2 ">
          <div className={`rounded-full w-9 h-9 flex justify-center p-1 cursor-pointer ${window.location.pathname === '/' ? 'glassCircle pointer-events-none ' : 'glassCircleStrong'}`}
            onClick={() => window.history.back()}>
            <Tiip exibition={<ChevronLeft />} hover="b" />
          </div>
          <div
            className={`rounded-full w-9 h-9 flex justify-center items-center p-1 cursor-pointer ${window.location.pathname !== '/' ? 'glassCircle pointer-events-none' : 'glassCircleStrong'}`}
            onClick={() => window.history.forward()}>
            <Tiip exibition={<ChevronRight />} hover="b" />
          </div>
        </div>
        <div className="flex gap-2">
          <a href="" className="glassCircleStrong rounded-full px-2 font-semibold text-[13px] flex items-center gap-2">
            <ArrowDownCircle size={19} />
            instalar aplicativo
          </a>
          <button className="glassCircleStrong rounded-full w-9 h-9 font-semibold text-sm flex justify-center items-center">
            <Tiip exibition={<Bell size={18} />} hover="Novidades" />
          </button>
          <Tiip exibition={
            <Avatar className="glassCircleStrong" >
              <AvatarImage src="" />
              <AvatarFallback>
                <CircleUser size={20} />
              </AvatarFallback>
            </Avatar>
          }
            hover="user@user.com" />
        </div>
      </div>
    </header>

  )
}