import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="md:w-1/4 w-full md:h-[70vh] md:mx-3 border-t-4 border-t-[#13aff0]">
      <h2 className="py-2.5 bg-[#01012f] text-white text-3xl text-center font-semibold font-serif">Sahifalar</h2>
      <div className="flex flex-col gap-2 bg-white px-2 pt-4">
        <Link to={'/'}className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Uy</Link>
        <Link to={'/announcement'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">E'lonlar</Link>
        <Link to={'/blogs'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Bloglar</Link>
        <Link to={"/blogs"} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Tadbirlar</Link>
        <Link to={'/owner'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Rahbariyat</Link>
        <Link to={'/about'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Kutubxona bilan tanishish</Link>
        <Link to={'/location'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Kutubxona manzili</Link>
        <Link to={'/contact'} className="w-full py-2 border-b border-gray-200 text-xl cursor-pointer select-none hover:text-[#13aff0] duration-200">Bog'lanish</Link>
      </div>
    </div>
  )
}

export default SideBar