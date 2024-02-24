
import React, { ReactNode } from "react";

interface PropsGenericGrid {
  image: string
  text: ReactNode
  span?: ReactNode
  imageRoundedFull?: boolean
}

export const GridGeneric: React.FC<PropsGenericGrid> = ({ image, text, span, imageRoundedFull }) => {

  const roundedFull = imageRoundedFull
  return (

    <div className=" w-full h-[28vh]">

      <div className=" w-full h-full p-3  rounded-[6px] bg-[#191919] hover:bg-[#ffffff11] flex flex-col overflow-hidden cursor-pointer ">
        <div className="flex items-center justify-center  p-1">
          <img src={image} alt="" className={`h-auto w-full   ${roundedFull ? 'rounded-full' : 'rounded'} `} />
        </div>
        <div className="flex flex-col py-2 px-1">
          <p className="font-bold text-[16px] text-zinc-50 text-ellipsis text-nowrap overflow-clip ">{text}</p>
          <span className="text-[12px] line-clamp-2 text-ellipsis overflow-clip font-normal" >{span}</span>
        </div>
        <div>

        </div>

      </div>
    </div>

  )
};
