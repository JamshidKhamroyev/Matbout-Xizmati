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
      // dispatch(showLoader())
      try {
          const response = await Myaxios.get(`/api/blog/get-all`)
          if(response.data.ok){
            dispatch(setBlogs(response.data.data.reverse()))
          }else{
            toast.error(response.data.message)
          }
      } catch (error) {
        console.log(error.message); 
      }
      dispatch(hideLoader())
    }
    getInfo()
  },[])
  return (
    <section className={`py-8 flex justify-around md:px-16 max-md:flex-col max-md:gap-6`}>
        <div className="flex flex-col gap-2 bg-white md:w-2/3 px-2 w-full mx-auto items-center justify-center">
          {blogs.map(item => (
            <div key={item.title} className="md:px-2 md:py-6 max-md:p-2 w-full md:border-b border-gray-300">
              <div className="md:h-[400px] max-h-[60vh] w-full flex items-center gap-2 justify-center md:p-2">
                {item?.image.length !== 0 ? item?.image?.map(img => (
                  <img src={`https://matbout-xizmati.onrender.com/api/blog-images/${img}`} alt={img} className={`${item?.image.length === 1 ? "w-full h-full" : "w-1/2 md:h-full h-[270px]"}`}/>
                )) : (
                  <iframe src={item?.video} className="w-full md:h-full h-[40vh]"></iframe>
                )}
              </div>

              <div className="py-1">
                <p className="opacity-90">{item?.text}</p>
                <p className="py-2">{moment(item?.createdAt).format("DD-MMMM")}</p>
              </div>
            </div>
          ))}
        </div>

        <SideBar />
    </section>
  )
}

export default Blogs