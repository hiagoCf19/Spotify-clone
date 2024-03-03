import { musics } from "@/mocks/playlists-albuns";
import { ReactNode, createContext, useState } from "react";

interface ChildrenProps {
  children: ReactNode
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlayingCtx = createContext<any>([])

export function ReproducingProvider({ children }: ChildrenProps) {
  const [musicPlaying, setMusicPlaying] = useState<musics[]>([])

  return (
    <PlayingCtx.Provider value={{ musicPlaying, setMusicPlaying }}>
      {children}
    </PlayingCtx.Provider>
  )
}
export default PlayingCtx