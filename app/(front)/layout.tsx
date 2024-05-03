import { Footer } from '@/components/frontend/Footer'
import { MegaMenu } from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/NavBar'
import Provider from '@/providers/Provider'
import React, { Children } from 'react'


const FrontLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-white w-full '>
         <div className=' min-w-full  top-[60px] md:top-[70px] border-blue-500 border-b-2 bg-white   fixed z-20   '>
            <Navbar/>
            <MegaMenu/>
          </div>  
          <Provider>
           {children}
          </Provider>  
          <Footer/>
    </div>
  )
}

export default FrontLayout