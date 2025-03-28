import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import {showLoader, hideLoader} from '../../reducers/loader'
import { Myaxios } from '../../apikeys/index'
import SideBar from '../sideBar/sideBar'
import moment from "moment/moment";

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getInfo = async () => {
      dispatch(showLoader())
      try {
          const response = await Myaxios.get(`/api/blog/get-all`)
          dispatch(setBlogs(response.data.data.reverse()))
      } catch (error) {
        console.log(error.message); 
      }
      dispatch(hideLoader())
    }
    getInfo()
  },[])
  return (
    <section className="py-8 flex justify-around md:px-16 max-md:flex-col max-md:gap-6">
  <div className="flex flex-col gap-8 bg-white md:w-2/3 px-2 w-full mx-auto items-center justify-center">
    {blogs.map(item => (
      <div key={item.title} className="md:px-2 md:py-6 max-md:p-2 w-full md:border-b border-gray-300">
        
        {/* Rasmlar qismi */}
        <div className="relative md:h-[400px] max-h-[60vh] w-full flex flex-wrap items-center justify-center md:p-2 gap-2">
          {item?.image.length !== 0 ? (
            item.image.length === 1 ? (
              <img src={`https://matbout-xizmati.onrender.com/api/blog-images/${item.image[0]}`} 
                   alt={item.image[0]} 
                   className="w-full h-[400px] object-cover rounded-lg"/>
            ) : item.image.length === 2 ? (
              <div className="flex w-full gap-2">
                {item.image.map(img => (
                  <img src={`https://matbout-xizmati.onrender.com/api/blog-images/${img}`} 
                       alt={img} 
                       className="w-1/2 h-[400px] object-cover rounded-lg"/>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 w-full">
                {item.image.slice(0, 2).map(img => (
                  <img src={`https://matbout-xizmati.onrender.com/api/blog-images/${img}`} 
                       alt={img} 
                       className="w-full h-[300px] object-cover rounded-lg"/>
                ))}
                <img src={`https://matbout-xizmati.onrender.com/api/blog-images/${item.image[2]}`} 
                     alt={item.image[2]} 
                     className="col-span-2 w-full h-[400px] object-cover rounded-lg"/>
              </div>
            )
          ) : (
            <iframe src={item?.video} className="w-full md:h-full h-[40vh] rounded-lg"></iframe>
          )}
        </div>

        {/* Matn qismi */}
        <div className={`bg-white p-4 rounded-lg shadow-md ${item.image.length === 3 && "mt-[310px]"}`}>
          <p className="opacity-90">{item?.text}</p>
          <p className="py-2 text-gray-500">{moment(item?.createdAt).format("DD-MMMM")}</p>
        </div>
      </div>
    ))}
  </div>

  <SideBar />
</section>
  )
}

export default Blogs