import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"

import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { exibidos } from "@/scripts/exibitionControl"
import { TitleSpt } from "@/components/Recorrentes/Title"

export const MobileCarousel = () => {

  return (
    exibidos.map((cards, i) => (
      <section key={i} className="my-4 flex flex-col gap-2">
        <TitleSpt title={cards.name} />
        <Carousel key={`${cards.name}-${i}`} className="sm:hidden">
          <CarouselContent>
            {cards.cards.map((card, i) => (
              <CarouselItem
                key={`${card.title}-${i}`} className=" basis-40">
                <Link
                  to={urlFormater(`${card.title}`)}
                  className="flex flex-col">

                  <img src={card.image} alt="" className=" h-[153px]" />
                  <div className="text-sm mt-2 overflow-hidden overflow-ellipsis line-clamp-2 ">
                    {card.description}
                  </div>
                </Link>


              </CarouselItem>
            ))}




          </CarouselContent>
        </Carousel>
      </section>
    ))
  )
}