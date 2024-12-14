import Image from 'next/image'

import target from '../asset/target.webp'

const CircularProgressBar = ({ value, max = 15, centerImage }) => {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className='relative w-[200px] h-[200px] flex items-center justify-center'>
      {/* Background Circle */}
      <div className='w-full h-full rounded-full bg-[#eff6ff]'></div>

      {/* Foreground Circle (Progress) */}
      <div
        className='absolute top-0 left-0 w-full h-full rounded-full'
        style={{
          background: `conic-gradient(
            #3b82f6 ${percentage * 3.6}deg, 
            transparent 0deg
          )`,
        }}
      ></div>

      {/* Center Image */}
      <div className='absolute w-36 h-36 bg-white rounded-full flex items-center justify-center'>
        <Image src={target} width={40} height={40} alt='target' />
      </div>

      {/* Percentage Text */}
    </div>
  )
}
export default CircularProgressBar
