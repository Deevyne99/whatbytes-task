import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className='flex flex-col '>
      <div>
        <Navbar />
      </div>
      <div className='flex gap-12'>
        <div className='w-[20%] h-screen '>
          <Sidebar />
        </div>
        <div className='w-[80%] h-screen '>
          <div className='flex gap-8 w-full'>
            <div className='flex  h-screen w-[60%]'></div>
            <div className='flex  w-[40%] h-screen'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
