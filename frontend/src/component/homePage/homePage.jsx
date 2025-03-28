import image1 from '../../assets/home1.jpg'
import image2 from '../../assets/home2.png'
import SideBar from '../sideBar/sideBar'

const HomePage = () => {
  return (
    <section className="w-full py-8 flex justify-around max-md:flex-col max-md:gap-6">
      <div className='flex flex-col gap-2 md:w-2/4 w-full shadow-md justify-center items-center md:mx-12 max-md:px-2'>
        <div className='w-full md:h-[90vh] h-[60vh] py-2 overflow-y-hidden relative'>
          <img src={image1} alt={image1} className='w-full h-full' />
        </div>

        <div className='w-full md:h-[90vh] h-[60vh] py-2 overflow-y-hidden relative'>
          <img src={image2} alt={image2}  className='w-full h-full'/>
        </div>
      </div>

      <SideBar />
    </section>
  )
}

export default HomePage