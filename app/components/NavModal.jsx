import Modal from './Modal'
import { BiBarChart } from 'react-icons/bi'
import { TbCertificate2 } from 'react-icons/tb'
import { CiFileOn } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

const NavModal = ({ openModal, handleOpenNav }) => {
  return (
    <Modal openModal={openModal}>
      <div
        className={`${
          openModal ? 'flex flex-col' : 'hidden'
        } w-[85%] max-w-[400px] bg-[#fff]  `}
      >
        <button
          onClick={() => handleOpenNav()}
          className='flex ml-auto mt-8 pr-4'
        >
          <IoMdClose className='text-2xl' />
        </button>
        <div className='flex flex-col gap-6 mt-12'>
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
    </Modal>
  )
}
export default NavModal
