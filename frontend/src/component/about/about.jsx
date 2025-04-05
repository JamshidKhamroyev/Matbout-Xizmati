import SideBar from "../sideBar/sideBar"

const About = () => {
  return (
    <section className={`py-12 md:px-5 flex justify-around items-start max-md:flex-col max-md:gap-4 max-md:px-2`}>
        <div className="md:w-2/4 w-full flex flex-col shadow-md gap-2 p-4 bg-white">
            <div className='w-full bg-[#13aff0]/50 px-4 py-3 rounded-sm'>
            <h2 className='text-[17px] font-semibold uppercase'>Uzun Tuman axborot-Kutubxona markazi</h2>
            </div>

            <div className='w-full bg-[#13aff0]/50 px-4 py-3 rounded-sm'>
            <h2 className='text-[17px] font-semibold'>Uzun Tumani Axborot Markazi O'zbekiston Resbuplikasi Prezidentining 2019 yil 7 iyundagi “O'zbekiston Respublikasi Aholisiga Axborot-Kutubxona Xizmati Ko'rsatishni Yanada Takomillashtirish to'g'risida GI PK 4354-sonli qarori asosida 2019 yil noyabr oyidan o'z ish faoliyatini boshladi.</h2>
            </div>

            <div className='w-full bg-[#13aff0]/50 px-4 py-3 rounded-sm'>
            <h2 className='text-[17px] font-semibold uppercase'>Jami kitoblar fondi- 27032 nomda 66834 nusxa</h2>
            </div>
        </div>

        <SideBar />
    </section>
  )
}

export default About