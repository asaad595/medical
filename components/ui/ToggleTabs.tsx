import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const Switcher2 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className={cn('dot absolute duration-300 transition-all left-1 top-1 h-6 w-6 rounded-full  ',isChecked ?"bg-blue-500":"bg-white")}></div>
        </div>
      </label>
    </>
  )
}

export default Switcher2