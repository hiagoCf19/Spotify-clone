import { SptBNT } from "@/components/Aside/BottomAside/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaSpotify } from "react-icons/fa";


interface propsHeaderMobile {
  scrollDown: number
  ativo: number
  setAtivo: React.Dispatch<React.SetStateAction<number>>
}

export const HeaderMobile = ({ scrollDown, ativo, setAtivo }: propsHeaderMobile) => {
  const buttons: string[] = ['Tudo', 'Música', 'Podcasts']

  return (
    <div
      className={` sm:hidden fixed w-full h-14 z-50 shadow-lg shadow-black bg-[rgb(16,16,16)] flex items-center gap-4 px-3 ${scrollDown > 120 ? '' : 'hidden'}`}>

      <Avatar className="" >
        <AvatarImage src="" />
        <AvatarFallback>
          <FaSpotify size={30} color="1DB954" />
        </AvatarFallback>
      </Avatar>

      <div className="flex gap-2">
        {buttons.map((content, i) => (
          <SptBNT ativo={ativo} setAtivo={setAtivo} base={content} key={i} i={i} />
        ))}
      </div>


    </div>
  )
}