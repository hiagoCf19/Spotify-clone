import styled from "styled-components"

import { HeaderMain } from "./HeaderMain"
import { FirstSectionMain } from "./firstSection"
import { GenericList } from "./GenericList"
import { MobileCarousel } from "./GenericList/Carousel"
import { MobileLancamentos } from "./lancamentosMobile"
import { useState } from "react"
import { HeaderMobile } from "./headerMobile"

const Gradient = styled.div<{ color: string }>`
  width: 100%;
  padding: 0 12px;
  background: rgb(18, 18, 18);
  
  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
    background: rgb(18, 18, 18);
    background: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 78%, ${(props) => props.color});
    background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 78%, ${(props) => props.color});
    background: linear-gradient(0deg, rgba(18, 18, 18, 1) 78%, ${(props) => props.color});
  }
`;
export const Main = () => {
  const [background, setBackground] = useState('#121212')
  const [scrollDown, setScrollDown] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScroll(event: any) {
    const scrollPosition = event.target.scrollTop;
    setScrollDown(scrollPosition);
  }
  // referente aos botoes, tudo, musica e podcasts
  const [ativo, setAtivo] = useState(0)
  return (

    <div className=" h-[88vh]  overflow-y-scroll 
      sm:rounded w-full" onScroll={handleScroll}>
      <HeaderMobile scrollDown={scrollDown} ativo={ativo} setAtivo={setAtivo} />
      <Gradient color={background} className="flex gap-4 flex-col sm:p-4 sm:px-6 p-2">
        < HeaderMain />

        <FirstSectionMain background={background} setBackground={setBackground} />
        <MobileLancamentos />
        <MobileCarousel />
        <div className="mt-2 hidden sm:block ">
          <GenericList />
        </div>

        <div className="h-[22vh]" />
      </Gradient>

    </div >
  )
}