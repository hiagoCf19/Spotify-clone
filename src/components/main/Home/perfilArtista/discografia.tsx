import { SptBNT } from "@/components/Aside/BottomAside/Button"
import { TitleSpt } from "@/components/Recorrentes/Title"
import { useState } from "react"

import { musics } from "@/mocks/playlists-albuns"
import { constructorSinglesAndAlbuns } from "@/scripts/DataConstructor"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"
import { GridGeneric } from "../Search/searching/gridGeneric"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { GenericCarousel } from "./genericCarousel"

interface propsDiscografia {
  musicas: musics[]
  desktopScreen: boolean
}

export const Discografia = ({ musicas, desktopScreen }:
  propsDiscografia) => {
  const [ativo, setAtivo] = useState(0)
  const baseButton = ['Álbuns', 'Singles e EPs']
  const albuns = constructorSinglesAndAlbuns(musicas, true);
  const singles = constructorSinglesAndAlbuns(musicas, false);

  return (
    <div>
      <TitleSpt title={'Discografia'} />
      <div className="flex gap-2 my-2 ">
        {baseButton.map((base, i) => (
          <SptBNT ativo={ativo} base={base} setAtivo={setAtivo} i={i} key={i} />
        ))}
      </div>
      {ativo === 0 ?
        <div className="flex gap-6  w-full mt-3">
          {/* albuns no desktop */}
          {desktopScreen ?

            albuns.length > 0 ?
              albuns.map((album, i) => (
                <Link
                  to={urlFormater(`${album.title}`)}
                  key={i}
                  className=" sm:w-[14%]  overflow-hidden"
                >
                  <GridGeneric
                    image={album.image}
                    text={album.title}
                    imageRoundedFull={false}
                    key={i}
                    span={album.description} />
                </Link>
              )) : <div className="h-44 flex items-center w-full">
                Nenhum Álbum foi adicionado
              </div>

            :

            <Carousel className=" w-full flex justify-center items-center">
              <CarouselContent  >
                {albuns.length > 0 ?
                  albuns.map((album, i) => (
                    <GenericCarousel
                      key={i}
                      image={album.image}
                      span={''}
                      title={album.title}
                      maisDeUmCard={albuns.length > 1}
                      imageRoundedFull={false}
                    />
                  ))
                  :
                  <div className="h-44 flex r items-center justify-center w-full">
                    Nenhum Álbum foi adicionado
                  </div>}
              </CarouselContent>
            </Carousel>
          }
        </div>
        :
        <div className="flex gap-6  w-full mt-3">
          {desktopScreen ?
            singles.length > 0 ?
              singles.map((single, i) => (
                <Link
                  to={urlFormater(`${single.title}`)}
                  key={i}
                  className=" sm:w-[14%]  overflow-hidden"
                >
                  <GridGeneric
                    image={single.image}
                    text={single.title}
                    imageRoundedFull={false}
                    key={i}
                    span={single.description}
                  />
                </Link>
              )) : <div className="h-44 flex r items-center w-full"> Nenhum single foi adicionado</div>
            :
            singles.length > 0 ?
              <Carousel >
                <CarouselContent  >
                  {singles.map((single, i) => (
                    <GenericCarousel
                      key={i}
                      image={single.image}
                      span={single.description}
                      title={single.title}
                      imageRoundedFull={false}
                      maisDeUmCard={singles.length > 2}
                    />
                  ))}
                </CarouselContent>
              </Carousel>
              :
              <div className="h-44 flex justify-center items-center w-full"> Nenhum single foi adicionado</div>}

        </div>
      }
    </div>
  )
}