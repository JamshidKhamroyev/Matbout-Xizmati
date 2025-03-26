import {Routes, Route, BrowserRouter,} from 'react-router-dom'
import Blogs from './component/blogs/blogs'
import Contact from './component/contact/contact'
import HomePage from './component/homePage/homePage'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import About from './component/about/about'
import NotPage from './component/notPage/notPage'
import { useEffect } from 'react'
import { Myaxios } from './apikeys'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {showLoader, hideLoader} from './reducers/loader'
import Load from './component/loader/load'
import Location from './component/location/location'
import Owner from './component/owner/owner'
import Announcement from './component/announcement/announcement'

const App = () => {
  const {load} = useSelector(state => state.load)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getInfo = async () => {
      dispatch(showLoader())
      try {
          const response = await Myaxios.get(`/api/site/get-one`)
          if(!response.data.ok){
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
      <>
        <BrowserRouter>
            {load && <Load />}
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/blogs' element={<Blogs />}/>
              <Route path='/announcement' element={<Announcement />}/>
              <Route path='/location' element={<Location />}/>
              <Route path='/owner' element={<Owner />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<NotPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
      </>
    )
}

export default App