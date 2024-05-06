'use server'
//red import email template 
import EmailTemplate from "@/components/Emails/email-template";
import { prisma } from '@/lib/db'
import { LoginFormDataSchema, RegisterFormDataSchema } from '@/types/type'
import { AuthError } from 'next-auth'

import * as z from 'zod'
import bcryptjs from 'bcryptjs'
//red import the Resend From resend 
import { Resend } from "resend";
import { registerFormSchema } from "@/schemas/schema";
import { signIn } from "@/auth";


export const createUser = async (values: z.infer<typeof RegisterFormDataSchema> )=>{
    const resend = new Resend(process.env.RESEN_KEY)
    try {
        
        const isValidField = RegisterFormDataSchema.safeParse(values)
        const {username, email, password} = await RegisterFormDataSchema.parseAsync(values)
        const existUser = await prisma.user.findUnique({
            where:{
                email,
            }
        })

        if(existUser){
            return {
                data:null,
                message:`user with this email ${email} is allready exist in the database! `,
                status: 409
            }
        
        }

        const bcryptedPass = await bcryptjs.hash(password, 10)

        const generateToken = ()=>{
            const min = 1000000
            const max = 9999999
            return Math.floor(Math.random()* (max-min +1)) + min
        }

        const useToken = generateToken()

        const newUser = await prisma.user.create({
            data:{
                name:username,
                email,
                password:bcryptedPass,
                token:useToken,
                

            }
        })
        //wh ** sendin verfing email 

        const token = newUser.token
        const userId = newUser.id
        const name =  newUser.name
        const linkText = "Verfying your Account "
        const message= " Thank you for registering with Doctors app. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website : "
//red the function to send the mail 
        const sendMail = await resend.emails.send({
            from: "RedHawk Asaad App <onboarding@resend.dev>",
            to: 'fst.truck@gmail.com',
            subject: "Verify Your Email Address",
            react: EmailTemplate({ name, token, linkText, message }),
          });
//gre ** be sure the mail send           
          if(!sendMail){
            return {
                data:null,
                message:`Verifing email failed  `,
                status: 500
            }
          }

        return {
            data:newUser,
            message:"user was created Successfuly !",
            status:200
        }
    } catch (error) {
        return {
            error: " something went wrong !",
            
        }
        
    }
    // console.log(isValidField.data)
}

//gre  get user by id 

export const getUserById = async (id:string)=>{
    if(id){

        try {
            const user = await prisma.user.findUnique({
                where:{
                    id
                }
            })
            return user
            
        } catch (error) {
    
            console.log(error)
            
        }
    }
}

export const updateUserById = async (id:string)=>{
    if (id){
        try {
           const user= await prisma.user.update({
                where:{
                    id
                },
                data:{
                    isVerfied:true
   
                }
            })
            return user
            
        } catch (error) {
            
        }
    }
}

export const sigInPro = async (values: z.infer<typeof LoginFormDataSchema> )=>{
    const isValidField = await LoginFormDataSchema.parse(values)
    try {
        if(!isValidField){
            throw new Error("data send is not correct")
        }
        const {email, password} = isValidField
        
        const result = await signIn("credentials",{email,password, redirect:false} )
        console.log(result)

        return result
        
    } catch (error) {
        // if (error instanceof AuthError) {
        //   switch (error.type) {
        //     case "CredentialsSignin":
        //       return { error: "Invalid credentials!" }
        //     default:
        //       return { error: "Something went wrong!" }
        //   }
        // }
    
        // throw error;
        console.log(error)
      }
    
}