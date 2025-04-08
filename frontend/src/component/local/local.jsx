import { useEffect, useState } from 'react'
import SideBar from '../sideBar/sideBar' 
import { toast } from 'react-toastify'
import {showLoader, hideLoader} from '../../reducers/loader'
import { useDispatch, useSelector } from 'react-redux'
import { Myaxios } from '../../apikeys/index'
import moment from "moment"

const Local = () => {
  const [data, setData] = useState([])
  const {link} = useSelector(state => state.load)
  const dispatch = useDispatch()

  const getAllData = async () => {
    dispatch(showLoader())
    try {
        const response = await Myaxios.get(`/api/makon/get-all`)
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
    <div className="w-full flex justify-between md:p-5">
        <div className="w-2/3 flex flex-col gap-2 bg-white">
          {data.map(item => (
            <div key={item._id} className='w-full p-3 gap-2 flex flex-col'>
                <img className='w-full h-[400px]' src={`${link}/api/makon-images/${item?.image}`} alt="das" />
                <p className='opacity-80'>{item.text}</p>
                <p className='opacity-90'>{moment(item.createdAt).format("DD-MMMM")}</p>
            </div>
          ))}
        </div>

        <SideBar />
    </div>
  )
}

export default Local