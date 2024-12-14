'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SkillTest from './components/SkillTest'
import Syllabus from './components/Syllabus'
import UpdateModal from './components/UpdateModal'
import NavModal from './components/NavModal'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [opennav, setOpenNav] = useState(false)
  const [data, setData] = useState([
    {
      rank: 1,
      name: 0,
      percentile: 20,
      amt: 9,
    },
    { rank: 2, name: 25, percentile: 45, amt: 10 },
    { rank: 3, name: 50, percentile: 50, amt: 10 },
    { rank: 4, name: 75, percentile: 30, amt: 12 },
    { rank: 5, name: 100, percentile: 60, amt: 13 },
  ])
  const [formData, setFormData] = useState({
    rank: 1,
    percentile: 90,
    currentScore: 10,
  })
  const [errors, setErrors] = useState({})

  const handleOpenNav = () => {
    setOpenNav(!opennav)
  }

  const validate = () => {
    const newErrors = {}

    Object.entries(formData).forEach(([key, value]) => {
      if (value === '') {
        newErrors[key] = 'This field cannot be empty'
      } else if (isNaN(value)) {
        newErrors[key] = 'This field must be a number'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      const updatedPercentile = parseInt(formData.percentile)

      if (!isNaN(updatedPercentile)) {
        const updatedData = [...data]
        updatedData[updatedData.length - 1].percentile = updatedPercentile
        setData(updatedData)

        const lastEntry = updatedData[updatedData.length - 1]
        setFormData({
          rank: '',
          percentile: lastEntry.percentile.toString(),
          currentScore: '',
        })

        setOpenModal(false)
      } else {
        alert('Invalid percentile value.')
      }
    }
  }

  const handleOpenModal = () => {
    if (openModal) {
      setOpenModal(false)
    } else {
      const lastEntry = data[data.length - 1]
      const lastScore = data[data.length - 1]
      const lastRank = data[data.length - 1]
      setFormData({
        rank: lastRank.rank.toString(),
        percentile: lastEntry.percentile.toString(),
        currentScore: lastScore.amt.toString(),
      })
      setErrors({})
      setOpenModal(true)
    }
  }

  return (
    <div className='flex flex-col '>
      <div>
        <Navbar handleOpenNav={handleOpenNav} />
      </div>
      <div className='md:flex-row flex-col flex gap-10'>
        <div className='w-[20%] hidden lg:flex flex-col '>
          <Sidebar />
        </div>
        <div className='w-full lg:w-full  '>
          <div className='flex flex-col mt-12 mx-4'>
            <p className='px-4 capitalize text-left'>skill test</p>
            <div className='flex flex-col md:flex-row  gap-8 w-full  md:mx-0 mt-2'>
              <div className='flex  h-screen w-full lg:w-[60%] '>
                <SkillTest
                  handleOpenModal={handleOpenModal}
                  data={data}
                  formData={formData}
                />
              </div>
              <div className='flex w-full  lg:w-[40%] '>
                <Syllabus formData={formData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UpdateModal
          formData={formData}
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </div>
      <div>
        <NavModal openModal={opennav} handleOpenNav={handleOpenNav} />
      </div>
    </div>
  )
}
