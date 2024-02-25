

import { Card } from "./Card"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"

import { TitleSpt } from "@/components/Recorrentes/Title"
import { exibidos } from "@/scripts/exibitionControl"


export const GenericList = () => {
  return (
    <div className="flex flex-col gap-2  overflow-hidden mt-2">
      {exibidos.map((item, i) => (
        <section key={i} className=" my-3 flex flex-col gap-3" >
          <div className="flex justify-between ">
            <TitleSpt title={item.name} />
            <Link
              to={urlFormater(item.name)}
              className="text-sm font-semibold hover:underline">
              Mostrar tudo
            </Link>
          </div>
          <div className="flex gap-6  w-full">
            {item.cards != undefined ? item.cards?.map((card, i) => (
              <Link
                to={urlFormater(`${card.title}-${i}`)}
                key={i}
                className=" w-[15%] h-[32vh] overflow-hidden"
              >
                <Card
                  props={card}
                />


              </Link>
            ))
              :
              ''}

          </div>



        </section>

      ))}

    </div>
  )
}