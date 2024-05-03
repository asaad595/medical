'use client'

import { useState } from "react"
import { TimeSchedual } from "./TimeSchedual"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowBigRight } from "lucide-react"
export interface DateTimeProps {
  time:string,
  timeZone:string,
}

export const DoCaBottom = ({data, doctorLink}:{data:DateTimeProps[], doctorLink?:string}) => {
  const [sliceVar,setSliceVar] = useState<number>(5)
  const AddSliceValue = ()=>{
    
    setSliceVar((prev)=>prev + 5)
  }
 
  return (
    <div className=' grid grid-cols-3 grid-fow-row gap-2  '>
        
        {
           data && data?.slice(0,5).map((item,i)=>{
            return(

              <TimeSchedual item ={item} key={i}/>
            )
          })
        }
        <Link href={`/doctors/${doctorLink}`} className='bg-blue-500 text-[0.6rem] text-center shadow-1 hover:bg-blue-100 hover:text-gray-700 transition-all duration-300  text-gray-100 py-0 px-2   '>

        <div className="flex gap-2 text-[0.7rem] text-white hover:text-gray-700 transition-all duration-300"> More  <ArrowBigRight className="w-8 h-8" /> </div>

       </Link>
        


    </div>
  )
}
