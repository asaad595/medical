'use client'

import { usePathname } from "next/navigation"

export const Breacramp = () => {
    const pathName = usePathname()
    const title = pathName.slice(11)
  return (
    <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{title ? title : "DashBoard"}</h1>
    </div>
  )
}
