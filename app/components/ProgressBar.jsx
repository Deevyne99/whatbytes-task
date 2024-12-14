import React from 'react'

const ProgressBar = ({ progress, status, desc }) => {
  return (
    <div className='flex flex-col '>
      <p className='capitalize'>{desc}</p>
      <div className='flex gap-6'>
        <div className='w-full  bg-[#eee] rounded-full h-4 mt-2'>
          <div
            className='bg-blue-500 h-4 rounded-full transition-all duration-300'
            style={{
              width: `${progress}%`,
              background: ` ${
                status === 'html'
                  ? '#ea580c'
                  : status === 'tags'
                  ? '#0284c7'
                  : status === 'tables'
                  ? '#dc2626'
                  : status === 'css'
                  ? '#16a34a'
                  : '#eee'
              }`,
            }}
          ></div>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <p>+12%</p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
