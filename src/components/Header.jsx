import React from 'react'

const Header = () => {
  return (
    <div id="header-container">
      <div className="header flex justify-around">
        <div className="header-logo">
          <p><span>e</span><span>zemmet</span></p>
        </div>
        <div className="header-menu">
          <ul className='flex'>
            <li>
              <a href="#">Case Convertor</a>
            </li>
            <li>
              <a href="#">Email Generator</a>
            </li>
            <li>
              <a href="#">Email Generator</a>
            </li>
          </ul>
        </div>
        <div className="header-theme">
          <select name="theme" id="">
            <option value="light">LIGHT</option>
            <option value="dark">DARK</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header
