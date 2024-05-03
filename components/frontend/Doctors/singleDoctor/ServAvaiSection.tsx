'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Service } from "./Service"
import { Avibilaty } from "./Avibilaty"
import { BookingSection } from "./BookingSection"

export const ServAvaiSection = () => {
    const [isActive, setIsActive]= useState(false)
  return (
    <div className="w-full">
        {/* //wh ** the two button */}
        <div className="flex items-center py-3 w-full shadow-xl">
            <Button onClick={()=>setIsActive(false)} className={cn("w-1/2 rounded-none bg-blue-700 h-full",isActive || "bg-blue-400 border-b-4 border-blue-800 ")} >Services</Button>
            <Button onClick={()=>setIsActive(true)} className={cn("w-1/2 rounded-none bg-blue-700 h-full",isActive && "bg-blue-400 border-b-4 border-blue-800 ")} >Avibilaty</Button>

        </div>
        {
            isActive 
            ?(
                <div>

                    <Avibilaty/>
                    <BookingSection/>
                </div>
            )
            :(
                <Service/>
            )
        }

    </div>
  )
}
