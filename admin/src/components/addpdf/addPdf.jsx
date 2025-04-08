import { useState } from "react"
import Upload from '../../assets/upload.jpg'
import { toast } from "react-toastify"
import {useDispatch} from 'react-redux'
import {showLoader, hideLoader} from '../../reducers/loader';
import { myaxios } from "../../apiCall"

const AddPdf = () => {
  const [type, setType] = useState("gazeta")
  const [data, setData] = useState({image: "", text: "", url: ""})
  const dispatch = useDispatch()

  const handleImageChange = (event) => {
    setData(prev => ({...prev, ["image"]: event.target.files[0]}));
  };

  const submitHandler = async(event) => {
    dispatch(showLoader())
    event.preventDefault()
    if(type == "gazeta"){

      if(!data.url || !data.image){
        dispatch(hideLoader())
        return toast.error("Siz barcha kataklarni to'ldirmadingiz...")
      }

      const formData = new FormData()
      formData.append("image", data.image)
      formData.append("url", data.url)

      const response = await myaxios.post("/api/gazeta/create", formData)
      if(response.data.ok){
        toast.success(response.data.message)
        setData({text: "", url: "", image: ""})
      }else{
        toast.error(response.data.message)
      }
    }else{
      if(!data.url || !data.text){
        dispatch(hideLoader())
        return toast.error("Siz barcha kataklarni to'ldirmadingiz...")
      }

      const mydata = {url: data.url, text: data.text}
      const response = await myaxios.post("/api/bibliografiya/create", mydata)
      if(response.data.ok){
        toast.success(response.data.message)
        setData({text: "", url: "", image: ""})
      }else{
        toast.error(response.data.message)
      }
    }
    dispatch(hideLoader())
  }

  return (
    <form className="md:w-1/2 w-full max-md:px-1 mx-auto py-12 text-center" onSubmit={submitHandler}>
      <h2 className="md:text-4xl text-2xl font-bold mb-4">Blog Qo'shish</h2>
       <div className="flex flex-col w-full gap-2 my-2">
         <label htmlFor="">Pdfingiz qanday bo'ladi?</label>
         <select value={type} onChange={(e) => setType(e.target.value)} className="w-full py-1 border border-sky-400 focus:border-2 outline-none">
           <option value="gazeta">Gazeta</option>
           <option value="bibliografiya">Bibliografiya</option>
         </select>
       </div>

       {type == "gazeta" && (
         <div className="flex flex-col gap-2">
           <label htmlFor="image">
             <img src={data.image ? URL.createObjectURL(data.image) :  Upload} alt="image" className="w-full h-[300px] border cursor-pointer" />
           </label>

           <input type="file" id="image" hidden onChange={handleImageChange}/>
           <input type="text" placeholder="Gazeta linkini kiriting..." value={data.url} onChange={(e) => setData(prev => ({...prev, ["url"]: e.target.value}))} className="w-full px-2 py-1 border border-sky-400 focus:border-2 outline-none"/>
         </div>
       )} 

       {type == "bibliografiya" && (
         <>
            <div className="w-full text-left my-4">
              <label>Pdf nomini bu yerga kiriting</label>
              <input type="text" value={data.text} onChange={(e) => setData(prev => ({...data, ["text"]: e.target.value}))} placeholder="nomini kiriting..." className="w-full py-1 px-3 border rounded-sm"/>
            </div>

            <div className="w-full text-left my-4">
              <label>Pdf linkini bu yerga kiriting</label>
              <input type="text" value={data.url} onChange={(e) => setData(prev => ({...data, ["url"]: e.target.value}))} placeholder="linkini kiriting..." className="w-full py-1 px-3 border rounded-sm"/>
            </div>

         </>
       )} 
      <button type="submit" className="w-full mt-3 border p-1 cursor-pointer font-semibold hover:bg-black hover:text-white duration-300 rounded-sm">Qo'shish</button>
    </form>
  )
}

export default AddPdf