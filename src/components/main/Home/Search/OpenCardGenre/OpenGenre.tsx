import { musics } from "@/mocks/playlists-albuns"


interface propsOpenGenre {
  music: musics[]
}
export const OpenGenre = ({ music }: propsOpenGenre) => {
  return (
    <div>
      {music.map((item) => (
        item.name
      ))}
    </div>
  )
}