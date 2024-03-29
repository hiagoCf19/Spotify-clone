"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) =>

(
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center group cursor-pointer",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#78787851] ">
      <SliderPrimitive.Range className="absolute h-full bg-zinc-50 group-hover:bg-spotgreen " />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="opacity-0 group-hover:sm:opacity-100 block h-3 w-3  rounded-full  bg-zinc-50 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " />
  </SliderPrimitive.Root>


))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
