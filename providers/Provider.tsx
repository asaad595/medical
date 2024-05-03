import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Provider = ({
    children 
}:
{ children : React.ReactNode}
) => {
  return (
    <div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        {children}
    </div>
  )
}

export default Provider