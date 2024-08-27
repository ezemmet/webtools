import React, { useState } from 'react'

const CaseConverter = () => {

    const [text, setText] = useState('')
    const [alert, setAlert] = useState('')

    const emptyCheck = (msg) => {
        if (text === '') {
            setAlert(msg)
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault()
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleUpperCase = () => {
        emptyCheck('ALERT: Input box is empty for TUC')
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
        emptyCheck('ALERT: Input box is empty for TLC')
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleSentenceCase = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c){
            return c.toUpperCase()
        })
        setText(newText)
    }

    const handleRemoveSpaces = () => {
        emptyCheck('ALERT: Input box is empty RXS')
        let newText = text.trim().replace(/\s+/g, ' ')
        setText(newText)
    }

    const handleClear = () => {
        let newText = ""
        setText(newText)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div id="caseCon-container">
            <h2>CASE CONVERTER</h2>
            <form onSubmit={handleSumbit}>
                <textarea
                    value={text}
                    onChange={handleOnChange}
                    id="caseConText"
                    placeholder='Type text here...'
                    className='w-[50vw] h-[60vh] border-black border-solid border'></textarea>
                <button
                    onClick={handleUpperCase}
                    className='border border-solid border-black ml-1'>UPPER CASE
                </button>
                <button
                    onClick={handleLowerCase}
                    className='border border-solid border-black ml-1'>lower case</button>
                <button
                onClick={handleSentenceCase}
                    className='border border-solid border-black ml-1'>Sentence case</button>
                <button
                    className='border border-solid border-black ml-1'>Capatilized Case</button>
                <button
                    className='border border-solid border-black ml-1'>tOgGle cAse</button>
                <button
                onClick={handleRemoveSpaces}
                    className='border border-solid border-black ml-1'>Remove extra space</button>
                <button
                    onClick={handleClear}
                    className='border border-solid border-black ml-1'>Clear</button>
                <button
                    onClick={handleCopy}
                    className='border border-solid border-black ml-1'>Copy text</button>
                {alert && <p style={{ color: 'red' }}>{alert}</p>}
            </form>
        </div>
    )
}

export default CaseConverter

