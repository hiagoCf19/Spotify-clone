import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"

import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { exibidos } from "@/scripts/exibitionControl"
import { TitleSpt } from "@/components/Recorrentes/Title"
import { extrairArtistas } from "@/scripts/desestruturacao"
import { playlists } from "@/mocks/playlists-albuns"
import { MontaMiniCardArtists } from "@/scripts/DataConstructor"
import { Fragment } from "react"


export const MobileCarousel = () => {
  const mobile = window.innerWidth <= 640
  const artistasCatalogados = extrairArtistas(playlists).map((artist) => {
    return new MontaMiniCardArtists(artist.name, artist.foto, artist.name)
  })

  return (
    mobile ?
      <Fragment>
        {exibidos.map((cards, i) => (
          <section key={i} className="my-4 flex flex-col gap-2">
            <TitleSpt title={cards.name} />
            <Carousel key={`${cards.name}-${i}`}>
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
        ))}
        <section className="my-4 flex flex-col gap-2">
          <TitleSpt title={'Artistas catalogados'} />
          <Carousel>
            <CarouselContent className="flex gap-2">
              {artistasCatalogados.map((card, i) => (
                <CarouselItem
                  key={`${card.title}-${i}`} className=" basis-40">
                  <Link
                    to={urlFormater(`${card.title}`)}
                    className="flex flex-col">

                    <img src={card.capa} className=" h-[153px] rounded-full" />
                    <p className="text-sm mt-2 overflow-hidden overflow-ellipsis line-clamp-2 text-zinc-50 ml-5 ">
                      {card.title}
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>


      </Fragment>
      : null
  )
}