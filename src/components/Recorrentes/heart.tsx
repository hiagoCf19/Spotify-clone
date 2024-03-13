import LikedCtx from "@/context/context.Likeds"
import { musics } from "@/mocks/playlists-albuns"
import { Heart } from "lucide-react"
import { useContext, useState } from "react"
import { IoMdHeart } from "react-icons/io"

interface propsHeart {
  base: musics
  sizeIcon: number
  mobilehidden: boolean
}
export const HeartCpn = ({ base, sizeIcon, mobilehidden }: propsHeart) => {
  const { musicLiked, setMusicLiked } = useContext(LikedCtx)
  const curtidas = musicLiked.map((element: musics) => {
    return element.name
  })
  const [isLiked, setIsLiked] = useState(curtidas.includes(base.name) ? true : false)
  return (
    <div className="sm:pl-5" onClick={() => isLiked ? setIsLiked(false) : setIsLiked(true)}>
      {
        isLiked === false ?
          <Heart
            color="#b7b7b7"
            size={sizeIcon}
            className={`${mobilehidden ? 'hidden sm:block' : ''}`}
            onClick={() => {
              setIsLiked(true)
              setMusicLiked([...musicLiked, base])

            }}
          />
          :
          <IoMdHeart
            color="#1DB954"
            size={sizeIcon}
            className={`${mobilehidden ? 'hidden sm:block' : ''}`}
            onClick={() => setIsLiked(false)}
          />

      }
    </div>
  )
}