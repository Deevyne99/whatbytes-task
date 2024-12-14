import Image from 'next/image'
import htmlLogo from '../asset/html.png'
import cupLogo from '../asset/cup.webp'
import file from '../asset/file.jpg'
import done from '../asset/done.jpg'
import LineChart from './LineChartComponent'
import LineChartComponent from './LineChartComponent'
import graph from '../asset/graph.jpg'

// import React from 'react'

const SkillTest = ({ handleOpenModal, data, formData }) => {
  return (
    <div className='flex flex-col w-full  gap-4'>
      <div className='flex items-center border rounded-md gap-4 px-2'>
        <div className='p-4'>
          <Image src={htmlLogo} width={50} height={50} alt='html logo' />
        </div>
        <div className='flex-col flex'>
          <h2 className='font-bold'>Hyper Text Markup Language</h2>
          <p className='text-sm text-gray-500 mt-1'>
            Question: 08 | Duration: 15mins | Submited on 5 June 2021
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className='p-2 rounded-lg lg:w-[100px] w-[90px] bg-[#172554] text-[#fff] capitalize border'
        >
          update
        </button>
      </div>
      <div className='border w-full flex flex-col rounded-md p-2'>
        <h2 className='font-bold capitalize'>quick statistics</h2>
        <div className='grid grid-cols-3 pb-4'>
          <div className='p-4 flex md:flex-row flex-col justify-center items-center gap-2 border border-b-0 border-t-0 border-l-0'>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={cupLogo} width={25} height={25} alt='cup' />
            </div>
            <div className='flex md:items-start flex-col items-center'>
              <h3>1</h3>
              <p className='uppercase text-xs'>your rank</p>
            </div>
          </div>
          <div className='p-4 flex md:flex-row flex-col justify-center items-center gap-2 border border-b-0 border-t-0 border-l-0'>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={file} width={16} height={16} alt='cup' />
            </div>
            <div className='flex md:items-start flex-col items-center'>
              <h3>{formData.percentile}%</h3>
              <p className='uppercase text-xs'>percentile</p>
            </div>
          </div>
          <div className='p-4 flex md:flex-row flex-col justify-center items-center gap-2 '>
            <div className='bg-gray-100 h-[40px] w-[40px] rounded-full p-2 flex justify-center items-center'>
              <Image src={done} width={16} height={16} alt='cup' />
            </div>
            <div className='flex md:items-start flex-col items-center'>
              <h3>{formData.currentScore}</h3>
              <p className='uppercase text-xs font-light text-center'>
                Correct answer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='border w-full flex flex-col rounded-md p-2'>
        <h2 className='capitalize font-bold '>comparison graph</h2>
        <div className='flex items-center justify-between'>
          <p className='max-w-[500px] text-gray-500 text-sm'>
            <span className='font-bold '>
              you scored {!formData.percentile ? '90%' : formData.percentile}%
            </span>{' '}
            percentile which is lower than the average 72% of all the engineers
            who took this assessment
          </p>
          <div className='bg-gray-100 h-[50px] w-[50px] rounded-full p-2 flex justify-center items-center'>
            <Image alt='graph' src={graph} width={50} height={50} />
          </div>
        </div>
        <div className='mt-4'>
          <LineChartComponent data={data} />
        </div>
      </div>
    </div>
  )
}

export default SkillTest
