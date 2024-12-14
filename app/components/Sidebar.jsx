// import React from 'react'
import { BiBarChart } from 'react-icons/bi'
import { TbCertificate2 } from 'react-icons/tb'
import { CiFileOn } from 'react-icons/ci'

const Sidebar = () => {
  return (
    <div className='w-full border  border-t-0 h-[140vh] py-8 '>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center  rounded-r-[50px] gap-6  p-4 w-[95%]'>
          <BiBarChart className='text-xl' /> Dashboard
        </div>
        <div className='flex items-center font-bold rounded-r-[50px] gap-6 bg-gray-100 p-4 w-[95%] text-[#2563eb]'>
          <TbCertificate2 className='text-xl' /> Skill Test
        </div>
        <div className='flex items-center capitalize  rounded-r-[50px] gap-6  p-4 w-[95%]  font-bold'>
          <CiFileOn className='text-xl ' /> internship
        </div>
      </div>
    </div>
  )
}

export default Sidebar
