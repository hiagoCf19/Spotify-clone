import { TitleSpt } from "@/components/Recorrentes/Title";
import { CardMusic } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen/cardMusic";
import { musics } from "@/mocks/playlists-albuns";
import { extrairMusicasPorArtista } from "@/scripts/musicasDoArtista";
import { urlFormater } from "@/scripts/normalize";
import { ArrowDownCircle, MoreVertical, PlusCircle, Shuffle } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GenericCarousel } from "../genericCarousel";

import { Carousel, CarouselContent } from "@/components/ui/carousel";

const Gradient = styled.div<{ color: string }>`
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});

 @media (min-width: 640px) {
   
  }
  
`;
interface propsOpenAlbum {
  album: string
  gradient: string
  capa: string
  foto: string
  artista: string
  musica: musics
}



export const OpenAlbum = ({ album, gradient, capa, foto, artista, musica }: propsOpenAlbum) => {
  function extrairAno(data: string) {
    const partesData = data.split(" ");
    return partesData[partesData.length - 1];
  }
  const filterAlbum = extrairMusicasPorArtista(artista).filter((musicas) => {
    return musicas.album === album
  })
  const filterAlbunsSemOAtual = extrairMusicasPorArtista(artista).filter((element) => {
    return element.album !== album
  })
  const albunsUnicos = new Set();

  // Filtrar duplicatas e adicionar álbuns únicos ao conjunto
  const albuns = filterAlbunsSemOAtual.filter((element) => {
    if (!albunsUnicos.has(element.album)) {
      albunsUnicos.add(element.album);
      return true;
    }
    return false;
  });


  return (

    <div className="h-screen overflow-y-scroll bg-[#121212]">
      <Gradient color={gradient} className='h-[50%] p-4 flex flex-col gap-2'>
        <div className="flex items-center justify-center">
          <img src={capa} className="w-[60%] rounded-[4px]" />
        </div>

        <TitleSpt title={album} />
        <div className="flex gap-2 items-center">
          <img src={foto} className="size-6 rounded-full" />
          <p className="text-sm">{artista}</p>
        </div>
        <span className="flex gap-1 items-center text-sm">
          {musica.name !== musica.album ? 'Álbum' : 'Single'}
          <i className="text-[8px]">•</i>
          {extrairAno(musica.addEm)}
        </span>
        <section className="flex justify-between py-1 items-center">
          <div className="flex gap-5 items-center">
            <div className="border-[2px] border-[#a7a7a7] rounded-xl">
              <img src={capa} className="h-10 w-8 rounded-xl p-px" />
            </div>
            <PlusCircle size={28} />
            <ArrowDownCircle size={28} />
            <MoreVertical size={28} />

          </div>
          <div className="flex items-center gap-4">
            <Shuffle />
            <div className="size-10 rounded-full bg-spotgreen flex justify-center items-center"
            //   onClick={(() => {
            //   setMusicPlaying([data])
            // })}
            >
              <FaPlay color="#000" />
            </div>
          </div>

        </section>
      </Gradient>
      <div className="p-3 mt-2 ">
        {filterAlbum.map((musicas, i) => (
          <div className="flex flex-col py-1" key={i}>
            <CardMusic hiddenTopics i={i} props={musicas} />
          </div>
        ))}

      </div>
      <p className="p-3 text-sm text-zinc-50">{musica.addEm}</p>
      <Link to={urlFormater(artista)} className=" p-3 flex items-center gap-3 text-zinc-50">
        <img src={foto} className="rounded-full size-12" />
        <p>{artista}</p>
      </Link>

      <div className="flex flex-col p-3 gap-4  w-full">
        <h1 className="text-[18px] text-zinc-50">
          Você também pode gostar
        </h1>

        <Carousel>
          <CarouselContent  >
            {albuns.map((albumMap) => (

              <GenericCarousel
                image={albumMap.capa}
                imageRoundedFull={false}
                maisDeUmCard={false}
                span={''}
                title={albumMap.album} />

            ))}
          </CarouselContent>
        </Carousel>



      </div>
      <div className="h-[18vh]" />
    </div>
  )

}