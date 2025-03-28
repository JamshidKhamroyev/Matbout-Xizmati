import axios from "axios"
import SideBar from '../sideBar/sideBar'
import { useState } from "react"
import { toast } from "react-toastify"

const Contact = () => {
  const [data, setData] = useState({userTitle: "", text: ""})
  const onChangeHandler = event => {
    const val = event.target.value
    const name = event.target.name
    setData(prev => ({...prev, [name]: val}))
  }

  const submitHandler = async event => {
    event.preventDefault()
    try {
      await axios.post(`https://api.telegram.org/bot${`admin`}/sendMessage`, {
      chat_id: 2312312,
      text: `
Foydalanuvchi ismi: ${data.userTitle}
Foydalanuvchining xabari: 
${data.text} 
      `,
    })
    toast.success("Xabar yuborildio!")
    setData({userTitle: "", text: ""})
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <section className={`w-full md:px-12 justify-around max-md:flex-col max-md:gap-4 flex py-7`}>
        <form className="md:w-1/2 my-4 p-5 rounded-sm w-full bg-white mx-auto items-center flex flex-col gap-4" onSubmit={submitHandler}>
          <h2 className="md:text-2xl text-xl Itim text-center">Savolingiz yoki taklifingiz bormi? Xabaringizni bizning Telegram botga yuboring!</h2>
          <input onChange={onChangeHandler} value={data.userTitle} name="userTitle" type="text" className="py-2 px-4 w-full outline-none border rounded-sm" placeholder="Ismingizni kiriting!"/>
          <textarea onChange={onChangeHandler} value={data.text} name="text" className="w-full outline-none border rounded-sm p-2" placeholder="Fikringizni yozing.." rows={8}></textarea>
          <button type="submit" className={`border py-1 w-full rounded-sm hover:bg-black hover:text-white duration-300 cursor-pointer`}>Qo'shish</button>
        </form>

        <SideBar />
    </section>
  )
}

export default Contact