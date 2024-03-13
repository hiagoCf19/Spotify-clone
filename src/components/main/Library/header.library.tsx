import { SptBNT } from "@/components/Aside/BottomAside/Button";
import { TitleSpt } from "@/components/Recorrentes/Title";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CircleUser, Plus } from "lucide-react";
interface headerLibraryProps {
  baseButton: string[]
  ativo: number;
  setAtivo: React.Dispatch<React.SetStateAction<number>>
}
export const HeaderLibrary = ({ baseButton, ativo, setAtivo }: headerLibraryProps) => {
  return (
    <header className="flex flex-col gap-5  shadow-md shadow-black p-4 mt-5 ">
      <section className="flex justify-between">
        <div className="flex gap-5 items-center">
          <Avatar >
            <AvatarImage src="" />
            <AvatarFallback>
              <CircleUser size={30} />
            </AvatarFallback>
          </Avatar>
          <TitleSpt title="Sua biblioteca" />
        </div>
        <div className="flex items-center gap-3">
          <svg data-encore-id="icon" role="img" aria-hidden="true" className="size-7 svg-icon text-[#fff] hover:text-zinc-50" viewBox="0 0 24 24" fill="currentColor">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
            </svg>
          </svg>
          <Plus size={32} color="#FFF" />
        </div>
      </section>
      <section className="flex gap-3">
        {baseButton.map((base, i) => (
          <SptBNT ativo={ativo} setAtivo={setAtivo} base={base} key={i} i={i} />
        ))}
      </section>

    </header>
  )
}