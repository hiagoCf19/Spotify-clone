import { musics } from "@/mocks/playlists-albuns";
import { ReactNode, createContext, useState } from "react";

interface ChildrenProps {
  children: ReactNode
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LikedCtx = createContext<any>([])

export function LikedProvider({ children }: ChildrenProps) {
  const [musicLiked, setMusicLiked] = useState<musics[]>([])

  return (
    <LikedCtx.Provider value={{ musicLiked, setMusicLiked }}>
      {children}
    </LikedCtx.Provider>
  )
}
export default LikedCtx