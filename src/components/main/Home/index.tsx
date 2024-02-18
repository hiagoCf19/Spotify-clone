import styled from "styled-components"
import { GenericList } from "./GenericList"
import { MobileCarousel } from "./GenericList/Carousel"
import { HeaderMain } from "./HeaderMain"
import { FirstSectionMain } from "./firstSection"


export const Main = () => {
  const GradientBase = styled.div`
  
  width: 100%;
  padding: 0 12px;
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 88%,
     rgba(66, 46, 194, 0.535) 100%
    
  );
  background: -webkit-linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 88%,
     rgba(66, 46, 194, 0.535) 100%
  );
  background: linear-gradient(
    357deg,
    rgba(18, 18, 18, 1) 88%,
     rgba(66, 46, 194, 0.535) 100%
  );
  @media (min-width: 640px) {
    padding: 1rem 1.5rem;

    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 79%,
       rgba(66, 46, 194, 0.535) 100%
    );
    background: -webkit-linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 79%,
       rgba(66, 46, 194, 0.535) 100%
    );
    background: linear-gradient(
      357deg,
      rgba(18, 18, 18, 1) 79%,
       rgba(66, 46, 194, 0.535) 100%
    );
  }

  `
  return (

    <div className="flex-1  sm:rounded-[6px] h-[88vh]  overflow-y-scroll 
     ">
      <GradientBase className="flex gap-4 flex-col 
      backgroundGradientMobile sm:backgroundGradientDesktop sm:p-4 sm:px-6 p-2">
        < HeaderMain />
        <FirstSectionMain />
        <MobileCarousel />
        <div className="mt-2 hidden sm:block ">
          <GenericList />
        </div>
      </GradientBase>
    </div >
  )
}