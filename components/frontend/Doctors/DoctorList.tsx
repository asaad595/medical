'use client'
import Switcher2 from '@/components/ui/ToggleTabs'
import { SectionHeading } from '../SectionHeading'
import ToggleTabs from '@/components/ui/ToggleTabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DoctorCard } from './DoctorCard'
import { cn } from '@/lib/utils'
import { basename } from 'path'
import { Map } from 'lucide-react'
import { DoctorsCArousel } from './Doctor-card/DoctorsCarousel'

export interface DoctorInPlaceItelProp {
  title?:string,
  map?:boolean,
  address?: boolean,
  backGround?:boolean
  
}

export const DoctorList = ({  title ,map,  address,backGround }:DoctorInPlaceItelProp) => {
  return (
    <div className={cn('bg-pink-100 py-8 lg:py-24 w-full',backGround && 'bg-white')}>
        {/* //red the main container  */}
        <div className='max-w-6xl mx-auto'>
        <SectionHeading title={title}/>
        <div className=' flex justify-between py-4 items-center'>

        
          {
            map ?( <Link href={"#"} className='py-4 flex flex-col items-start text-blue-800 gap-x-4'> <Map/><span className='font-light text-[1.2rem]'> with maps</span></Link> )
             :(<div className='py-4 flex items-center gap-x-4'><Switcher2/> <span className='font-light text-[1.2rem]'> With in 2 Hours</span></div>)
          }

        
        <Button asChild variant={'outline'} className='bg-transparent border border-black py-4 px-6 hover:bg-transparent rounded-none hover:font-bold'>
           <Link href="/login">Show All</Link>
         </Button>
        </div>
        {/* //wh- the doctorList  */}

         <div className=' px-6 '>
          {/* //wh doctor corasoul here  */}

          {/* <DoctorCard isInPerson={address} map={map} /> */}

          <DoctorsCArousel isInPerson={address} map={map}/>
         </div>
        
        </div>
        {/* //gr- end main container */}
        
    
    </div>
  )
}
