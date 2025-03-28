import image1 from '../../assets/home1.jpg'
import SideBar from '../sideBar/sideBar'

const Owner = () => {
  return (
    <section className="w-full flex justify-around py-12 max-md:flex-col max-md:gap-6 max-md:px-2">
      <div className='flex flex-col gap-2 md:w-2/4 w-full shadow-md justify-between items-start md:p-8 md:mx-12 bg-white'>
        <div className='md:h-[300px] h-[200px] md:w-[300px] w-[200px] md:border'>
          <img src={image1} alt={image1} className='w-full h-full'/>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='md:text-[17px] text-[15px] font-semibold'>Direktor :  Shermatova Rano Madjidovna</h2>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='md:text-[17px] text-[15px] font-semibold'>Telefon : +998 (99)-715-71-59, +998 (97)-552-34-32</h2>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='md:text-[17px] text-[15px] font-semibold'>Qabul kunlari : Dushanbadan jumagacha, har ish kuni  soat 9-00 dan 17-00 gacha 
Е-mail: denov_akm@natlib.uz</h2>
        </div>
      </div>
      
      <SideBar />
    </section>
  )
}

export default Owner