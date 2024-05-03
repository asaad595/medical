import { FormCard } from '@/components/frontend/auth/FormCard'

import { RegisterForm } from '@/components/frontend/auth/RegisterForm'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='min-h-screen  h-full mt-[3rem] flex flex-col items-center justify-center bg-blue-100'>
        <FormCard header="Register" footerDes='if you  have an  account  ' footerLink='/doctors/login' footerLabel='Login'  >
            <RegisterForm/>
        </FormCard>
    </div>
  )
}

export default RegisterPage