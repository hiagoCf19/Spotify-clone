import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { Fragment } from "react"

import { Music } from "lucide-react"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { exibidos } from "@/scripts/exibitionControl"

export const MobileCarousel = () => {

  return (
    exibidos.map((cards, i) => (
      <Fragment key={i}>
        <h1 className=" text-xl font-bold text-zinc-50 sm:hidden">{cards.name}</h1>

        <Carousel key={`${cards.name}-${i}`} className="sm:hidden">
          <CarouselContent>
            {cards.cards.map((card, i) => (
              <CarouselItem
                key={`${card.title}-${i}`} className="basis-1/2">
                <Link
                  to={urlFormater(`${card.title}`)}
                  className="flex flex-col gap-2">
                  <div className="w-[100%] h-[173px] ">
                    {'image' in card ? <img src={card.image} alt="" className="rounded h-[173px]" /> : <div className="w-full h-[173px] flex items-center justify-center bg-[#272727] rounded ">
                      <Music size={50} />
                    </div>}

                  </div>
                  <div className="text-[13px] font-medium overflow-hidden overflow-ellipsis line-clamp-2 ">
                    {card.description}
                  </div>
                </Link>


              </CarouselItem>
            ))}




          </CarouselContent>
        </Carousel>
      </Fragment>
    ))
  )
}