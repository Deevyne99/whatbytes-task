import CircularProgressBar from './PieChartComponent'
import ProgressBar from './ProgressBar'

// import React from 'react'

const Syllabus = ({ formData }) => {
  return (
    <div className='flex flex-col w-full mt-32 md:mt-0'>
      <div className=' border h-[450px] gap-8 flex flex-col rounded-md p-4 w-full'>
        Syllabus
        <div>
          <ProgressBar
            progress={80}
            status={'html'}
            desc={'Html tools, forms, history'}
          />
        </div>
        <div>
          <ProgressBar
            progress={90}
            status={'tags'}
            desc={'tags & refrences in html'}
          />
        </div>
        <div>
          <ProgressBar
            progress={40}
            status={'table'}
            desc={'table & refrences in html'}
          />
        </div>
        <div>
          <ProgressBar
            progress={70}
            status={'css'}
            desc={'table & css basics'}
          />
        </div>
      </div>
      <div className='flex flex-col mt-8 w-full border rounded-md p-4'>
        <div className='flex justify-between'>
          <h2 className='capitalize'>question analysis</h2>
          <h2 className='text-[#1e3a8a] font-bold'>
            {formData.currentScore}/15
          </h2>
        </div>
        <p className='max-w-[500px] text-gray-500 text-sm'>
          <span className='font-bold '>
            you scored {formData.currentScore} correct out of 15.
          </span>{' '}
          However it still needs some improvement.
        </p>
        <div className='w-full h-[200px] mt-4 flex justify-center items-center'>
          <CircularProgressBar max={15} value={formData.current || 12} />
        </div>
      </div>
    </div>
  )
}

export default Syllabus
