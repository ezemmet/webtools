import React from 'react'

const Footer = ({switchMode}) => {
    return (
        <div
            id='footer-container'
            style={switchMode}
            className='border-t-2 border-red-600'
            >
            Iam footer
        </div>
    )
}

export default Footer
