import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { Fragment } from "react"

import { Music } from "lucide-react"

import { DontLibraryCards } from "@/scripts/Naobibliotecas"

export const MobileCarousel = () => {

  return (
    DontLibraryCards.map((card, i) => (
      <Fragment key={i}>
        <h1 className=" text-xl font-bold text-zinc-50 sm:hidden">{card.name}</h1>
        <Carousel key={`${card.name}-${i}`} className="sm:hidden">
          <CarouselContent>
            <CarouselItem
              key={`${card.name}-${i}`} className="basis-1/2">
              <div className="flex flex-col gap-2">
                <div className="w-[100%] h-[173px] ">
                  {'image' in card ? <img src={card.image} alt="" className="rounded h-[173px]" /> : <div className="w-full h-[173px] flex items-center justify-center bg-[#272727] rounded ">
                    <Music size={50} />

                  </div>}

                </div>
                <div className="text-[14px] font-medium h-7 overflow-hidden overflow-ellipsis line-clamp-2 max-h-[2rem]">
                  {card.description}
                </div>
              </div>


            </CarouselItem>



          </CarouselContent>
        </Carousel>
      </Fragment>
    ))




  )
}