import { ArrowDownCircle, Bell, ChevronLeft, ChevronRight, CircleUser, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tiip } from "@/components/ui/tolltiResume"
import { ChangeEvent } from "react";
interface propsHeaderMain {
  search?: boolean
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const HeaderMain = ({ search, handleSearch }: propsHeaderMain) => {
  return (
    <header className="hidden sm:block z-10 ">

      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center  w-[35%]  ">
          <div className={`rounded-full w-9 h-9 flex justify-center p-1 cursor-pointer ${window.location.pathname === '/' ? 'glassCircle pointer-events-none ' : 'glassCircleStrong'}`}
            onClick={() => window.history.back()}>
            <Tiip exibition={<ChevronLeft />} hover="Voltar" />
          </div>
          <div
            className={`rounded-full w-9 h-9 flex justify-center items-center p-1 cursor-pointer ${window.location.pathname !== '/' ? 'glassCircle pointer-events-none' : 'glassCircleStrong'}`}
            onClick={() => window.history.forward()}>
            <Tiip exibition={<ChevronRight />} hover="Avançar" />
          </div>
          {search ?
            <div className="  flex justify-center items-center focus-visible:border-zinc-50  w-full rounded-full border py-3 px-2 border-[#242424]   bg-[#242424] shadow hover:border hover:border-zinc-600 hover:text-white
            "

            >
              <Search />
              <input type="text" className=" rounded-full  bg-[#242424]  w-[90%] outline-none px-2
          "
                onChange={handleSearch}
                autoFocus
              >
              </input>

            </div> :
            ''
          }
        </div>
        <div className="flex gap-2">
          <a href="" className="glassCircleStrong rounded-full px-2 font-semibold text-[13px] flex items-center gap-2">
            <ArrowDownCircle size={19} />
            instalar aplicativo
          </a>
          <div className="glassCircleStrong rounded-full w-9 h-9 font-semibold text-sm flex justify-center items-center">
            <Tiip exibition={<Bell size={18} />} hover="Novidades" />
          </div>
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