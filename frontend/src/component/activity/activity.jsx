import SideBar from '../sideBar/sideBar'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {showLoader, hideLoader} from '../../reducers/loader'
import { useDispatch, useSelector } from 'react-redux'
import { Myaxios } from '../../apikeys/index'


const Activity = () => {
  const {link} = useSelector(state => state.load)
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  const getAllData = async () => {
    dispatch(showLoader())
    try {
        const response = await Myaxios.get(`/api/bibliografiya/get-all`)
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
      <div className='flex justify-between md:p-5'>
        <div className='w-2/3 bg-white md:p-6 flex flex-col gap-5'>
            <h3 className='text-xl opacity-80'>Biografik qo'llanmalar</h3>
            {data?.map(item => (
              <a key={item._id} target="_ablank" className='text-2xl text-blue-400 underline' href={item?.url}>{item?.text}</a>
            ))}
        </div>

        <SideBar />
    </div>
  )
}

export default Activity