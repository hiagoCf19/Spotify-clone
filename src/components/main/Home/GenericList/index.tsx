

import { Card } from "./Card"
import React from "react"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"
import { DontLibraryCards } from "@/scripts/Naobibliotecas"


export const GenericList = () => {
  return (
    <div className="flex flex-col gap-2  overflow-hidden">
      {DontLibraryCards.map((item, i) => (
        <React.Fragment key={i} >
          <div className="flex justify-between ">
            <h1 className="sm:text-[22px] text-2xl font-bold text-zinc-50 hover:underline">
              {item.name}
            </h1>
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