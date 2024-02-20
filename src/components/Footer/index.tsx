
import { MobileNavigator } from "./mobileNavigator"
import { Reprodutor } from "./reprodutor"


export const Footer = () => {
  return (
    <footer className='sm:h-[8.7vh] fixed sm:relative w-full bottom-0 flex flex-col gap-2 '>
      <Reprodutor />
      <MobileNavigator />

    </footer>
  )
}