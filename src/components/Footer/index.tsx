
import { useContext, useEffect, useState } from "react"
import { DesktopReprodutor } from "./Desktop/index.tsx"
import { MobileNavigator } from "./mobile/mobileNavigator"
import { MobileReprodutor } from "./mobile"
import PlayingCtx from "@/context/context.Playing.tsx"
import { musics } from "@/mocks/playlists-albuns.ts"
import { ReprodutorVazio } from "./Desktop/reprodutorVazio.tsx"




export const Footer = () => {
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
  const { setMusicPlaying, musicPlaying } = useContext(PlayingCtx)


  const [pausado, setPausado] = useState(true)
  const [tempoAtual, setTempoAtual] = useState(0);


  musicPlaying.length !== 0 ?
    !pausado ?
      setTimeout(() => {
        if (tempoAtual < musicPlaying[0].durationInSecounts) {
          setTempoAtual(tempoAtual + 1);
        }
        else {
          clearInterval
        }
      }, 1000)
      : null : null
  useEffect(() => {
    setPausado(false)
  }, [musicPlaying, setMusicPlaying])

  return (
    musicPlaying.length !== 0 ? musicPlaying.map((playing: musics, i: number) => (
      <footer className='sm:h-[8.7vh]  fixed sm:relative w-full bottom-0 flex flex-col sm>gap-2 ' key={i}>
        {desktopScreen ?
          <DesktopReprodutor playing={playing} tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />
          :
          <>
            <MobileReprodutor playing={playing} tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />
            <MobileNavigator />
          </>



        }


      </footer>
    )) : !desktopScreen ? <footer className='  fixed sm:relative w-full bottom-0 flex flex-col  ' >
      <MobileNavigator />
    </footer> :

      <ReprodutorVazio tempoAtual={tempoAtual} pausado={pausado} setPausado={setPausado} />


  )
}