
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./lib/db"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { LoginFormDataSchema } from "./types/type"
import bcryptjs  from 'bcryptjs'
import * as z from 'zod'
import {Adapter} from 'next-auth/adapters'
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import { Router } from "next/router"


 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    secret:process.env.AUTH_SECRET,
    session:{strategy:"jwt"},
    callbacks:{
      jwt({ token, user }) {
        if (user) { // User is available during sign-in
          token.user = user as User 
        }
        return token
      },
      session({ session, token }) {
        session.user  = token.user 
        return session
      },
    },
    providers: [
      Credentials({
        name:"crdentials",
          credentials: {
              email: {
                  label:"Email",
                  type:"email",
                  placeholder:"Your Email: asaad@yahoo.com"
                },
                password: {
                  label:"Password",
                  type:"password",
                  placeholder:"***********"
                },
            },
            authorize : async(credentials)=> {
        
              const validatedFields = await LoginFormDataSchema.parse(credentials)
            
      
              if (!validatedFields) {
                throw new Error ("data not correct ")
              }
                const { email, password } = validatedFields;
                
                
                const user = await prisma.user.findUnique({
                  where:{
                    email
                  }
                });
                if (!user || !user.password) return null;
      
                const passwordsMatch = await bcryptjs.compare(
                  password,
                  user.password,
                )
                if(!passwordsMatch){
                  throw new Error("the password isnot correct ")

                  
                }
                
                const {password:string,token ,emailVerified, createdAt,updatedAt, ...newuser} = user
                if(!newuser.isVerfied){
                  throw new Error ("need vrifing") 
                    
                  
                }else{

                  return newuser
                }

                                
              }     
            
      })
      
  
    ],
})