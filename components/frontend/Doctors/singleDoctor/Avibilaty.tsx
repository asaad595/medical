'use client'
import { Calendar } from "@/components/ui/calendar"
import { split } from "postcss/lib/list"
import React from "react"


export const Avibilaty = () => {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    
    const Gmt = bookDate?.toString().split("GMT")[1].split(" ")[0]
    const formateDate = `${bookDate?.toString().split(" ").slice(0,4).join(" ") }`
    
  return (
    <div className='bg-white w-full mx-auto pb-24'>
        <div className='text-center'>
            <h1 className='text-2xl text-gray-900 font-medium'>The Aviblatiy</h1>
        </div>
        <div className='w-full flex  h-full '>
            <div className='w-1/2 flex items-center justify-center p-4'>
            <Calendar
                mode="single"
                selected={bookDate}
                onSelect={setBookDate}
                className="rounded-md border"
            />
            </div>
            <div className='w-1/2 h-full p-4'>
               <div className=" border-4 border-blue-800 text-center font-bold text-gray-600 mx-4 p-4">
                 {`${formateDate} GMT ${Gmt} ` }
                </div>
                <div>
              
                </div>
            </div>


        </div>

    </div>
  )
}
