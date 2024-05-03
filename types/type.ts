import * as z from 'zod'


export const  RegisterFormDataSchema = z.object({
  username: z.string().min(3,{message:"Please  the minimal i 3 characters"}),
  email: z.string().email(),
  password: z.string().min(6,{message:"The Minmal Characters are 6  "})
}) 
 
export const  LoginFormDataSchema = z.object({
  
  email: z.string().email(),
  password: z.string().min(6,{message:""})
})
