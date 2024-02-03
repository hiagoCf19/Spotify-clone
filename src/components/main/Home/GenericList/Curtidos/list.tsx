import { playlists } from "@/mocks/playlists-albuns"

import { Fragment } from "react"

import { CardMusic } from "@/components/main/cardMusic";

export const List = () => {
  return (
    <div className=" my-2  overflow-y-scroll mr-[-10px] flex flex-col gap-2">
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