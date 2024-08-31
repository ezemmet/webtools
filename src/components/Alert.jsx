import React, { useEffect } from 'react'

const Alert = ({ message, alert, setAlert }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return clearTimeout(timer)
    }, [alert, setAlert])

    return (
        alert && (
            <div style={{ color: 'red' }}>{message}</div>
        )
    )
}

export default Alert
