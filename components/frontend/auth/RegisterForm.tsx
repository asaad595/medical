'use client'
import * as z from 'zod'
import {  RegisterFormDataSchema } from '@/types/type'

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUser } from '@/actions/user'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SplitIcon } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from "next/navigation";




export const RegisterForm = () => {
  const router = useRouter()
  const {toast} = useToast()
  const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof RegisterFormDataSchema>>({
        resolver:zodResolver(RegisterFormDataSchema),
        defaultValues:{
          username:"",
            email:"",
            password:""
        }
    })

    const onSubmit = async(values: z.infer< typeof RegisterFormDataSchema> )=>{
      
      try {
        setIsLoading(true)
        const userCreated = await createUser(values)
          
          if(userCreated.status == 409){

            toast({title:"user exist",
              description:userCreated.message
            })
          }
          if(userCreated.status == 200){
            toast({title:"user has been Created",
              description:userCreated.message
            })
          }
          if(userCreated.status == 500){
            toast({title:"Verification not send",
              description:userCreated.message
            })
          }
         
        setIsLoading(false)
        form.reset()
        router.push(`/verifytoken/${userCreated.data?.id}`)
        

      } catch (error) {
        console.log(error)
        
      }

      
        
    }
  return (
    
     <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>User Name</FormLabel>
            <FormControl>
              <Input type='text' placeholder="asaad304..." {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
    
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type='email' placeholder="asaad@gmail.com" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="*********" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className={cn('w-full', )} type="submit" > <SplitIcon className={cn('hidden', isLoading && "animate-spin block")} /> Register</Button>
     </form>
    </Form>
   
  )
}
