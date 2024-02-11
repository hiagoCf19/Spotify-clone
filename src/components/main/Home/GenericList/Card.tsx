import { cards } from "@/mocks/playlists-albuns"


interface propsCard {
  props: cards
}
export const Card = ({ props }: propsCard) => {
  return (

    <div className="h-[282px] w-[199px] p-3 rounded-[10px] bg-[#191919] hover:bg-[#171717] flex flex-col overflow-hidden cursor-pointer ">
      <div className="flex items-center justify-center">
        <img src={props.image} alt="" className="w-full h-[168px] mb-2 rounded" />
      </div>
      <div className="flex flex-col py-2">
        <p className="font-bold text-[16px] text-zinc-50 text-ellipsis text-nowrap overflow-clip  ">{props.title}</p>
        <span className="text-[13px] line-clamp-2 text-ellipsis font-medium overflow-clip">{props.description}</span>
      </div>

    </div>

  )
}