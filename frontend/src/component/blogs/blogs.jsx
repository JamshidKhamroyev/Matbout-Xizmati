import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import image1 from '../../assets/home1.jpg'
import { toast } from "react-toastify"
import {showLoader, hideLoader} from '../../reducers/loader'
import {Myaxios} from '../../apikeys/index'
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
        if(response.data.ok){
          dispatch(setBlogs(response.data.data))
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
    <section className={`py-8 flex justify-around px-16`}>
        <div className="flex flex-col gap-2 bg-white w-2/3 mx-auto items-center justify-center">
          {blogs.map(item => (
            <div key={item.title} className="px-2 py-6 w-full border-b border-gray-300">
              <div className="h-[400px] w-full flex items-center gap-2 justify-center">
                {item?.images?.map(image => (
                  <img src={`https://matbout-xizmati.onrender.com/${image}`} alt={image} />
                ))}
              </div>

              <div className="py-1">
                <h3 className="Itim md:text-4xl text-3xl my-3">Mahmudxo‘ja Behbudiy tavalludining 150 yilligini</h3>
                <p className="opacity-90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellat maxime modi mollitia illo sequi eveniet sed itaque adipisci, consequuntur, fuga blanditiis labore! Tenetur esse numquam deleniti delectus voluptate sed maiores eum fugiat harum minus, vitae quam quis vel ex? Nulla, optio eligendi? Obcaecati numquam beatae animi aliquid? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, optio quo omnis, consectetur, quibusdam eius debitis fugiat laborum soluta recusandae enim! Dignissimos sit tempore dolore minus eaque, distinctio temporibus totam deleniti corrupti libero quaerat recusandae eligendi esse deserunt iusto ea nisi, similique sint obcaecati cumque itaque.</p>
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