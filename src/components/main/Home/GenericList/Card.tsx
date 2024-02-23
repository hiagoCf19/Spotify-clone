import { cards } from "@/mocks/playlists-albuns"


interface propsCard {
  props: cards
}
export const Card = ({ props }: propsCard) => {
  return (

    <div className=" w-full h-full p-3  rounded-[10px] bg-[#191919] hover:bg-[#171717] flex flex-col overflow-hidden cursor-pointer ">
      <div className="flex items-center justify-center  p-1">
        <img src={props.image} alt="" className="h-auto w-full   rounded " />
      </div>
      <div className="flex flex-col py-2 px-1">
        <p className="font-bold text-[16px] text-zinc-50 text-ellipsis text-nowrap overflow-clip anti ">{props.title}</p>
        <span className="text-sm line-clamp-2 text-ellipsis overflow-clip font" >{props.description}</span>
      </div>
      <div>

      </div>

    </div>

  )
}