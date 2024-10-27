import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router-dom"


const Header = ({ handleMode, mode, switchMode }) => {

  const [menu, setMenu] = useState('hidden')

  const handleToggleMenu = () => {
    if (menu === 'hidden') {
      setMenu('block')
    }
    else {
      setMenu('hidden')
    }
  }

  return (
    <div
      id="header-container"
      style={switchMode}
      className="h-[10vh] md:border-b-2 border-[#ff2121] dark:bg-[#0d203a] dark:text-[#fff]">
      <div className="header h-[10vh] grid gap-1 grid-cols-12 items-center text-center">
        <div className="md:col-span-3 col-span-6">
          <FontAwesomeIcon icon={faBars} onClick={handleToggleMenu} className="md:hidden text-2xl cursor-pointer" />
          <p className="p-1 text-2xl font-bold hidden md:block"><span className="text-[#ff1d1d]">e</span><span>zemmet</span></p>
        </div>
        <div className={`${menu} md:block md:col-span-6 absolute md:relative w-[100%] md:bg-opacity-0 bg-black bg-opacity-75 left-[0%] top-[10%] md:left-[0] md:top-[0]`}>
          <ul className='md:flex items-center justify-center'>
            <li className='font-semibold mx-4 my-4 md:my-0'>
              <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>Home</NavLink>
            </li>
            <li className='font-semibold mx-4 my-4 md:my-0'>
              <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>About</NavLink>
            </li>
            <li className='font-semibold mx-4 my-4 md:my-0'>
              <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3 col-span-6">
          <button
            onClick={handleMode}
            className="w-[70px] border-2 border-blue-700 blue hover:shadow-blue-hover font-bold rounded-md px-4 py-1.5 text-blue-700">{mode}</button>
        </div>
      </div>
    </div>
  )
}

export default Header
