import React from 'react'

export const SectionHeading = ({title}:{title?:string}) => {
  return (
    <h2 className='mb-3  font-bold leading-[1.2] text-dark dark:text-white text-[1rem] xl:text-[1.6rem]  '>
        {title}
    </h2>
  )
}
