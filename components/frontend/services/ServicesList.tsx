import React from 'react'
import ServicesCard from './ServicesCard'
export type ServicePro = {
       title:string, 
       image:string, 
       slug:string, 
}
export  const ServicesList= ({data}:{data?:ServicePro[]}) => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6'>
        {
           data && data.map((service,i)=>{

              return  (<ServicesCard key={i} service={service} />)
            }

            )
        }
       
        
       

    </div>
  )
}


