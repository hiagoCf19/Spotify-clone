import { SptBNT } from "@/components/Aside/BottomAside/Button"
import { TitleSpt } from "@/components/Recorrentes/Title"
import { useState } from "react"

import { musics } from "@/mocks/playlists-albuns"
import { Card } from "../GenericList/Card"
import { constructorSinglesAndAlbuns } from "@/scripts/DataConstructor"

interface propsDiscografia {
  musicas: musics[]
}

export const Discografia = ({ musicas }:
  propsDiscografia) => {
  const [ativo, setAtivo] = useState(0)
  const baseButton = ['Álbuns', 'Singles e EPs']
  const albuns = constructorSinglesAndAlbuns(musicas, true);
  const singles = constructorSinglesAndAlbuns(musicas, false);

  return (
    <div className="">
      <TitleSpt title={'Discografia'} />
      <div className="flex gap-2 my-4">
        {baseButton.map((base, i) => (
          <SptBNT ativo={ativo} base={base} setAtivo={setAtivo} i={i} key={i} />
        ))}
      </div>
      {ativo === 0 ? <div className="flex gap-6  w-full mt-3">
        {albuns.map((album, i) => (
          <Card props={album} key={i} />
        ))}
      </div>
        :
        <div className="flex gap-6  w-full mt-3">
          {singles.map((single, i) => (
            <Card props={single} key={i} />
          ))}
        </div>
      }
    </div>
  )
}