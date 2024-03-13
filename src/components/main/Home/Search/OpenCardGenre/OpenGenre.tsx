import { musics, playlists } from "@/mocks/playlists-albuns"
import { HeaderMain } from "../../HeaderMain"
import { TitleSpt } from "@/components/Recorrentes/Title"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { GridGeneric } from "../searching/gridGeneric"

import { extrairArtistas } from "@/scripts/desestruturacao"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { GenericCarousel } from "../../perfilArtista/genericCarousel"
import { BrowseAll } from "@/mocks/BrowseAll"


interface propsOpenGenre {
  music: musics[]
}

export const OpenGenre = ({ music }: propsOpenGenre) => {

  const artistaDoGenero = extrairArtistas(playlists).filter((arts) => {
    return arts.genre === music[0].genre
  })
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth)
  useEffect(() => {

    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [larguraDaTela]);
  const desktopScreen = larguraDaTela >= 640

  const genreColor = BrowseAll.filter((genre) => {
    return genre.genre === artistaDoGenero[0].genre
  })


  return (
    <div className="sm:h-[90vh] h-screen  overflow-y-scroll 
      sm:rounded w-full bg-[#121212] p-4 relative " >
      <div className={` h-[29vh] absolute -m-4  ${genreColor[0].background} opacity-20 w-full`} />


      <HeaderMain />

      <h1 className="sm:text-[5rem]  text-[3rem] font-black text-zinc-50 pb-5 mt-20 mb-8">{music[0].genre}</h1>
      <div className={` flex flex-col gap-5 `}>

        <section className="flex flex-col gap-6 w-full mt-3">
          <div className="flex justify-between items-center">
            <TitleSpt title={`O melhor do ${music[0].genre} no momento`} />
            {desktopScreen ? <a
              className="text-sm font-semibold hover:underline">
              Mostrar tudo
            </a> : null}
          </div>

          <div className="flex gap-6">
            {desktopScreen ?
              music.slice(0, 7).map((card) => (
                <Link
                  to={urlFormater(`${card.album}`)}
                  key={card.album}
                  className=" sm:w-[14%]  overflow-hidden"
                >
                  <GridGeneric image={card.capa} text={card.name} span={''} />
                </Link>
              ))
              :
              <Carousel className=" w-full flex items-center">
                <CarouselContent>
                  {music.map((card, i) => (
                    <GenericCarousel
                      key={i}
                      image={card.capa}
                      span={''}
                      title={card.album}
                      maisDeUmCard={music.length >= 2}
                      imageRoundedFull={false}
                    />
                  ))}
                </CarouselContent>
              </Carousel>
            }
          </div>
        </section>
        <section className=" flex flex-col gap-6 mt-3">
          <div className="flex justify-between items-center">
            <TitleSpt title={`Artistas do ${music[0].genre}`} />
            {desktopScreen ? <a

              className="text-sm font-semibold hover:underline">
              Mostrar tudo
            </a> : null}
          </div>

          <div className="flex gap-6">

            {desktopScreen ? artistaDoGenero.map((card) => (
              <Link
                to={urlFormater(`${card.name}`)}
                key={card.bannerID}
                className=" sm:w-[14%]  overflow-hidden"
              >
                <GridGeneric image={card.foto} text={card.name} span={"Artista"} imageRoundedFull />
              </Link>
            ))
              :
              <Carousel >
                <CarouselContent>
                  {artistaDoGenero.map((card, i) => (
                    <GenericCarousel
                      key={i}
                      image={card.foto}
                      span={''}
                      title={card.name}
                      maisDeUmCard={artistaDoGenero.length >= 2}
                      imageRoundedFull
                    />
                  ))}
                </CarouselContent>
              </Carousel>
            }
          </div>
        </section>


      </div>
      <div className="h-[14vh]" />
    </div>
  )
}