import { ArrowDownCircle, Bell, ChevronLeft, ChevronRight, CircleUser } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const HeaderMain = () => {
  return (
    <header className="hidden sm:block ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 ">
          <a href="" className="glassCircle rounded-full p-1">
            <ChevronLeft />
          </a>
          <a href="" className="glassCircleStrong rounded-full p-1">
            <ChevronRight />
          </a>
        </div>
        <div className="flex gap-2">
          <a href="" className="glassCircleStrong rounded-full p-1 px-2 font-semibold text-sm flex items-center gap-2">
            <ArrowDownCircle />
            instalar aplicativo
          </a>
          <a href="" className="glassCircleStrong rounded-full p-1 px-2 font-semibold text-sm flex items-center gap-2">
            <Bell size={20} />
          </a>

          <Avatar className="glassCircleStrong" >
            <AvatarImage src="" />
            <AvatarFallback>
              <CircleUser size={25} />
            </AvatarFallback>
          </Avatar>

        </div>
      </div>
    </header>

  )
}