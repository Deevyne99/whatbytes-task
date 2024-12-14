import Image from 'next/image'
import htmlLogo from '../asset/html.png'
import cupLogo from '../asset/cup.webp'
import file from '../asset/file.jpg'
import done from '../asset/done.jpg'
// import React from 'react'

const SkillTest = () => {
  return (
    <div className='flex flex-col w-full mt-8 gap-4'>
      <p>Skill test</p>
      <div className='flex items-center border rounded-md gap-4'>
        <div className='p-4'>
          <Image src={htmlLogo} width={50} height={50} alt='html logo' />
        </div>
        <div className='flex-col flex'>
          <h2 className='font-bold'>Hyper Text Markup Language</h2>
          <p className='text-sm '>
            Question: 08 | Duration: 15mins | Submited on 5 June 2021
          </p>
        </div>
        <button className='p-2 rounded-lg w-[100px] bg-[#172554] text-[#fff] capitalize border'>
          update
        </button>
      </div>
      <div className='border w-full flex flex-col rounded-md p-2'>
        <h2>quick jobs</h2>
        <div className='grid grid-cols-3 pb-4'>
          <div className='p-4 flex gap-2 border border-b-0 border-t-0 border-l-0'>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={cupLogo} width={25} height={25} alt='cup' />
            </div>
            <div>
              <h3>1</h3>
              <p className='uppercase text-xs'>your rank</p>
            </div>
          </div>
          <div className='p-4 flex gap-2 border border-b-0 border-t-0 border-l-0'>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={file} width={20} height={20} alt='cup' />
            </div>
            <div>
              <h3>30%</h3>
              <p className='uppercase text-xs'>percentile</p>
            </div>
          </div>
          <div className='p-4 flex gap-2  border-b-0 border-t-0 border-l-0'>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={done} width={20} height={20} alt='cup' />
            </div>
            <div>
              <h3>10 / 15</h3>
              <p className='uppercase text-xs'>correct answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillTest
