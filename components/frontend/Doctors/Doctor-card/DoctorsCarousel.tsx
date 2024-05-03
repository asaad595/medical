import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DoctorCard } from "../DoctorCard"
interface CarouselProp {
    isInPerson?:boolean,
     map?:boolean
}
export function DoctorsCArousel( {isInPerson, map}:CarouselProp) {
  const doctorsInfo = [
    { name:"Dr. Asaad Alahmar", slug:"asaad_alahmar"},
    { name:"Dr. Jamil Alahmar", slug:"jamil_alahmar"},
    { name:"Dr. Farah Alahmar", slug:"Farah_alahmar"},
    { name:"Dr. Nour Alahmar", slug:"Nour_alahmar"},
    { name:"Dr. Marou Alahmar", slug:"Marou_alahmar"},
    { name:"Dr. Rouba Alahmar", slug:"Rouba_alahmar"},
    { name:"Dr. Wadea Alahmar", slug:"Wadea_alahmar"},
    { name:"Dr. Majed Shaheen", slug:"Wadea_alahmar"},
  ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  px-6"
    >
      <CarouselContent>
        {doctorsInfo.map((doctor, index) => {
          
          return (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
              <DoctorCard isInPerson={isInPerson} doctorName= {doctor.name} doctorLink= {doctor.slug} map={map}/>
            </div>
          </CarouselItem>
        )})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
