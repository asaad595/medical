import * as z from 'zod'


export const  RegisterFormDataSchema = z.object({
  username: z.string().min(3,{message:"Please  the minimal i 3 characters"}),
  email: z.string().email(),
  password: z.string().min(6,{message:"The Minmal Characters are 6  "})
}) 
 
export const  LoginFormDataSchema = z.object({
  email: z.string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})
