import SideBar from '../sideBar/sideBar'

const Location = () => {
  return (
    <section className={`py-12 md:px-5 flex justify-around items-start max-md:flex-col max-md:gap-6`}>
        <div className="md:w-2/4 w-full flex flex-col shadow-md gap-2 p-4 bg-white">
          <h2 className='md:text-xl text-[15px] my-2'>Manzilimiz: Uzun tuman</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Telefonlar: +998 (99) 733-32-28</h2>
          <h2 className='md:text-xl text-[15px] my-2'>E-mail: uzun_akm@natlib.uz</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Sayt manzili: http://uzuntakm.uz</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Kutubxonaning ish tartibi: 9:00 dan 18:00 gacha.</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Dam olish kuni: Yakshanba</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Tozalik kuni: Har oyning birinchi Seshanbasi</h2>
        </div>
        <SideBar />
    </section>
  )
}

export default Location