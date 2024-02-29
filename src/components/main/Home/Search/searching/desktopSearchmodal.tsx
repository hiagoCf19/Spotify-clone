
import { SptBNT } from "@/components/Aside/BottomAside/Button"
import { TitleSpt } from "@/components/Recorrentes/Title"
import { CardMusic } from "@/components/main/OnOpenAlbum/PlaylistAreaOpen/cardMusic"
import { InterfaceBrowseAll } from "@/mocks/BrowseAll"
import { artista, musics } from "@/mocks/playlists-albuns"
import { Fragment, useState } from "react"
import { FaPlay } from "react-icons/fa6"
import { GridGeneric } from "./gridGeneric"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { MontaThisIs } from "@/scripts/DataConstructor"

export interface desktopSearchModalProps {
  artistasUnicos: artista[]
  filterGenre: InterfaceBrowseAll[]
  musicasUnicas: musics[]
  albunsUnicos: musics[]
  thisIsUni: MontaThisIs[]
}
export const DesktopSearchmodal = ({ artistasUnicos, filterGenre, musicasUnicas, albunsUnicos, thisIsUni }: desktopSearchModalProps) => {

  const [ativo, setAtivo] = useState<number>(0)
  const filterButtons: string[] = ['Tudo', 'Músicas', 'Artistas', 'Álbuns', 'Gêneros']
  const isfiltering = ativo !== 0 ? true : false
  const [visiblePlayIcon, setVisiblePlayicon] = useState(false)

  function extrairAno(data: string) {
    const partesData = data.split(" ");
    return partesData[partesData.length - 1];
  }


  return (
    <Fragment>
      <div className="flex gap-2">
        {filterButtons.map((filtro, i) => (
          <SptBNT ativo={ativo} setAtivo={setAtivo} base={filtro} key={i} i={i} />
        ))}
      </div>
      <div className="py-4 flex flex-col gap-5">

        {!isfiltering ?
          <Fragment>

            <div className="flex gap-5  ">
              {/* Melhor resultado */}
              {thisIsUni.length !== 0 ?
                <div className="   flex flex-col gap-2 w-[29%] ">
                  <TitleSpt title="Melhor resultado" />

                  {
                    artistasUnicos.length !== 0 ?
                      artistasUnicos.slice(0, 1).map((artista, i) => (
                        <Link
                          to={urlFormater(artista.name)}
                          key={i}
                          className=" rounded-[6px] bg-[#181818] hover:bg-[#ffffff11]  p-4 w-full h-[214px] relative"
                          onMouseOver={() => setVisiblePlayicon(true)}
                          onMouseOut={() => setVisiblePlayicon(false)}

                        >
                          <img src={artista.foto} alt="foto do artista" className="rounded-full size-[92px]" />
                          <div className="py-3 mx-2">
                            <h2 className="text-zinc-50 text-2xl font-extrabold">{artista.name}</h2>
                            <span className="text-[13px]">Artista</span>
                            {visiblePlayIcon ?
                              <div className=' absolute bottom-0 right-0 p-4 rounded-full sm:bg-spotgreen bg-transparent sm:shadow-lg shadow-[#000000c1] m-5 '>
                                <FaPlay color="#000" className="hidden sm:block" />
                              </div> : null}
                          </div>
                        </Link>
                      )) :
                      thisIsUni.slice(0, 1).map((best, i) => (
                        <Link
                          to={urlFormater(best.title)}
                          key={i}
                          className=" rounded-[6px] bg-[#181818] hover:bg-[#ffffff11]  p-4 w-full h-[214px] relative"
                          onMouseOver={() => setVisiblePlayicon(true)}
                          onMouseOut={() => setVisiblePlayicon(false)}

                        >
                          <img src={best.capa} alt="foto do artista" className="rounded-full size-[92px]" />
                          <div className="py-3 mx-2">
                            <h2 className="text-zinc-50 text-2xl font-extrabold">{best.title}</h2>
                            <span className="text-[13px]">{best.span}</span>
                            {visiblePlayIcon ?
                              <div className=' absolute bottom-0 right-0 p-4 rounded-full sm:bg-spotgreen bg-transparent sm:shadow-lg shadow-[#000000c1] m-5 '>
                                <FaPlay color="#000" className="hidden sm:block" />
                              </div> : null}
                          </div>
                        </Link>
                      ))
                  }
                </div> : null}

              {/* Músicas */}
              {musicasUnicas.length !== 0 ? <div className=" w-[68%] flex flex-col gap-2">
                <TitleSpt title="Músicas" />
                <div className="flex flex-col w-full h-[230px] overflow-hidden p-1 px-4">

                  {musicasUnicas.map((musica, i) => (
                    <CardMusic props={musica} i={i} key={i} hiddenTopics={true} />
                  ))}
                </div>

              </div> : null}

            </div>
            {/* Albuns e pls */}

            {thisIsUni.length !== 0 ?
              <div className="flex flex-col gap-2">
                <TitleSpt title="Álbuns e playlists" />
                <div className="flex gap-5  w-full">
                  {thisIsUni.slice(0, 5).map((card, i) => (
                    <Link
                      to={urlFormater(`${card.title}`)}
                      key={i}
                      className=" w-[14%]  overflow-hidden"
                    >
                      <GridGeneric image={card.capa ?? ""} text={card.title} span={` ${card.span}`} />
                    </Link>

                  ))}
                  {albunsUnicos.slice(0, thisIsUni.length > 6 ? 1 : 5).map((album, i) => (


                    <Link
                      to={urlFormater(`${album.name}`)}
                      key={i}
                      className=" w-[14%]  overflow-hidden"
                    >
                      <GridGeneric image={album.capa ?? ""} text={album.album} span={` ${album.artista.map((artista) => artista.name)} • ${extrairAno(album.addEm)}`} />
                    </Link>

                  ))}
                </div>
              </div> : null}
            { /* Artistas */}
            {artistasUnicos.length !== 0 ? <div className="flex flex-col gap-2">
              <TitleSpt title="Artistas" />
              <div className="flex gap-5  w-full">

                {artistasUnicos.slice(0, 7).map((artista, i) => (
                  <Link
                    to={urlFormater(`${artista.name}`)}
                    key={i}
                    className=" w-[14%]  overflow-hidden"
                  >
                    <GridGeneric image={artista.foto ?? ""} text={artista.name} span={'Artista'} imageRoundedFull />
                  </Link>

                ))}
              </div>

            </div> : null}



            {/* genero */}
            {filterGenre.length !== 0 ?
              <div className="flex flex-col gap-2">
                <TitleSpt title="Gêneros e momentos" />
                <div className="flex gap-5  w-full">

                  {filterGenre.slice(0, 7).map((genre, i) => (
                    <Link
                      to={urlFormater(`${genre.genre}`)}
                      key={i}
                      className=" w-[14%]  overflow-hidden"
                    >
                      <GridGeneric image='assets/capas/genericGenrs.jpeg' text={genre.genre} />
                    </Link>

                  ))}
                </div>
              </div> : null}

          </Fragment>
          : isfiltering && ativo === 1 ?
            <Fragment>
              <div className="flex flex-col gap-2">
                <TitleSpt title="Músicas" />
                {musicasUnicas.map((musica, i) => (
                  <CardMusic props={musica} i={i + 1} hiddenTopics={false} key={i} />
                ))}
              </div>
            </Fragment>
            : isfiltering && ativo === 2 ?
              <Fragment>
                <div className="flex flex-col gap-2">
                  <TitleSpt title="Artistas" />
                  <div className="flex gap-5  w-full">

                    {artistasUnicos.slice(0, 7).map((artista, i) => (
                      <Link
                        to={urlFormater(`${artista.name}`)}
                        key={i}
                        className=" w-[14%]  overflow-hidden"
                      >
                        <GridGeneric image={artista.foto ?? ""} text={artista.name} span={'Artista'} imageRoundedFull />
                      </Link>

                    ))}
                  </div>

                </div>
              </Fragment>
              : isfiltering && ativo === 3 ?
                <Fragment>
                  <div className="flex flex-col gap-2">
                    <TitleSpt title="Albums" />
                    <div className="flex gap-5  w-full">

                      {albunsUnicos.slice(0, 7).map((album, i) => (
                        <Link
                          to={urlFormater(`${album.name}`)}
                          key={i}
                          className=" w-[14%]  overflow-hidden"
                        >
                          <GridGeneric image={album.capa ?? ""} text={album.album} span={` ${album.artista.map((artista) => artista.name)} • ${extrairAno(album.addEm)}`} />
                        </Link>

                      ))}
                    </div>
                  </div>
                </Fragment>
                :
                <Fragment>
                  {filterGenre.length !== 0 ?
                    <div className="flex flex-col gap-2">
                      <TitleSpt title="Gêneros e momentos" />
                      <div className="flex gap-5  w-full">

                        {filterGenre.slice(0, 7).map((genre, i) => (
                          <Link
                            to={urlFormater(`${genre.genre}`)}
                            key={i}
                            className=" w-[14%]  overflow-hidden"
                          >
                            <GridGeneric image='assets/capas/genericGenrs.jpeg' text={genre.genre} />
                          </Link>

                        ))}
                      </div>
                    </div>
                    :
                    <div className="flex flex-col text-center justify-center items-center h-[50vh]">
                      <h1 className="text-zinc-50 text-2xl">Não encontramos resultados para sua pesquisa na categoria Gêneros
                      </h1>
                      <span>Confira se digitou corretamente ou confira as outras seções </span>
                    </div>
                  }
                </Fragment>}
      </div>
    </Fragment>
  )
}