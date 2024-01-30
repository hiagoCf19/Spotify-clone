import { GenericList } from "./GenericList"
import { HeaderMain } from "./HeaderMain"
import { FirstSectionMain } from "./firstSection"


export const Main = () => {

  return (

    <div className="flex-1 p-4 px-6 rounded-[6px] h-[88vh]  overflow-y-scroll gap-4 flex flex-col bg-[#121212]  ">
      < HeaderMain />
      <FirstSectionMain />
      <div className="mt-5 flex flex-col gap-8 ">
        <GenericList />
      </div>


    </div >
  )
}