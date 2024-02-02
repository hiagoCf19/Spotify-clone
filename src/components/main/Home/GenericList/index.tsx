
import { Recomendacoes } from "@/mocks/Recomendacoes"
import { Card } from "./Card"
import React from "react"
import { Link } from "react-router-dom"
import { urlFormater } from "@/scripts/normalize"





export const GenericList = () => {



  return (

    <div className="flex flex-col gap-2">


      {Recomendacoes.map((item, i) => (
        <React.Fragment key={i} >
          <div className="flex justify-between ">

            <h1 className="sm:text-[22px] text-2xl font-bold text-zinc-50">{item.name}</h1>
            <a href="" className="text-sm font-semibold hover:underline">Mostrar tudo</a>
          </div>

          <div className="flex gap-6 ">

            {item.cards.map((data, i) => (
              <Link
                to={urlFormater(`${data.title}-${i}`)}
                key={i}>
                <Card title={data.title}
                  image={data.image ?? ''} span={data.description} />
              </Link>

            ))}


          </div>
        </React.Fragment>

      ))}

    </div>
  )
}