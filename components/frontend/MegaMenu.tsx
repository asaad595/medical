"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MagnetIcon } from "lucide-react"
import { usePathname } from "next/navigation"



const megaMenu = [
  {
    title: "Top Booked",
    services:[
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "UTI consult",
      slag:"UTI-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Video prescription refill",
      slag:"Video-prescription-refill",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Mental health consult",
      slag:"Mental-health-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      }

    ]
  },
  {
    title: "Doctors",
    services:[
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "UTI consult",
      slag:"UTI-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Video prescription refill",
      slag:"Video-prescription-refill",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Mental health consult",
      slag:"Mental-health-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      }

    ]
  },
  
  {
    title: "Spacialties",
    services:[
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "UTI consult",
      slag:"UTI-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Video prescription refill",
      slag:"Video-prescription-refill",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Mental health consult",
      slag:"Mental-health-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      }

    ]
  },
  {
    title: "Symptoms",
    services:[
      {
      title: "telehealth",
      slag:"tele-health",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "UTI consult",
      slag:"UTI-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Video prescription refill",
      slag:"Video-prescription-refill",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "ED consult",
      slag:"ED-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      },
      {
      title: "Mental health consult",
      slag:"Mental-health-consult",
      discription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem deserunt in repellendus officia nostrum ab itaque molestias animi voluptatum cum ipsa recusandae at,"
      }

    ]
  },
 
]


export function MegaMenu() {
  const pathName = usePathname()
  if(pathName === '/doctors/login' ||pathName === '/doctors/register') return null
  return (
    <div className="    bg-white w-full  py-2 mt-0 flex items-center ">
    <NavigationMenu className="max-w-[380px]  md:max-w-xl mx-auto" >
      <NavigationMenuList className=" px-2 space-x-0 xl:space-x-4">
        {
          megaMenu.map((menu,i)=>{return(

            <NavigationMenuItem className="bg-white rounded " key={i} >
          <NavigationMenuTrigger >{menu.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white lg:w-[650px]  rounded-xl ">
              {menu.services.map((component) => (
                <ListItem 
                  key={component.title}
                  title={component.title}
                  href={`services/${component.slag}`}
                >
                  {component.discription}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

          )})
        }
        
        
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink className="rounded hover:bg-gray-100" asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1  p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
