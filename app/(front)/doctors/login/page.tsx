import { FormCard } from '@/components/frontend/auth/FormCard'
import { LoginForm } from '@/components/frontend/auth/LoginForm'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='min-h-screen  h-full mt-[3rem] flex flex-col items-center justify-center bg-blue-100'>
        <FormCard header="Login" footerDes='if you don not have account  ' footerLink='/doctors/register' footerLabel='Register'  >
            <LoginForm/>
        </FormCard>
    </div>
  )
}

export default LoginPage