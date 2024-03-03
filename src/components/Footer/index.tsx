
import { useEffect, useState } from "react"
import { DesktopReprodutor } from "./Desktop/index.tsx"
import { MobileNavigator } from "./mobile/mobileNavigator"
import { MobileReprodutor } from "./mobile"


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

  return (
    <footer className='sm:h-[8.7vh]  fixed sm:relative w-full bottom-0 flex flex-col sm>gap-2 '>
      {desktopScreen ?
        <DesktopReprodutor /> :
        <>
          <MobileReprodutor />
          <MobileNavigator />
        </>

      }


    </footer>
  )
}