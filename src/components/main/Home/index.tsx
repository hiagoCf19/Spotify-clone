import { GenericList } from "./GenericList"
import { MobileCarousel } from "./GenericList/Carousel"
import { HeaderMain } from "./HeaderMain"
import { FirstSectionMain } from "./firstSection"


export const Main = () => {

  return (

    <div className="flex-1  rounded-[6px] h-[88vh]  overflow-y-scroll 
     ">
      <div className="flex gap-4 flex-col 
      backgroundGradientMobile sm:backgroundGradientDesktop sm:p-4 sm:px-6 p-2">
        < HeaderMain />
        <FirstSectionMain />
        <MobileCarousel />
        <div className="mt-2 hidden sm:block ">
          <GenericList />
        </div>
      </div>



    </div >
  )
}