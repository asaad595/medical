'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,footerLabel } from "@/components/ui/card"
import Link from "next/link"

interface FormCardProps {
    header:string,
    footerLink:string,
    footerDes:string
    footerLabel:string
    children:React.ReactNode
}

export const FormCard = ({header, footerLink, footerDes, children, footerLabel}:FormCardProps) => {
  return (
    <Card className="min-w-[450px]">
        <CardHeader>
            <CardTitle>{header}</CardTitle>
        </CardHeader>
        <CardContent>

            {children}
        </CardContent>
        <CardFooter>
            <CardDescription> {footerDes} <Link className="text-blue-600 underline font-semibold" href={footerLink} >{footerLabel}</Link>  </CardDescription>
        </CardFooter>

    </Card>

   
  )
}
