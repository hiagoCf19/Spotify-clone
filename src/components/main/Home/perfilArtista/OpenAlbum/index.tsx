import { TitleSpt } from "@/components/Recorrentes/Title";
import { musics } from "@/mocks/playlists-albuns";
import { extrairMusicasPorArtista } from "@/scripts/musicasDoArtista";
import { urlFormater } from "@/scripts/normalize";
import { ArrowDownCircle, Clock, Heart, List, MoreHorizontal, MoreVertical, PlusCircle, Shuffle } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GenericCarousel } from "../genericCarousel";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { HeaderMain } from "../../HeaderMain";
import { useContext, useEffect, useState } from "react";
import { IoMdHeart, IoMdPlay } from "react-icons/io";
import { MenuMusics } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen/MenuMusic";
import PlayingCtx from "@/context/context.Playing";

const Gradient = styled.div<{ color: string }>`
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 8%, ${(props) => props.color});

 @media (min-width: 640px) {
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 1%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 1%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 1%, ${(props) => props.color});
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
  const [isLiked, setIsLiked] = useState(false)
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth)
  const { setMusicPlaying } = useContext(PlayingCtx)

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
  const albuns = filterAlbunsSemOAtual.filter((element) => {
    if (!albunsUnicos.has(element.album)) {
      albunsUnicos.add(element.album);
      return true;
    }
    return false;
  });
  function formatarTempoAtual(tempoAtual: number) {
    const minutos = Math.floor(tempoAtual / 60);
    const segundos = tempoAtual % 60;
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos;

    return `${minutos}:${segundosFormatados}`;
  }

  return (

    <div className="h-screen sm:h-[90vh] overflow-y-scroll sm:w-full bg-[#121212]">
      <Gradient color={gradient} className='h-[50%] sm:h-auto p-4 sm:p-5 flex flex-col  gap-2'>
        {desktopScreen ? <HeaderMain /> : null}
        {/* FOTO DO ALBUM, NOME E ARTISTRA */}
        <div className={` ${desktopScreen ? 'flex items-end gap-5' : "flex items-center justify-center"} sm:justify-normal`}>
          <img src={capa} className="w-[60%]  sm:size-52 rounded-[4px]" />
          {/* ONLY DESKTOP */}
          <div className="hidden sm:block text-zinc-50">
            <span className="text-sm">{musica.name !== musica.album ? 'Álbum' : 'Single'}</span>
            <p className={`text-[5rem] -my-4 font-black text-zinc-50 hidden sm:block sm:-mb-4`}>{album}</p>
            <div className="flex items-center gap-1">
              <img src={foto} className="size-6 rounded-full" />
              <span className="text-sm">{artista}</span>
              <i className="text-[8px]">•</i>
              <span className="text-sm">{extrairAno(musica.addEm)}</span>

            </div>
          </div>
        </div>
        {/* REPRODUTOR, LIKE MENU E LISTA */}
        {desktopScreen ?
          <div className="mt-7 flex justify-between">
            <div className="flex items-center gap-5">
              {/* play */}
              <div className=" flex items-center justify-center rounded-full w-12 h-12 bg-spotgreen mr-[-20px] ">
                <IoMdPlay color="#000" size={20} />
              </div>
              {/* like */}
              <div className="pl-5" onClick={() => isLiked ? setIsLiked(false) : setIsLiked(true)}>
                {
                  !isLiked ?
                    <Heart
                      color="#FFF"
                      size={28}
                    />
                    :
                    <IoMdHeart
                      color="#1DB954"
                      size={28}
                    />

                }
              </div>
              {/* menu */}
              <MoreHorizontal />
            </div>
            {/* list */}
            <a className="flex items-center gap-3 hover:text-slate-50 cursor-pointer">
              <span className="font-semibold text-sm hidden sm:block">Lista</span>
              <List className="hidden sm:block" />
            </a>
          </div> : (
            <>

              <TitleSpt title={album} />
              <div className="flex gap-2 items-center">
                <img src={foto} className="size-6 rounded-full" />
                <p className="text-sm">{artista}</p>
              </div>
              <span className="  flex gap-1 items-center text-sm ">
                {musica.name !== musica.album ? 'Álbum' : 'Single'}
                <i className="text-[8px]">•</i>
                {extrairAno(musica.addEm)}
              </span>
              <section className="flex justify-between py-1 items-center ">
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
            </>
          )}
        {/* CABECALIO DAS MUSICAS */}
        {desktopScreen ? <header className="flex justify-between items-center border-b border-solid border-[#a7a7a74e] pb-4 p-3">
          <div className="flex gap-6 items-center">
            <span>#</span>
            <span className="text-sm">Titulo</span>
          </div>
          <Clock size={20} />
        </header> : null}

      </Gradient>

      {/* MUSICAS */}
      <div className="px-3 flex flex-col gap-2">
        {filterAlbum.map((musicasAlb, i) => (
          desktopScreen ?
            <div className="flex px-4 py-1 gap-3 items-center justify-between hover:bg-[#ffffff11] rounded cursor-pointer" key={i} onClick={(() => {
              setMusicPlaying([musicasAlb])
            })}>
              <div className="flex items-center gap-6">
                <p>{i + 1}</p>
                <div>
                  <p className={`  text-zinc-50 hover:text-spotgreen hover:underline`}>
                    {musicasAlb.name}
                  </p>
                  <Link to={urlFormater(artista)} className="text-sm hover:underline hover:text-zinc-50">{musica.artista[0].name}</Link>
                </div>
              </div>
              <span className="text-sm">{formatarTempoAtual(musicasAlb.durationInSecounts)}</span>

            </div>
            :
            <div
              className="flex  justify-between items-center py-1"
              key={i}
            >
              <div className="">
                <p className="text-zinc-50">{musicasAlb.name}</p>
                <span className="text-sm">{artista}</span>
              </div>
              <MenuMusics music={musicasAlb} />
            </div>
        ))}

      </div>

      <p className="p-3 text-sm text-zinc-50 sm:hidden">{musica.addEm}</p>
      <Link to={urlFormater(artista)} className=" p-3 flex items-center gap-3 text-zinc-50 sm:hidden">
        <img src={foto} className="rounded-full size-12" />
        <p>{artista}</p>
      </Link>

      <div className="flex flex-col p-3 gap-4  w-full sm:hidden">
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