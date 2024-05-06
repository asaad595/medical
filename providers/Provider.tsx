import React from 'react'


import { Toaster } from "@/components/ui/toaster"
import { useSession, SessionProvider } from "next-auth/react"
import { auth } from '@/auth'

const Provider = async ({
    children 
}:
{ children : React.ReactNode}
) => {
  const session = await auth()
  return (
    <div>
       <SessionProvider session={session}>

        {children}
       </SessionProvider>

        <Toaster/>
    </div>
  )
}

export default Provider