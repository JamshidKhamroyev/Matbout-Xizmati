import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import SideBar from './components/sideBar/sideBar'
import Blogs from './components/blogs/blogs'
import AddBlog from './components/addBlog/addBlog'
import Load from './components/loader/load'
import Login from './components/login/login'
import AddPdf from './components/addpdf/addPdf'
import Pdfs from './components/pdfs/pdfs'

const App = () => {
  const {login} = useSelector(state => state.login)
  const {loader} = useSelector(state => state.loader)
  return (
    <BrowserRouter>
      <div className='w-full flex items-start gap-3'>
        <SideBar />
        {loader && <Load />}
        {login ? (
          <Routes>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/pdfs' element={<Pdfs />}/>
            <Route path='/add-blog' element={<AddBlog />}/>
            <Route path='/add-pdf' element={<AddPdf />}/> 
          </Routes>
           ) : (
            <Login />
        )} 
      </div>
    </BrowserRouter>
  )
}

export default App