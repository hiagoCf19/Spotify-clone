import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react"


interface propsTiip {
  hover: string,
  exibition: string | ReactNode
}
export const Tiip = ({ hover, exibition }: propsTiip) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{exibition}</TooltipTrigger>
        <TooltipContent>
          <p className="font-normal text-[13px]">{hover}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

