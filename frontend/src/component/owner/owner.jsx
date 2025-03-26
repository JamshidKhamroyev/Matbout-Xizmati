import image1 from '../../assets/home1.jpg'
import image2 from '../../assets/home2.png'
import SideBar from '../sideBar/sideBar'

const Owner = () => {
  return (
    <section className="w-full flex justify-around py-12">
      <div className='flex flex-col gap-2 w-2/4 shadow-md justify-between items-start p-8 mx-12 bg-white'>
        <div className='h-[300px] w-[300px] border'>
          <img src={image1} alt={image1} className='w-full h-full'/>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='text-[17px] font-semibold'>Direktor :  Shermatova Rano Madjidovna</h2>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='text-[17px] font-semibold'>Telefon : +998 (99)-715-71-59, +998 (97)-552-34-32</h2>
        </div>

        <div className='w-full bg-[#13aff0] px-4 text-white py-3 rounded-sm'>
          <h2 className='text-[17px] font-semibold'>Qabul kunlari : Dushanbadan jumagacha, har ish kuni  soat 9-00 dan 17-00 gacha 
Е-mail: denov_akm@natlib.uz</h2>
        </div>
      </div>
      <SideBar />
    </section>
  )
}

export default Owner