import { Link, NavLink } from "react-router-dom"
import { BiCartAlt } from "react-icons/bi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  var cartValue = 3;

  return (
    <nav className="w-full flex justify-center items-center py-6 md:py-9">
      <div className="full_with_container justify-between">
        <Link to={'/'} className="text-2xl font-black border-0">Cement Swift</Link>

        {/* Desktop menu  */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink className='hover:font-black' to={'/'}>Home</NavLink>
          <NavLink className='hover:font-black' to={'/products'}>Shop</NavLink>
          {!localStorage.getItem('client') && <NavLink className='custom_button_1 hover:font-black' to={'/login'}>Login</NavLink>}
          {localStorage.getItem('client') && <NavLink className='hover:font-black' to={'/account'}>My Account</NavLink>}
          {localStorage.getItem('client') &&
            <NavLink to={'/cart'} className="flex justify-between gap-1 items-center">
              <BiCartAlt className="text-2xl" />
              <small>({cartValue})</small>
            </NavLink>}
        </div>


        {/* Mobile menu  */}
        {!isOpen && <IoMenu className="flex md:hidden text-4xl" onClick={() => setIsOpen(true)}/>}
        {isOpen && <IoClose className="flex md:hidden text-4xl" onClick={() => setIsOpen(false)}/>}

        {isOpen &&
          <div className="flex flex-col h-screen w-full left-0 items-center justify-start gap-12 text-xl py-10 bg-white mt-12 text-center md:hidden absolute">
            <a href={'/'}>Home</a>
            <a href={'/products'}>Shop</a>
            {!localStorage.getItem('client') && <a href={'/login'}>Login</a>}
            {localStorage.getItem('client') &&
              <a href={'/account'}>My Account</a>
            }
            {localStorage.getItem('client') &&
              <a href={'/cart'} className="flex justify-between gap-1 items-center">
                <BiCartAlt className="text-2xl" />
                <small>({cartValue})</small>
              </a>}
          </div>
        }
      </div>
    </nav>
  )
}

export default NavigationBar