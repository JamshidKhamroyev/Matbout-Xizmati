import SideBar from '../sideBar/sideBar'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {showLoader, hideLoader} from '../../reducers/loader'
import { useDispatch, useSelector } from 'react-redux'
import { Myaxios } from '../../apikeys/index'


const Gazeta = () => {
    const {link} = useSelector(state => state.load)
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    const getAllData = async () => {
        dispatch(showLoader())
        try {
            const response = await Myaxios.get(`/api/gazeta/get-all`)
            if(response.data.ok){
            setData(response.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
        dispatch(hideLoader())
    }

    useEffect(() => {
        getAllData()
    }, [])
  return (
    <div className="w-full p-5 flex justify-between">
        <div className="w-2/3 flex flex-col gap-3 p-3 bg-white">
            <div className="flex items-center gap-6 justify-center">
                {data.map(item => (
                    <a key={item._id} href={item.url} target="_ablank" className='flex gap-2 justify-between'>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <img key={index} className={`w-[300px] h-[300px] ${index == 1 ? "scale-105" : ""}`} src={`${link}/api/gazeta-images/${item?.image}`} alt="sd" />
                        ))}
                    </a>
                ))}
            </div>
        </div>

        <SideBar />
    </div>
  )
}

export default Gazeta