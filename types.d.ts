import {User} from '@auth/prisma'
 
declare module "next-auth" {
  
   export interface Session {
    user: User
      
    } 
}
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
 
   export interface JWT {
   
    user: User
  }
}