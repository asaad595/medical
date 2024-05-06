

import { auth } from "@/auth"
import { NavbarMenu } from "./NavBarMenu"

export const Navbar = async ()=> {
  const session = await auth()
  

  return (
    <>
    <NavbarMenu session = {session}/>
    
    </>

  )
}
