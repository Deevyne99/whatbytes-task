import React from 'react'

const ProgressBar = ({ progress, status, desc }) => {
  return (
    <div className='flex flex-col '>
      <p className='capitalize'>{desc}</p>
      <div className='flex gap-6 items-center'>
        <div
          className={`${
            status === 'html'
              ? 'bg-[#eff6ff]'
              : status === 'css'
              ? 'bg-[#f0fdf4]'
              : status === 'tags'
              ? 'bg-[#fff7ed]'
              : status === 'table'
              ? 'bg-[#fef2f2]'
              : ''
          } w-full   rounded-full h-3 mt-4`}
        >
          <div
            className='bg-blue-500 h-3 rounded-full transition-all duration-300'
            style={{
              width: `${progress}%`,
              background: ` ${
                status === 'html'
                  ? '#1d4ed8'
                  : status === 'tags'
                  ? '#ea580c'
                  : status === 'table'
                  ? '#ef4444'
                  : status === 'css'
                  ? '#16a34a'
                  : ''
              }`,
            }}
          ></div>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <p
            className={`${
              status === 'html'
                ? 'text-[#1d4ed8]'
                : status === 'tags'
                ? 'text-[#ea580c]'
                : status === 'table'
                ? 'text-[#ef4444]'
                : status === 'css'
                ? 'text-[#16a34a]'
                : ''
            } font-bold`}
          >
            {progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
