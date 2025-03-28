import { useState } from "react"
import Upload from '../../assets/upload.jpg'
import { toast } from "react-toastify"
import {useDispatch} from 'react-redux'
import {showLoader, hideLoader} from '../../reducers/loader';
import { myaxios } from "../../apiCall"

const AddBlog = () => {
  const [type, setType] = useState("rasm")
  const [data, setData] = useState({description: "", video: "", images: []})
  const dispatch = useDispatch()

  const handleImageChange = (event) => {
    if(data.images.length == 3){
      return toast.error("Siz uch donadan ko'p rasm joylay olmaysiz!")
    }
    const files = Array.from(event.target.files);
    setData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const submitHandler = async event => {
    event.preventDefault()
    dispatch(showLoader())
    try {
        if(!data.description){
          dispatch(hideLoader())
          return toast.error("Siz barcha kataklarni to'ldirmadingiz!")
        }
        
        if(!data.video && data.images.length === 0){
          dispatch(hideLoader())
          return toast.error("Siz yo rasm yoki video kiritishingiz kerak!")
        }

        if(data.video && data.images.length > 0){
          toast.error("Siz yo rasm yoki videolardan birini kerak!")
          dispatch(hideLoader())
          return
        }

        const formData = new FormData()
        if(data.video !== ""){
          formData.append("video", data.video)
        }

        if(data.images.length > 0){
          data.images.forEach((image) => {
            formData.append("images", image);
          });
        }
        formData.append("text", data.description)
        const response = await myaxios.post(`/api/blog/create`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        toast.success(response.data.message)
        setData({description: "", images: [], video: ""})
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
        </select>
      </div>

      {type == "rasm" && (
        <div>
          <label htmlFor="image">
            <img src={Upload} alt="image" className="w-full h-[300px] border cursor-pointer" />
          </label>
          <input type="file" id="image" hidden onChange={handleImageChange}/>
        </div>
      )} 

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
          <textarea rows={6} value={data.description} onChange={(e) => setData(prev => ({...prev, ["description"]: e.target.value}))} className="w-full p-2 border rounded-sm" placeholder="Kitob haqida!"></textarea>
        </div>
      <button type="submit" className="w-full border p-1 cursor-pointer font-semibold hover:bg-black hover:text-white duration-300 rounded-sm">Qo'shish</button>
    </form>
  )
}

export default AddBlog