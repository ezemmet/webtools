
const Header = () => {

  return (
    <div id="header-container" className="h-[10vh] border-b-2 border-[#ff2121] dark:bg-[#0d203a] dark:text-[#fff]">
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
          <select name="theme" id="" className="cursor-pointer">
            <option className="cursor-pointer" value="dark" id='dark'>DARK</option>
            <option className="cursor-pointer" value="light" id='light'>LIGHT</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header
