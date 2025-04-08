import { useEffect, useState } from "react"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { showLoader, hideLoader } from '../../reducers/loader'
import {myaxios} from '../../apiCall/index'

const Pdfs = () => {
    const [type, setType] = useState("gazeta")
    const {link} = useSelector(state => state.loader)
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    
    const getAllPdf = async () => {
        dispatch(showLoader())
        try {
            const response = await myaxios.get(`/api/${type}/get-all`)
            if(response.data.ok){
                setData(response.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
        dispatch(hideLoader())
    }
    
    const deleteHandler = async (id) => {
        dispatch(showLoader())
        try {
            const response = await myaxios.delete(`/api/${type}/delete/${id}`)
            if(response.data.ok){
                toast.success(response.data.message)
                getAllPdf()
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
        dispatch(hideLoader())
    }

    useEffect(() => {
        getAllPdf()
    }, [type])
  return (
    <section className="p-2 w-[70vw]">
        <div className="w-full">
            <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 border border-blue-400 outline-none cursor-pointer">
                <option value="gazeta">Gazetalar</option>
                <option value="bibliografiya">Bibliografiyalar</option>
            </select>
        </div>

        <h2 className="text-center my-3 md:text-3xl text-2xl font-semibold">Barcha {type}lar</h2>
        <div className={`flex cursor-pointer ${type == "gazeta" ? "gap-3 my-5 flex-wrap" : "flex-col"}`}>
        {type == "gazeta" ? (
            <>
                {data.map(pdf => (
                    <div className="flex flex-col gap-2 border border-gray-400 p-1">
                        <a key={pdf._id} href={pdf.url}>
                        <img src={`${link}/api/gazeta-images/${pdf.image}`} alt={"title"} className="w-[250px] h-[250px]"/>
                    </a>
                    <button className="border p-2 rounded-sm bg-red-700 hover:opacity-80 active:bg-red-900 text-white cursor-pointer" onClick={() => deleteHandler(pdf._id)}>Delete</button>
                    </div>
                ))}
            </>
        ) : (
            <>
                {data.map(pdf => (
                    <div className="flex w-full justify-between items-center border my-1 p-3 rounded-sm border-gray-300">
                        <a key={pdf._id} href={pdf.url} className="lg:text-3xl text-2xl text-blue-400 underline">{pdf.text}</a>
                        <button className="border p-2 rounded-sm bg-red-700 hover:opacity-80 active:bg-red-900 text-white cursor-pointer" onClick={() => deleteHandler(pdf._id)}>Delete</button>
                   </div>
                ))}
            </>
        )}
        </div>
    </section>
  )
}

export default Pdfs