import { playlists } from "@/mocks/playlists-albuns"

import { Fragment } from "react"
import { CardMusic } from "./cardMusic"



export const ListCpn = () => {
  return (
    <div className=" my-2  overflow-y-scroll sm:overflow-hidden mr-[-10px] flex flex-col gap-2 sm:p-3">
      {playlists.map((musicas, i) => (
        <Fragment key={i}>
          {musicas.musics?.map((music, iM) =>
          (
            <CardMusic music={music} key={iM} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}