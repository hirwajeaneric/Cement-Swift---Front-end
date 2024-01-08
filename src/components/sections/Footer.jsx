import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center py-6 md:py-9 bg-black text-white">
      <div className="full_with_container justify-between items-center flex-wrap md:flex-nowrap">
        <Link to={'/'} className="text-2xl font-black border-0 ">Cement Swift</Link>
        <p>&copy;{new Date().getFullYear()} Tech Haven. All Rights are reserved.</p>
        <div className="flex gap-9 text-3xl"> 
          <BiLogoFacebook className="text-white"/>
          <BiLogoInstagram className="text-white"/>
          <BiLogoTwitter className="text-white"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer