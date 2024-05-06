'use client'
import * as z from 'zod'
import { LoginFormDataSchema } from '@/types/type'
import { signIn } from "@/auth"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sigInPro } from '@/actions/user'
import { useRouter } from 'next/navigation'



export const LoginForm = () => {
  const router = useRouter()
    const form = useForm<z.infer<typeof LoginFormDataSchema>>({
        resolver:zodResolver(LoginFormDataSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit = async (values: z.infer< typeof LoginFormDataSchema> )=>{
      
     const dataResult=  await sigInPro(values)

     console.log("the result came from singIn", dataResult)
     

       router.push("/dashboard")
     

    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <Input type='password' placeholder="asaad@gmail.com" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}
