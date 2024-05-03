import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { type ServicePro } from './ServicesList'
const ServicesCard = ({service}:{service?:ServicePro}) => {

    
  return (
    
        <Link href={`/services/${service?.slug}`} className='rounded-xl shadow-1 border bg-slate-100 overflow-hidden hover:bg-slate-200 duration-300 flex gap-4 max-h-24 w-44'>
            <Image src={service ? service?.image : ''} width={1000} height={584 } alt='doctor' className='object-cover h- aspect-video w-1/3'/>
            <div className='flex flex-col w-2/3 p-1'>
                <h2 className='text-[0.8rem] leading-tight'>{service ? service?.title :"hiii "}</h2>
                <span className='text-[0.5rem] leading-3'> 360 Doctir avilable</span>
            </div>
        </Link>
   
  )
}

export default ServicesCard