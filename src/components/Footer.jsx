import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ switchMode, switchInnerColor }) => {
    return (
        <div
            id='footer-container'
            style={switchMode}
            className='h-[6rem] border-t-2 border-red-600 flex items-center justify-evenly flex-col'
        >
            <div className='text-center text-sm'>
                <p><span>Copyright © 2024-2025 Ez Case Converter | All Rights Reserved | Project by Nitin Sharma ( Ezemmet ) | Last Update (October 2024) </span></p>
            </div>
            <div>
                <ul className='flex p-2 rounded-lg' style={switchInnerColor}>
                    <li className='flex items-center cursor-pointer px-1 border-b border-red-600 mx-2'>
                        <FontAwesomeIcon icon={faGithub} className='mr-1 text-lg' />
                        <Link to='https://github.com/ezemmet' target='_blank' className=' text-blue-600 font-semibold'>Github</Link>
                    </li>
                    <li className='flex items-center cursor-pointer px-1 border-b border-red-600 mx-2'>
                        <FontAwesomeIcon icon={faLinkedin} className='mr-1 text-lg' />
                        <Link to='/' className='text-blue-600 font-semibold'>Linkdin</Link>
                    </li>
                    <li className='flex items-center cursor-pointer px-1 border-b border-red-600 mx-2'>
                        <FontAwesomeIcon icon={faInstagram} className='mr-1 text-lg' />
                        <Link to='/' className='text-blue-600 font-semibold'>Instagram</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
