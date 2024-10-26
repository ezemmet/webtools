import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"


const Header = ({ handleMode, mode, switchMode }) => {

  return (
    <div
      id="header-container"
      style={switchMode}
      className="h-[10vh] border-b-2 border-[#ff2121] dark:bg-[#0d203a] dark:text-[#fff]">
      <div className="header h-[10vh] grid gap-1 grid-cols-12 items-center text-center">
        <div className="col-span-3">
          <FontAwesomeIcon icon={faBars} className="md:hidden text-2xl" />
          <p className="p-1 text-2xl font-bold hidden md:block"><span className="text-[#ff1d1d]">e</span><span>zemmet</span></p>
        </div>
        <div className="hidden md:block col-span-6">
          <ul className='grid md:grid-cols-3'>
            <li className='font-semibold'>
              <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>Home</NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>About</NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-blue-600' : ''}`}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-theme col-span-3">
          <button
            onClick={handleMode}
            className="w-[70px] border-2 border-blue-700 blue hover:shadow-blue-hover font-bold rounded-md px-4 py-1.5 text-blue-700">{mode}</button>
        </div>
      </div>
    </div>
  )
}

export default Header
