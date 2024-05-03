import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export const BookingSection = () => {
  return (
    <div className=' z-10  w-full bg-white bottom-0 left-0 h-24 mx-auto fixed shadow-2xl border-t-2'>
    <div className=' w-full  flex justify-center h-full flex-col items-center py-4'>
     <div className=' max-w-4xl w-full px-10  flex items-center justify-between gap-x-6'>

       <div className='flex flex-col gap-4'>
        <h3 className=' font-bold text-[1rem]'> 50$ </h3>
        <h4 className=' text-gray-600'> in Wed 7 2024</h4>

       </div>
       <Button className='shadow-md bg-blue-800 hover:bg-blue-900'><Plus/> Book </Button>

    </div>
   </div>
        

    </div>
  )
}
