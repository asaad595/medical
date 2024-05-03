import React from 'react'

import { Toaster } from "@/components/ui/toaster"

const Provider = ({
    children 
}:
{ children : React.ReactNode}
) => {
  return (
    <div>

        {children}

        <Toaster/>
    </div>
  )
}

export default Provider