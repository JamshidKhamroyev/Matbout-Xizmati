import SideBar from "../sideBar/sideBar"
import d from '../../assets/home1.jpg'

const Announcement = () => {
  return (
    <section className="py-8 w-full flex justify-around px-16">
        <div className="flex flex-col gap-2 p-4 w-1/2 bg-white">
            <div className="my-8 flex flex-col gap-2">
                <div className="w-full h-[60vh] overflow-hidden">
                    <img src={d} alt={d} className="w-full h-full"/>
                </div>
                <p className="text-justify opacity-90">Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, modi! Molestias vitae omnis quisquam officia? Doloribus laudantium ratione voluptas temporibus, deleniti perferendis aliquid amet esse natus tenetur consequuntur veniam distinctio debitis nihil delectus modi totam aperiam ipsam! Molestiae, odit ad. ipsum dolor sit amet consectetur adipisicing elit. Quos magnam corporis inventore, voluptates recusandae explicabo, possimus beatae eligendi porro eum, dolores minus distinctio! Suscipit ab dolorum illo, esse quod nesciunt quibusdam dignissimos corrupti recusandae quidem tempore fugit facere quos similique.</p>
            </div>
        </div>
        
        <SideBar />
    </section>
  )
}

export default Announcement