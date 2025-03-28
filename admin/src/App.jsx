import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SideBar from './components/sideBar/sideBar'
import Blogs from './components/blogs/blogs'
import AddBlog from './components/addBlog/addBlog'
import Load from './components/loader/load'
import Login from './components/login/login'

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-full flex items-start gap-3'>
        <Load />
        {/* <Login /> */}
        <SideBar />
        <Routes>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/add-blog' element={<AddBlog />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App