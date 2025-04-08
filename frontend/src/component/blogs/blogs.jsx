import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showLoader, hideLoader } from '../../reducers/loader'
import { Myaxios } from '../../apikeys/index'
import SideBar from '../sideBar/sideBar'
import moment from "moment"

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const { link } = useSelector(state => state.load)
  const dispatch = useDispatch()

  useEffect(() => {
    const getInfo = async () => {
      dispatch(showLoader())
      try {
        const response = await Myaxios.get(`/api/blog/get-all`)
        setBlogs(response.data.data.reverse())
      } catch (error) {
        console.log(error.message)
      }
      dispatch(hideLoader())
    }
    getInfo()
  }, [])

  return (
    <section className="py-8 flex justify-around md:px-16 max-md:flex-col max-md:gap-6">
      <div className="flex flex-col bg-white md:w-2/3 px-2 w-full mx-auto items-center justify-center">
        {blogs.map(item => (
          <div key={item.title} className="md:px-2 md:py-4 max-md:p-2 w-full md:border-b border-gray-300">
            
            {/* Rasmlar / Video */}
            <div className="relative w-full flex flex-wrap items-center justify-center gap-2">
              {item?.image?.length > 0 ? (
                <>
                  {item.image.length === 1 && (
                    <img src={`${link}/api/blog-images/${item.image[0]}`} alt={item.image[0]}
                      className="w-full aspect-video object-fill rounded-none" />
                  )}

                  {item.image.length === 2 && (
                    <div className="flex flex-col sm:flex-row w-full gap-2">
                      {item.image.map((img, index) => (
                        <img key={index} src={`${link}/api/blog-images/${img}`} alt={img}
                          className="w-full sm:w-1/2 aspect-video object-fill rounded-none" />
                      ))}
                    </div>
                  )}

                  {item.image.length === 3 && (
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {item.image.slice(0, 2).map((img, index) => (
                        <img key={index} src={`${link}/api/blog-images/${img}`} alt={img}
                          className="w-full aspect-square object-fill rounded-none" />
                      ))}
                      <img src={`${link}/api/blog-images/${item.image[2]}`} alt={item.image[2]}
                        className="col-span-2 w-full aspect-video object-fill rounded-none" />
                    </div>
                  )}

                  {item.image.length === 4 && (
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {item.image.map((img, index) => (
                        <img key={index} src={`${link}/api/blog-images/${img}`} alt={img}
                          className="w-full aspect-square object-fill rounded-none" />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <iframe
                  src={item?.video}
                  className="w-full aspect-video rounded-none"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Matn va sana */}
            <div className="bg-white p-4 mt-4">
              <p className="opacity-90">{item?.text}</p>
              <p className="py-2 text-gray-500">{moment(item?.createdAt).format("DD-MMMM")}</p>
            </div>
          </div>
        ))}
      </div>
      <SideBar />
    </section>
  )
}

export default Blogs
