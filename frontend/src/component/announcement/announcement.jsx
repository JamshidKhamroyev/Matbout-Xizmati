import SideBar from "../sideBar/sideBar"
import moment from "moment"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import {showLoader, hideLoader} from '../../reducers/loader'
import { Myaxios } from '../../apikeys/index'
import { useDispatch } from "react-redux"

const Announcement = () => {
  const [blogs, setBlogs] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getInfo = async () => {
      dispatch(showLoader())
      try {
          const response = await Myaxios.get(`/api/announcement/get-all`)
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
    <section className="py-8 w-full flex justify-around px-16">
        <div className="flex flex-col gap-2 p-4 w-1/2 bg-white">
          {blogs?.map(item => (
            <div className="my-8 flex flex-col gap-2" key={item._id}>
                <div className="w-full h-[60vh] overflow-hidden">
                    <img src={`https://matbout-xizmati.onrender.com/api/announceImages-images/${item?.image}`} alt={"fsdafs"} className="w-full h-full"/>
                </div>
                <h2 className="text-3xl Itim">{item?.title}</h2>
                <p className="text-justify opacity-90">{item.text}</p>
                <p>{moment(item?.createdAt).format("DD-MMMM")}</p>
            </div>
          ))}
        </div>
        
        <SideBar />
    </section>
  )
}

export default Announcement