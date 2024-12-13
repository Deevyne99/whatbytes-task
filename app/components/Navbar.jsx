import Image from 'next/image'
import logo from '../asset/whatbytes-logo.jpg'
import user from '../asset/user.jpg'

Image
const Navbar = () => {
  return (
    <nav className='flex  w-full  justify-between items-center px-8 py-4 border'>
      <div className='flex justify-between items-center gap-4'>
        <Image src={logo} alt='logo' width={50} height={50} />
        <h2 className='text-2xl capitalize font-bold'>whatBytes</h2>
      </div>
      <div className='flex items-center gap-2 border p-1 rounded-md'>
        <Image
          src={user}
          alt='user'
          width={25}
          height={15}
          className='rounded-[50%]'
        />
        <h3 className='font-medium'>Rahil Siddique</h3>
      </div>
    </nav>
  )
}

export default Navbar
