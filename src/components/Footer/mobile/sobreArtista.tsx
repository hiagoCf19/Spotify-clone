import { FollowButton } from "@/components/Recorrentes/followButton"
import { musics } from "@/mocks/playlists-albuns"

interface propsSobreOArtista {
  playing: musics
}
export const SobreOArtista = ({ playing }: propsSobreOArtista) => {

  return (
    <div className="w-full mb-5">
      <div className="px-6 relative">
        <img src={playing.artista[0].foto} className="w-full  rounded-t-[12px] h-[300px] brightness-50" />
        <h2 className="absolute top-0 p-4 pt-4 text-zinc-50 text-xl font-extrabold">Sobre o artista</h2>
        <div className="flex flex-col bg-[#202020] rounded-b-[12px]  p-3 gap-8">
          <header className="  flex justify-between w-full items-center ">
            <div className=" flex flex-col gap-2">
              <h2 className="text-zinc-50 text-lg font-extrabold">{playing.artista[0].name}</h2>
              <span className="text-sm text-[#a7a7a7]"> 22.578.08 mi ouvintes mensais</span>
            </div>

            <FollowButton />
          </header>

          <p className="w-full text-[#b7b7b7] text-sm line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis provident obcaecati molestias delectus repudiandae. Error, repellendus laborum. Dolorum doloribus dolor illo deleniti et inventore facilis doloremque quaerat quos deserunt?
          </p>
        </div>
      </div>

    </div >
  )
}