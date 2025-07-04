import React from 'react'

import export2 from '../../../assets/exports/export2.png'

const Component3 = () => {
  return (
    <div className=' flex justify-between items-center md:items-start mt-[20px] md:mt-[100px] gap-2'>
      <div className=' w-[50%] md:w-[40%] h-auto flex justify-center items-center'>
        <img className=' w-[450px]' src={export2} alt='export1' loading="lazy" />
      </div>
      <div className=' w-[50%] md:w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] mb-[10px] md:mb-[50px]'>Available Fabric Options:</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Cotton –</span> Soft, breathable, and durable</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Poly Cotton –</span> Blend of strength and comfort</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Polyester –</span> Lightweight, wrinkle-resistant, fast-drying</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>And many more based on your need —</span> including blends, knits, and specialty weaves</li>
        </ul>
      </div>
    </div>
  )
}

export default Component3
