'use server'
import EmailTemplate from "@/components/Emails/email-template";
import { prisma } from '@/lib/db'
import { RegisterFormDataSchema } from '@/types/type'
import { NextResponse } from 'next/server'
import * as z from 'zod'
import bcryptjs from 'bcryptjs'
import { Resend } from "resend";


export const createUser = async (values: z.infer<typeof RegisterFormDataSchema> )=>{
    const resend = new Resend(process.env.RESEN_KEY)
    try {
        
        const isValidField = RegisterFormDataSchema.safeParse(values)
        const {username,email,password} = isValidField.data
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
                username,
                email,
                password:bcryptedPass,
                token:useToken,
                

            }
        })
        //wh ** sendin verfing email 

        const token = newUser.token
        const userId = newUser.id
        const username1 = newUser.username
        const linkText = "Verfying your Account "
        const message= " Thank you for registering with Doctors app. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website : "

        const sendMail = await resend.emails.send({
            from: "RedHawk Asaad App <onboarding@resend.dev>",
            to: 'fst.truck@gmail.com',
            subject: "Verify Your Email Address",
            react: EmailTemplate({ username1, token, linkText, message }),
            

          });
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