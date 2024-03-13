import LikedCtx from "@/context/context.Likeds"
import { urlFormater } from "@/scripts/normalize"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const LibraryCards = () => {
  const { musicLiked } = useContext(LikedCtx)
  return (
    <Link to={urlFormater('Musicas-curtidas')} className="px-4 sm:px-0 flex items-center gap-3 sm:mt-3">
      <img src="assets/capas/Art.png" className="size-20 sm:size-12" />
      <div className="flex flex-col ">
        <p className="text-zinc-50 text-base"> Músicas Curtidas</p>
        <span className="text-sm flex  gap-2 items-center">Playlist  <i className="text-[10px]">•</i> {musicLiked.length} músicas</span>
      </div>
    </Link>
  )
}