import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Camera, CircleUser } from "lucide-react"

export const HeaderSearchMobile = () => {
  return (
    <div className="sm:hidden pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10  rounded-full flex justify-center items-center bg-[#272727]">
            <Avatar >
              <AvatarImage src="" />
              <AvatarFallback>
                <CircleUser size={25} color="#FFF" />
              </AvatarFallback>
            </Avatar>
          </div>
          <h3 className="text-2xl font-bold text-zinc-50">Search</h3>
        </div>
        <Camera size={25} color="#FFF" className="mr-2" />
      </div>


    </div>
  )

}