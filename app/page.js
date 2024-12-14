import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SkillTest from './components/SkillTest'
import Syllabus from './components/Syllabus'

export default function Home() {
  return (
    <div className='flex flex-col '>
      <div>
        <Navbar />
      </div>
      <div className='flex gap-10'>
        <div className='w-[20%] h-screen '>
          <Sidebar />
        </div>
        <div className='w-[90%] h-screen '>
          <div className='flex gap-8 w-full'>
            <div className='flex  h-screen w-[60%]'>
              <SkillTest />
            </div>
            <div className='flex  w-[40%] h-screen'>
              <Syllabus />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
