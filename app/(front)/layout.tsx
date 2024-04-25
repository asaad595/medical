import { MegaMenu } from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/NavBar'
import React, { Children } from 'react'

const FrontLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-blue-950'>
        <Navbar/>
         <div className=' w-full mx-auto py-2'>
            <MegaMenu/>
          </div>    
        {children}
    </div>
  )
}

export default FrontLayout