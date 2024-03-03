
import { useContext, useEffect, useState } from "react"
import { DesktopReprodutor } from "./Desktop/index.tsx"
import { MobileNavigator } from "./mobile/mobileNavigator"
import { MobileReprodutor } from "./mobile"
import PlayingCtx from "@/context/context.Playing.tsx"
import { musics } from "@/mocks/playlists-albuns.ts"



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
  const { musicPlaying } = useContext(PlayingCtx)
  return (
    musicPlaying.length !== 0 ? musicPlaying.map((playing: musics) => (
      <footer className='sm:h-[8.7vh]  fixed sm:relative w-full bottom-0 flex flex-col sm>gap-2 '>
        {desktopScreen ?
          <DesktopReprodutor playing={playing} /> :
          <>
            <MobileReprodutor playing={playing} />
            <MobileNavigator />
          </>

        }


      </footer>
    )) : null

  )
}