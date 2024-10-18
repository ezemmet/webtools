import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ switchMode }) => {
    return (
        <div
            id='footer-container'
            style={switchMode}
            className='h-[6rem] border-t-2 border-red-600 flex items-center justify-evenly'
        >
            <div className='text-center'>
                <p><span>Copyright © 2024-2025 | Last Update (October 2024)</span></p>
                <p><span>All Rights Reserved</span></p>
            </div>
            <div>
                <ul className=''>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faGithub} />
                        <Link to='/'>Github</Link>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <Link to='/'>Linkdin</Link>
                    </li>
                    <li className='flex items-center'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <Link to='/'>Instagram</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
