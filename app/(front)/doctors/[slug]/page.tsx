import { ServAvaiSection } from '@/components/frontend/Doctors/singleDoctor/ServAvaiSection'
import Image from 'next/image'
import React from 'react'

const SinglDoctorsPage = async () => {
  return (
    <section className=' bg-slate-50 min-h-screen flex flex-col items-center mt-[8rem]'>
        <div className='max-w-4xl bg-white mt-10 shadow-2xl w-full  border border-gray-400'>
            {/* //wh ** top section  */}
            <div className='py-6 flex flex-row gap-x-4 px-5 '>
                <div className=' px-4 w-3/4 flex flex-col '>

                    <h1 className='text-gray-700 text-[1.8rem] '>Dr. Asaad Name</h1>

                </div>
                <div className='relative px-4 w-1/4  flex justify-end items-center '>
                   <Image src={"/doctor/Doctor.png"} alt='doctor' width={100} height={150} className='w-24 shadow-1 h-24 rounded-full   ' />
                </div>

            </div>
            {/* //wh ** servidce and aviblatiy   */}
            <div className='w-full'>
                <ServAvaiSection/>
            </div>

        
        </div>
    </section>
  )
}

export default SinglDoctorsPage