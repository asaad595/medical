'use client'
import Link from 'next/link'
import { DateTimeProps } from './DoCaBottom-bottom'

export const TimeSchedual = ({item}:{item:DateTimeProps}) => {
  return (
        
    <Link href={"/"} className=' '>
    <div className='bg-blue-800 text-[0.6rem] text-center shadow-1 hover:bg-blue-100 hover:text-gray-700 transition-all duration-300  text-gray-100 py-0 px-2   '>

        {item.time} {item.timeZone}

    </div>
    </Link>
  )
}
