"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, StarIcon, Stars, Stethoscope, Video, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DoCaBottomUpper } from './Doctor-card/DoCaBottom-upper'
import { DoCaBottom } from './Doctor-card/DoCaBottom-bottom'

export const DoctorCard= ( {isInPerson, map, doctorName, doctorLink}:{isInPerson?:boolean, map?:boolean, doctorName?:string , doctorLink?:string}) => {
  const timeDateScheual = [
    { time:"6:00", timeZone: "Pm"},
    { time:"10:00", timeZone: "Am"},
    { time:"6:00", timeZone: "Pm"},
    { time:"12:00", timeZone: "Am"},
    { time:"6:00", timeZone: "Pm"},
    { time:"11:00", timeZone: "Am"},
    { time:"6:00", timeZone: "Pm"},
    { time:"6:00", timeZone: "Pm"},
  ]

  
  return (
    <Link href={`/doctors/${doctorLink}`} className=''>
      <Card className='max-w-[350px] hover:shadow-4 '>
        <CardHeader className='text-center  pb-4'>
          <CardTitle className='text-[1.2rem]'> {doctorName} </CardTitle>
          {
            isInPerson &&

            <CardDescription> Saidnay - Altajely street </CardDescription>
          }
        </CardHeader>
        <CardContent className='w-full px-2 flex items-center '>
          <div className=' mx-auto w-full'>

            <div className='flex  items-start  gap-x-4  w-full'>
              <div className='relative w-32'>
               <Image src={"/doctor/Doctor.png"} alt='doctor' width={100} height={150} className='w-20 shadow-1 h-20 rounded-full   ' />
               {
                isInPerson ||
                <VideoIcon width={40} height={40}  className='absolute bottom-0 -end-3 text-red-500 hover:scale-110 rounded-full bg-slate-100 p-2' />
               }
              </div>
              <div className=' flex items-center flex-col  gap-y-2 w-full px-2 '>
                <div className='flex justify-center  gap-2 items-center  w-full'>
                  <div className='flex justify-center items-start gap-x-1'>
                  <StarIcon   className='text-[#ff856b] fill-[#ff856b] w-3 ' />
                  <StarIcon   className='text-[#ff856b] fill-[#ff856b] w-3' />
                  <StarIcon   className='text-[#ff856b] fill-[#ff856b] w-3' />
                  <StarIcon   className='text-[#ff856b] w-3 fill-[#ff856b]' />
                  <StarIcon    className='text-[#ff856b] w-3 ' />
                  </div>
                  <div className=' flex items-center '>
                    <p className='text-[1rem] leading-none p-0 font-semibold'>4.7</p> <span className='text-[0.6rem] leading-tight p-0 font-light text-gray-400'>( 274)</span>
                  </div>

                </div>
                <div className=' flex gap-x-1'>
                <Stethoscope className='text-gray-500' />
                <CardDescription>Family Doctor</CardDescription>
                </div>
                <div className=' text-center leading-tight py-1 bg-green-400 text-[0.7rem] w-28 max-h-[1.8rem] max-w-32 text-white'>
                  AVILABLE TODDAY
                </div>
                <div className=' text-center  py-2- -px-2 bg-danger-300 w-28 leading-tight py-1 max-h-[1.8rem] max-w-32 text-[0.7rem] text-danger-700'>
                  highly rated
                </div>
              </div>
            </div>
            
            
              <CardDescription className='pt-6'>
                the discription part the discription part  the discription part 1.2rem
              </CardDescription>
            
          </div>

        </CardContent>
        <CardFooter className='p-2 w-full'>
          <div className='w-full' >
            <div>
              <DoCaBottomUpper/>
            </div>
              <DoCaBottom data = { timeDateScheual } doctorLink = { doctorLink}/>
          </div>
        </CardFooter>
      </Card>
    
     </Link>
  )
}
