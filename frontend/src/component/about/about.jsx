import SideBar from "../sideBar/sideBar"

const About = () => {
  return (
    <section className={`py-12 md:px-5 flex justify-around items-start max-md:flex-col max-md:gap-4 max-md:px-2`}>
        <div className="md:w-2/4 w-full flex flex-col shadow-md gap-2 p-4 bg-white">
            <div className='w-full bg-[#13aff0]/50 px-4 py-3 rounded-sm'>
            <h2 className='text-[17px] font-semibold uppercase'>Uzun Tuman axborot-Kutubxona markazi</h2>
            </div>

            <div className='w-full bg-[#13aff0]/50 px-4 py-3 rounded-sm'>
            <h2 className='text-[17px] font-semibold'>ДЕНОВ ТУМАН АХБОРОТ-КУТУБХОНА МАРКАЗИ ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ 2019 ЙИЛ 7 ИЮНДАГИ “ЎЗБЕКИСТОН РЕСПУБЛИКАСИ  АҲОЛИСИГА АХБОРОТ-КУТУБХОНА ХИЗМАТИ КЎРСАТИШНИ ЯНАДА ТАКОМИЛЛАШТИРИШ ТЎҒРИСИДА” ГИ ПҚ 4354-СОНЛИ ҚАРОРИ АСОСИДА 2019 ЙИЛ НОЯБР ОЙИДАН ЎЗ ИШ ФАОЛИЯТИ БОШЛАДИ.</h2>
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