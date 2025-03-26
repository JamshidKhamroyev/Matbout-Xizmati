import image1 from '../../assets/home1.jpg'
import image2 from '../../assets/home2.png'
import SideBar from '../sideBar/sideBar'

const HomePage = () => {
  return (
    <section className="w-full py-8 flex justify-around">
      <div className='flex flex-col gap-2 w-2/4 shadow-md justify-center items-center mx-12'>
        <div className='w-full h-[90vh] py-2 overflow-y-hidden relative'>
          <img src={image1} alt={image1} className='w-full h-full' />
        </div>

        <div className='w-full h-[90vh] py-2 overflow-y-hidden relative'>
          <img src={image2} alt={image2}  className='w-full h-full'/>
        </div>
      </div>

      <SideBar />
    </section>
  )
}

export default HomePage