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
            <li className='m-2 pl-1 pr-1 font-semibold'>
              <a href="#">Case Convertor</a>
            </li>
            <li className='m-2 pl-1 pr-1 font-semibold'>
              <a href="#">TODO</a>
            </li>
            <li className='m-2 pl-1 pr-1 font-semibold'>
              <a href="#">TODO</a>
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
