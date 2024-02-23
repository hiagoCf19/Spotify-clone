import SearchCtx from "@/context/context.Search";
import { HeaderMain } from "../HeaderMain";
import { ChangeEvent, useContext, useEffect, useState } from "react";
//import { BrowseAll } from "@/mocks/BrowseAll";


import { HeaderSearchMobile } from "./HeaderSearchmobile";
import { ArrowLeft, Search } from "lucide-react";
import { EstaticHome } from "./home";
import { ModalSearch } from "./modalSearch";



export const SearchComponent = () => {

  const { searchOpen, setSearchOpen } = useContext(SearchCtx);
  const [search, setSearch] = useState('')
  const [hiddenHeaderMB, setHiddenHeaderMB] = useState(false)
  const [hiddenModal, setHiddenModal] = useState(false)



  useEffect(() => {
    setSearchOpen(true);
  }, [setSearchOpen]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setHiddenModal(false)
    const value = e.target.value
    setSearch(value)
    setHiddenModal(value.length === 0)
  }
  useEffect(() => {
    search.length === 0 && hiddenHeaderMB ? setHiddenModal(true) : setHiddenModal(false)
  }, [hiddenHeaderMB, hiddenModal, search.length])



  return (
    <div className={`flex-1 sm:rounded-[6px] min-h-[88vh] sm:h-40 overflow-y-scroll gap-1 flex flex-col bg-[#171717] sm:px-6  ${hiddenHeaderMB ? 'p-0' : 'p-2'} `}

    >
      <HeaderMain search={searchOpen} handleSearch={handleSearch} />
      <HeaderSearchMobile hidden={hiddenHeaderMB} />
      <div className={`text-zinc-50 sm:hidden no-underline w-full flex items-center gap-2   p-2   ${hiddenHeaderMB ? 'bg-[#272727] py-4 ' : 'bg-zinc-50 rounded my-5'}`}
        onClick={() => setHiddenModal(true)}
      >
        {hiddenHeaderMB ?
          <ArrowLeft
            color="#FFF"
            onClick={() => {
              setHiddenHeaderMB(false)
              setHiddenModal(search.length === 0);
              setSearch('')
            }} />
          :
          <Search color="#272727" />}

        <form className="w-full ">
          <input type="text"
            className={` w-[90%] rounded  ${hiddenHeaderMB ? ' placeholder:text-[#a7a7a7]' : 'placeholder:text-[#272727]'} placeholder:font-semibold outline-none bg-transparent`}
            placeholder="O que você quer ouvir ? "
            value={search}
            onChange={handleSearch}
            onClick={() => {
              setHiddenHeaderMB(true)
              search.length === 0 ? setHiddenModal(true) : setHiddenModal(false)
            }}

          />
        </form>

      </div>

      {hiddenModal ?
        <div className=" sm:hidden flex flex-col justify-center items-center h-full w-full">
          <div className='flex flex-col justify-center items-center w-[80%] gap-2'>
            <h2 className="font-bold text-zinc-50 text-xl text-center w-[90%]">Encontre o que você quer ouvir</h2>
            <p className="text-center text-sm">Busque Artistas, músicas, podcasts e muito mais.</p>
          </div>

        </div> : (
          <div className="sm:py-4 h-full">

            {search.length !== 0 ? null : <h1 className="sm:text-[22px] text-xl font-bold text-zinc-50 hover:underline">
              Navegar por todas as seções

            </h1>}

            {search.length !== 0 ? <ModalSearch search={search} /> : <EstaticHome />}

          </div>
        )}
      <div className="sm:hidden h-[15vh]" />
    </div>
  )
};
