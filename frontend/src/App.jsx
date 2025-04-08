import {Routes, Route, BrowserRouter,} from 'react-router-dom'
import Blogs from './component/blogs/blogs'
import Contact from './component/contact/contact'
import HomePage from './component/homePage/homePage'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import About from './component/about/about'
import NotPage from './component/notPage/notPage'
import Load from './component/loader/load'
import Location from './component/location/location'
import Owner from './component/owner/owner'
import { useSelector } from 'react-redux'
import Activity from './component/activity/activity'
import Local from './component/local/local'
import Gazeta from './component/gazeta/gazeta'

const App = () => {
  const {load} = useSelector(state => state.load)
    return (
      <>
        <BrowserRouter>
            {load && <Load />}
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/blogs' element={<Blogs />}/>
              <Route path='/location' element={<Location />}/>
              <Route path='/activity' element={<Activity />}/>
              <Route path='/local' element={<Local />}/>
              <Route path='/owner' element={<Owner />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/gazeta' element={<Gazeta />}/>
              <Route path='*' element={<NotPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
      </>
    )
}

export default App