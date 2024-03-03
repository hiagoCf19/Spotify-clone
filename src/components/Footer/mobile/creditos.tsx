
import { FollowButton } from "@/components/Recorrentes/followButton"
import { playlists } from "@/mocks/playlists-albuns"

export const Creditos = () => {
  return (
    <div className="w-full -mt-8 ">
      <div className="p-6">
        <div className="flex flex-col bg-[#202020] rounded-[12px]  p-3 gap-8">
          <header className="  flex justify-between w-full items-center ">
            <h2 className="text-zinc-50 text-xl font-extrabold">Creditos</h2>
            <span className="text-sm text-spotgreen">Mostrar tudo</span>
          </header>
          <ul className="flex flex-col gap-5">
            <li className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg">{playlists[0].cards[0].musicas[0].artista[0].name}</p>
                <span className="text-[#b7b7b7] text-sm">Artista principal</span>
              </div>
              <FollowButton />
            </li>
            <li>
              <p className="text-lg">Nome do compositor</p>
              <span className="text-[#b7b7b7] text-sm">Compositor</span>
            </li>
            <li>
              <p className="text-lg">Nome do compositor, Produtor</p>
              <span className="text-[#b7b7b7] text-sm">Compositor, Produtor</span>
            </li>
          </ul>
        </div>
      </div>

    </div >
  )
}