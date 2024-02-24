

import { Card } from "./Card"
import React from "react"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { DontLibraryCards } from "@/scripts/Naobibliotecas"
import { TitleSpt } from "@/components/Recorrentes/Title"


export const GenericList = () => {
  return (
    <div className="flex flex-col gap-2  overflow-hidden">
      {DontLibraryCards.map((item, i) => (
        <React.Fragment key={i} >
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



        </React.Fragment>

      ))}

    </div>
  )
}