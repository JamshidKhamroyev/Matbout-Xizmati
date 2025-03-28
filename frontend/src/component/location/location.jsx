import SideBar from '../sideBar/sideBar'

const Location = () => {
  return (
    <section className={`py-12 md:px-5 flex justify-around items-start max-md:flex-col max-md:gap-6`}>
        <div className="md:w-2/4 w-full flex flex-col shadow-md gap-2 p-4 bg-white">
          <h2 className='md:text-xl text-[15px] my-2'>Manzilimiz: Denov tuman «Do’stlik kurg’oni», «Buyuk Ipak yo’li» kuchasi — 1 uy</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Mo’ljal: 2-son kasb-xunar maktabi</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Telefonlar: +998 (99) 715 71 59 , +998 (97) 552 34 32</h2>
          <h2 className='md:text-xl text-[15px] my-2'>E-mail: denov_akm@natlib.uz</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Sayt manzili: http://denovtakm.uz</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Kutubxonaning ish tartibi: 9:00 dan 18:00 gacha.</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Dam olish kuni: Yakshanba</h2>
          <h2 className='md:text-xl text-[15px] my-2'>Tozalik kuni: Har oyning birinchi Seshanbasi</h2>
        </div>
        <SideBar />
    </section>
  )
}

export default Location