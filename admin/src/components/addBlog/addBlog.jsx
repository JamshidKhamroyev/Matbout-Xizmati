import { useState } from "react"
import Upload from '../../assets/upload.jpg'
import { toast } from "react-toastify"
import {useDispatch} from 'react-redux'
import {showLoader, hideLoader} from '../../reducers/loader';
import { myaxios } from "../../apiCall"

const AddBlog = () => {
  const [type, setType] = useState("rasm")
  const [data, setData] = useState({description: "", video: "", images: []})
  const [makon, setMakon] = useState({image: "", text: ""})
  const dispatch = useDispatch()

  const handleImageChange = (event) => {
    if(type == "rasm" && data.images.length === 4){
      return toast.error("Siz 4 donadan ko'p rasm joylay olmaysiz!")
    }

    if(type == "rasm"){
      const files = Array.from(event.target.files)
      setData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }else if(type == "makon"){
      setMakon(prev => ({...prev, ["image"]: event.target.files[0]}))
    }
  };

  const submitHandler = async event => {
    event.preventDefault()
    dispatch(showLoader())
    try {
        if(!data.description && !makon.text){
          dispatch(hideLoader())
          return toast.error("Siz barcha kataklarni to'ldirmadingiz!")
        }
        
        if(data.video && data.images.length > 0 && makon.image){
          dispatch(hideLoader())
          return toast.error("Siz yo rasm yoki video kiritishingiz kerak!")
        }

        if(!data.video && !data.images.length > 0 && !makon.image){
          toast.error("Siz yo rasm yoki videolardan birini kerak!")
          dispatch(hideLoader())
          return
        }

        const formData = new FormData()
        if(type == "video"){
          formData.append("video", data.video)
          formData.append("text", data.description)
        }else if(type == "rasm"){
          data.images.forEach((image) => {
            formData.append("images", image);
          });
          formData.append("text", data.description)
        }else if(type == "makon"){
            formData.append("image", makon.image)
            formData.append("text", makon.text)
        }

        if(type == "rasm" || type == "video"){
          const response = await myaxios.post(`/api/blog/create`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          if(response.data.ok){
            toast.success(response.data.message)
          }
        } else if(type == "makon"){
          const response = await myaxios.post(`/api/makon/create`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          if(response.data.ok){
            toast.success(response.data.message)
          }
        }

        setData({description: "", images: [], video: ""})
        setMakon({image: "", text: ""})
    } catch (error) {
      toast.error(error.response.data.message)
    }
    dispatch(hideLoader())
  }
  return (
    <form className="md:w-1/2 w-full max-md:px-1 mx-auto py-12 text-center" onSubmit={submitHandler}>
      <h2 className="md:text-4xl text-2xl font-bold mb-4">Blog Qo'shish</h2>
      <div className="flex flex-col w-full gap-2 my-2">
        <label htmlFor="">Blogingiz qanday bo'ladi?</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full py-1 border border-sky-400 focus:border-2 outline-none">
          <option value="rasm">Rasm</option>
          <option value="video">video</option>
          <option value="makon">Sayohat</option>
        </select>
      </div>

      {type == "rasm" || type == "makon" ? (
        <div>
          <label htmlFor="image">
            <img src={type == "makon" && makon.image ? URL.createObjectURL(makon.image) : Upload} alt="image" className="w-full h-[300px] border cursor-pointer" />
          </label>
          <input type="file" id="image" hidden onChange={handleImageChange}/>
        </div>
      ) : ""} 

      {type == "video" && (
        <div className="w-full text-left my-3">
          <label>Video Linkini kiriting</label>
          <input type="text" value={data.video} onChange={(e) => setData(prev => ({...data, ["video"]: e.target.value}))} placeholder="Kitob nomini kiriting..." className="w-full py-1 px-3 border rounded-sm"/>
        </div>
      )} 

      <div className="flex my-1 gap-1">
        {data.images.map((img, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(img)} alt="upload preview" className="w-32 h-32 border" />
          </div>
        ))}
      </div>

        <div className="w-full text-left my-3">
          <label>Blog haqida yozing!</label>
          <textarea rows={6} value={type == "makon" ? makon.text : data.description} onChange={type == "makon" ? (e) => setMakon(prev => ({...prev, ["text"]: e.target.value})) : (e) => setData(prev => ({...prev, ["description"]: e.target.value}))} className="w-full p-2 border rounded-sm" placeholder="Kitob haqida!"></textarea>
        </div>
      <button type="submit" className="w-full border p-1 cursor-pointer font-semibold hover:bg-black hover:text-white duration-300 rounded-sm">Qo'shish</button>
    </form>
  )
}

export default AddBlog