import Navbar from '@/components/frontend/NavBar'
import React, { Children } from 'react'

const FrontLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default FrontLayout