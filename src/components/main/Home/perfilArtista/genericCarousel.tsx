import {
  CarouselItem,

} from "@/components/ui/carousel"
import { urlFormater } from "@/scripts/normalize"
import { Link } from "react-router-dom"
interface propsGenericCarousel {
  image: string
  title: string
  span: string
  maisDeUmCard: boolean
  imageRoundedFull: boolean

}
export const GenericCarousel = ({ image, title, span, maisDeUmCard, imageRoundedFull }: propsGenericCarousel) => {

  return (

    <CarouselItem className={`${maisDeUmCard ? 'basis-1/2 w-[50%]' : 'basis-1/1'}   `}>
      <Link
        to={urlFormater(`${title}`)}
        className="flex flex-col gap-2 ">
        <div className={`h-[173px] `}>
          <img src={image} className={`  ${imageRoundedFull ? 'rounded-full h-[153px]' : 'rounded h-[173px]'}`} />
        </div>
        <div className={`text-sm font-medium overflow-hidden overflow-ellipsis line-clamp-2 ${imageRoundedFull ? 'text-center' : ''}`}>
          <p className="overflow-hidden overflow-ellipsis line-clamp-1">{title}</p>

        </div>
        <span className="text-sm font-medium overflow-hidden overflow-ellipsis line-clamp-2 max-w-40">{span}</span>
      </Link>
    </CarouselItem>
  )
}