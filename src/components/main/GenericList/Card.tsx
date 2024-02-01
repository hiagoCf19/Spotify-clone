

interface CardProps {
  image: string,
  title: string,
  span: string,

}
export const Card = ({ image, title, span }: CardProps) => {
  return (

    <div className="h-[282px] w-[199px] p-3 rounded-[10px] bg-[#191919] hover:bg-[#171717] flex flex-col overflow-hidden cursor-pointer ">
      <img src={image} alt="" className="w-[168px] h-[168px] mb-5 rounded" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[16px] text-zinc-50 text-ellipsis text-nowrap overflow-clip  ">{title}</p>
        <span className="text-[14px] text-ellipsis text-nowrap font-medium overflow-clip">{span}</span>
      </div>

    </div>

  )
}