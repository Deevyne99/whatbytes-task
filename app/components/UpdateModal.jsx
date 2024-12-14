// import React from 'react'
import Modal from './Modal'
import Image from 'next/image'
import htmlLogo from '../asset/html.png'
import { FaArrowRight } from 'react-icons/fa6'

const UpdateModal = ({
  openModal,
  handleOpenModal,
  formData,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <Modal openModal={openModal}>
      <div
        className={`${
          openModal ? 'flex' : 'hidden'
        }  flex-col p-8 bg-white max-w-[500px] rounded-md h-[400px] mx-auto mt-12 w-[95%]`}
      >
        <div className='flex justify-between'>
          <h2 className='font-bold text-xl'>Update score</h2>
          <Image src={htmlLogo} width={50} height={50} alt='logo' />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col mt-6 gap-4'>
          <div className='flex justify-between items-center '>
            <div className='flex gap-4 items-center'>
              <div className='flex w-[25px] items-center bg-[#172554] text-[#fff] h-[25px] justify-center rounded-full'>
                <p>1</p>
              </div>
              <p>update your rank</p>
            </div>
            <div>
              <div>
                <input
                  type='text'
                  className='border p-1 rounded-md w-[160px]'
                  name='rank'
                  value={formData.rank}
                  onChange={handleChange}
                />
                {errors.rank && (
                  <p className='text-sm text-[#dc2626]'>{errors.rank}</p>
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <div className='flex gap-4 items-center'>
              <div className='flex w-[25px] items-center bg-[#172554] text-[#fff] h-[25px] justify-center rounded-full'>
                <p>2</p>
              </div>
              <p>update your Percentile</p>
            </div>
            <div>
              <div>
                <input
                  type='text'
                  className='border p-1 rounded-md w-[160px]'
                  value={formData.percentile}
                  name='percentile'
                  onChange={handleChange}
                />
                {errors.rank && (
                  <p className='text-sm text-[#dc2626]'>{errors.percentile}</p>
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <div className='flex gap-4 items-center'>
              <div className='flex w-[25px] items-center bg-[#172554] text-[#fff] h-[25px] justify-center rounded-full'>
                <p>3</p>
              </div>
              <p>update your current score</p>
            </div>
            <div>
              <div>
                <input
                  type='text'
                  className='border p-1 rounded-md w-[160px]'
                  name='currentScore'
                  value={formData.currentScore}
                  onChange={handleChange}
                />
                {errors.currentScore && (
                  <p className='text-sm text-[#dc2626]'>
                    {errors.currentScore}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='flex  gap-4 ml-auto'>
            <button
              type='button'
              onClick={() => handleOpenModal()}
              className='border text-[#172554] font-bold rounded-md border-[#172554] p-2'
            >
              cancel
            </button>
            <button
              type='submit'
              className='bg-[#172554] flex gap-2 text-[#fff]  justify-center rounded-md p-2 w-[100px] items-center'
            >
              save <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default UpdateModal
