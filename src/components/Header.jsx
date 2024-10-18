import { NavLink } from "react-router-dom"

const Header = ({ handleMode, mode, switchMode }) => {

  return (
    <div
      id="header-container"
      style={switchMode}
      className="h-[10vh] border-b-2 border-[#ff2121] dark:bg-[#0d203a] dark:text-[#fff]">
      <div className="header flex justify-around h-[10vh] items-center">
        <div className="header-logo">
          <p className="p-1 text-2xl font-bold"><span className="text-[#ff1d1d]">e</span><span>zemmet</span></p>
        </div>
        <div className="header-menu">
          <ul className='flex'>
            <li className='m-2 font-semibold'>
              <NavLink to="/" className={({ isActive }) => `${isActive ? 'p-2 rounded-md border border-red-600 text-blue-600' : ''}`}>Case Convertor</NavLink>
            </li>
            <li className='m-2 font-semibold'>
              <NavLink to="/todoone" className={({ isActive }) => `${isActive ? 'p-2 rounded-md border border-red-600 text-blue-600' : ''}`}>TODO</NavLink>
            </li>
            <li className='m-2 font-semibold'>
              <NavLink to="/todosecond" className={({ isActive }) => `${isActive ? 'p-2 rounded-md border border-red-600 text-blue-600' : ''}`}>TODO</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-theme">
          <button
            onClick={handleMode}
            className="w-[70px] border-2 border-blue-700 blue hover:shadow-blue-hover font-bold rounded-md px-4 py-1.5 text-blue-700">{mode}</button>
        </div>
      </div>
    </div>
  )
}

export default Header
