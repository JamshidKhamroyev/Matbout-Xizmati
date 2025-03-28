import Logo from '../../assets/logo.jpg'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
    const header = useRef(null)
    const [active, sertActive] = useState("Asosiy || qism")
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const navigate = useNavigate()

    const links = [
        {title: "Tadbirlar", route: "blogs"},
        {title: "Rahbariyat", route: "owner"},
        {title: "Kutubxona bilan tanishish", route: "about"},
        {title: "Kutubxona manzili", route: "location"},
        {title: "Bog'lanish", route: "contact"},
    ]

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(scrollY > 190){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })

        const linklar = document.querySelectorAll(".linksNav")
        linklar.forEach(item => {
            item.addEventListener("click", () => {
                setOpen(false)
            })
        })

        document.title = active
    },[active])

    const getYear = () => {
        const time = new Date()
        return time.getFullYear() - 1875
    }
  return (
    <header className={`w-full relative pt-3 md:h-[60vh] flex flex-col justify-between items-start top-0 left-0 shadow-2xl`}>
            <div className="h-[60%] absolute top-0 left-0 w-full bg-black/80 md:-z-[1] max-md:z-10"></div>
            <img src="https://www.insanefreedom.com/wp-content/uploads/2020/08/nathan-da-silva-k-rKfqSm4L4-unsplash-scaled.jpg" alt="sdas" className="absolute top-0 left-0 -z-[2] w-full h-full"/>
            <Link to={"/"} onClick={() => sertActive("Asosiy || qism")} className="flex max-md:z-[11] max-md:text-center px-4 justify-center items-center md:gap-2 gap-1 cursor-pointer">
                <img src={Logo} alt={"dafelur"} className="w-[50px] max-md:hidden rounded-full" />
                <h2 className="text-3xl font-semibold Poppins text-white">Uzun Tuman Axborot kutubxona markazi</h2>
            </Link>

            <div className="flex items-center justify-center gap-1 text-5xl absolute top-4 right-4 text-white">
                <div className="flex items-center justify-center md:hidden">
                    {!open && (
                        <i className="fa-solid fa-bars text-3xl cursor-pointer z-[12]" onClick={() => setOpen(prev => !prev)}></i>
                    )}
                </div>
            </div>

            <ul ref={header} className={`flex ${open ? "top-0 z-[2312312]" : "-top-[600px]"} justify-end fixed ${scroll ? "md:top-0 md:bg-white md:text-black md:shadow-md" : "md:text-white md:top-[10vh]"} right-0 px-10 w-full py-2 md:z-[124] max-md:absolute max-md:flex-col max-md:py-4 duration-300 max-md:justify-center max-md:items-center max-md:w-full max-md:bg-white max-md:text-black gap-2`}>
                {links.map(item => (
                    <NavLink onClick={() => sertActive(item.title)} key={item.route} to={`/${item.route}`} className={`md:text-xl linksNav font-semibold py-2 max-md:hover:text-white ${scroll ? "hover:text-white md:py-4" : "md:py-8"} px-6 ${active === item.title ? "bg-[#13aff0] text-white" : ""} relative group duration-300`}>{item.title} <p className="absolute top-0 left-0 w-full -z-10 group-hover:bg-[#13aff0] h-0.5 group-hover:h-full duration-300"></p></NavLink>
                ))}
                {open && (
                    <i className="fa-solid fa-xmark md:hidden text-3xl cursor-pointer z-[18] text-black absolute top-2 right-2" onClick={() => setOpen(prev => !prev)}></i>
                )}
            </ul>
        

            {/* Info the page */}
            <div className="pb-20 pt-3 w-full bg-black/40 z-[12] text-white text-center">
                <h2 className="md:text-5xl text-2xl max-md:pb-4 Itim font-semibold mb-2">{active === "Asosiy || qism" ? `Mahmudxo‘ja Behbudiy tavalludining ${getYear()} yilligini` : active}</h2>
                <p className="text-xl cursor-pointer"><i className="fa-solid fa-house" onClick={() => navigate(`/${active}`)}></i> Home <i className="fa-solid fa-arrow-right px-2" onClick={() => navigate(`/${active}`)}></i> {active !== "Asosiy || qism" ? active : ""}</p>
            </div>        
    </header>
  )
}

export default Navbar