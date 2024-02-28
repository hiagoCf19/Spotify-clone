import { TitleSpt } from "@/components/Recorrentes/Title"
import { artista, cards, playlists } from "@/mocks/playlists-albuns"

import { GridGeneric } from "../Search/searching/gridGeneric"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"



interface propsGenericSectionsInPerfil {
  title: string
  artist: artista
  apareceEm: boolean


}
export const GenericSectionsInPerfil = ({ title, artist, apareceEm, }:
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

  console.log(artistasUnicos);

  return (

    <div className="">
      <TitleSpt title={title} />
      <div className="flex gap-6  w-full mt-3">
        {apareceEm ?
          comArtista(artist.name).map((playlists) => (
            playlists.cards.map((card, i) => (
              <Link
                className=" w-[14%]  overflow-hidden "
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
          ))
          :
          artistasUnicos.slice(0, 7).map((artista, i) => (
            <Link
              to={urlFormater(`${artista.name}`)}
              key={i}
              className=" w-[14%]  overflow-hidden"

            >
              <GridGeneric image={artista.foto} text={artista.name} imageRoundedFull key={i} span={'Artista'} />
            </Link>
          ))
        }

      </div>
    </div>
  )
}