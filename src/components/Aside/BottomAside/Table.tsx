
import { LibraryCards } from "@/scripts/bibliotecas"
import { urlFormater } from "@/scripts/normalize"
import { Music } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"


export const Table = () => {

  return (
    <div className="flex flex-col ">

      {LibraryCards.slice(0, 6).map((playlist, i) => (
        <Link
          to={urlFormater(`${playlist.name}-${i}`)}
          key={i}>
          <div
            className="flex gap-3 hover:bg-[#181818] rounded border-solid py-2 cursor-pointer px-2 mx-[-10px]">
            {'image' in playlist
              ? <img
                src={playlist.image}
                alt={playlist.classe}
                className=" w-12 rounded-[4px]"
              />
              : <div
                className="w-12 h-12 flex items-center justify-center bg-[#272727] rounded"
              >
                <Music />
              </div>}


            <div className="flex flex-col justify-center text-sm">
              <p className="text-zinc-50">{playlist.name}</p>
              <span className="text-[13px]">
                {playlist.cards?.map((item, i) => (
                  <React.Fragment key={i}>

                    {playlist.classe} • {playlist.classe === 'Playlist'
                      ? (
                        `${item.musicas?.length} músicas`
                      ) : (
                        item.description
                      )
                    }
                  </React.Fragment>
                ))}


              </span>
            </div>

          </div>
        </Link>
      ))
      }
    </div >
  )
}