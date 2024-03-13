import { TitleSpt } from "@/components/Recorrentes/Title"
import { artista, cards, playlists } from "@/mocks/playlists-albuns"

import { GridGeneric } from "../Search/searching/gridGeneric"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { GenericCarousel } from "./genericCarousel"
import { MontaMiniCardArtists } from "@/scripts/DataConstructor"




interface propsGenericSectionsInPerfil {
  title: string
  artist: artista
  apareceEm: boolean
  desktopScreen: boolean



}
export const GenericSectionsInPerfil = ({ title, artist, apareceEm, desktopScreen }:
  propsGenericSectionsInPerfil) => {

  function comArtista(artistName: string) {

    const apareceEm: {
      cards: cards[]
    }[] = [];

    playlists.forEach((playlist) => {
      // retorna os cards que incluem a palavra do parametro (nome do artista)
      const filteredCards = playlist.cards.filter((card) => {
        return card.description.includes(artistName);
      });
      //Se algo for encontrado colocar dentro do array
      if (filteredCards.length > 0) {
        apareceEm.push({
          cards: filteredCards
        });
      }
    });

    return apareceEm;
  }

  function extraiArtistasDoGenero(genre: string) {
    const artistasDoGenero: artista[] = []
    playlists.forEach((playlist) => {
      playlist.cards.forEach((element) => {
        element.musicas.forEach((musica) => {
          musica.artista.forEach((art) => {
            if (art.genre === genre) {

              artistasDoGenero.push(art)
            }
          })
        })
      })

    })
    return artistasDoGenero
  }


  const artistasNomesUnicos = new Set();
  const artistasUnicos: artista[] = [];
  extraiArtistasDoGenero(artist.genre).map(artista => {
    if (!artistasNomesUnicos.has(artista.name)) {
      artistasNomesUnicos.add(artista.name);
      artistasUnicos.push(artista);
    }
  });

  const artistThisIS = [new MontaMiniCardArtists(`This Is ${artist.name}`, artist.thisIs ?? '', `This is ${artist.name}. Os maiores sucessos em uma única playlist`)]


  return (

    <div className="">
      <TitleSpt title={title} />
      <div className="flex sm:gap-6  w-full mt-3">
        {

          apareceEm ?

            desktopScreen ?
              <>
                {artistThisIS.map((thisIs, i) => (
                  <Link
                    to={urlFormater(`${thisIs.title}`)}
                    key={i}
                    className=" w-[14%] sm:min-w-[150px]  overflow-hidden"

                  >
                    <GridGeneric image={thisIs.capa} text={thisIs.title} span={thisIs.span} imageRoundedFull={false} />
                  </Link>

                ))}
                {comArtista(artist.name).map((playlists) => (
                  playlists.cards.map((card, i) => (
                    <Link
                      className=" w-[14%] sm:min-w-[150px]  overflow-hidden "
                      to={urlFormater(card.title)}
                      key={`${card.title}-${i}`}
                    >
                      <GridGeneric
                        image={card.image}
                        text={card.title}
                        imageRoundedFull={false}
                        span={card.description} />
                    </Link>
                  ))
                ))}
              </>

              :
              <Carousel >
                <CarouselContent>
                  {comArtista(artist.name).map((playlist, i) => (
                    playlist.cards.map((card) => (
                      <GenericCarousel
                        key={i}
                        image={card.image}
                        span={card.description}
                        title={card.title}
                        maisDeUmCard={comArtista(artist.name).length >= 2}
                        imageRoundedFull={false}
                      />
                    ))
                  ))}
                </CarouselContent>
              </Carousel>
            :
            desktopScreen ?
              artistasUnicos.slice(0, 7).map((artista, i) => (
                <Link
                  to={urlFormater(`${artista.name}`)}
                  key={i}
                  className=" w-[14%] sm:min-w-[150px]  overflow-hidden"

                >
                  <GridGeneric
                    image={artista.foto}
                    text={artista.name}
                    imageRoundedFull
                    key={i}
                    span={'Artista'} />
                </Link>
              )) :
              <Carousel className=" w-full ">

                <CarouselContent className=" ">
                  {artistasUnicos.map((artista, i) => (
                    <GenericCarousel
                      key={i}
                      image={artista.foto}
                      span={''}
                      title={artista.name}
                      maisDeUmCard={artistasUnicos.length > 1}
                      imageRoundedFull
                    />
                  ))}
                </CarouselContent>
              </Carousel>
        }

      </div>
    </div>

  )
}