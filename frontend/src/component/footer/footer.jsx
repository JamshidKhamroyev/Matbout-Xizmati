import fixter1 from '../../assets/fixter1.png'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
   <>
      <footer className={`px-3 bg-white`}>
          <div className="text-center border-gray-400 py-5 border-t">
            Copyright © {date} Fixter. All rights reserved.
          </div>
        </footer>
   </>
  )
}

export default Footer