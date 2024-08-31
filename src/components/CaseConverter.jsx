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
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
            return c.toUpperCase()
        })
        setText(newText)
    }

    const handleCapatilizesCase = () => {
        let newText = text.toLowerCase()

        let capitalText = newText.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')

        setText(capitalText)
    }

    const handleToggleCase = () => {
        emptyCheck('ALERT: Input empty HTC')
        let newText = text.toLowerCase()
        let toggleText = ''

        for (let i = 0; i < newText.length; i++) {
            let char = newText[i]
            if (i % 2 === 0) {
                toggleText += char.toLowerCase()
            }
            else {
                toggleText += char.toUpperCase()
            }
        }
        setText(toggleText)
    }

    const handleRemoveSpaces = () => {
        emptyCheck('ALERT: Input box is empty RXS')
        let newText = text.trim().replace(/\s+/g, ' ')
        setText(newText)
    }

    const handleClear = () => {
        let newText = ""
        setText(newText)
        setAlert('CLEARED')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setAlert('COPIED')
    }

    return (
        <div id="caseCon-container" className='text-center h-[90vh] dark:bg-[#0d203a] dark:text-[#fff]'>
            <h2 className='text-2xl font-bold py-2 '>Case Converter</h2>
            <form onSubmit={handleSumbit} className='flex flex-col justify-center items-center'>
                <textarea
                    value={text}
                    onChange={handleOnChange}
                    id="caseConText"
                    placeholder='Type text here...'
                    className='w-[50vw] h-[60vh] dark:bg-[#0d203a] dark:text-[#fff] border-[#b6b6b6] border-2 px-6 py-4 outline-none rounded-lg font-semibold'></textarea>
                <div className="button-container my-4">
                    <button
                        onClick={handleUpperCase}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                            className='px-3 py-1 text-sm'>
                            UPPER CASE
                        </span>
                    </button>
                    <button
                        onClick={handleLowerCase}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                            className='px-3 py-1 text-sm'>
                            lower case
                        </span>
                    </button>
                    <button
                        onClick={handleSentenceCase}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                            className='px-3 py-1 text-sm'>
                            Sentence case
                        </span>
                    </button>
                    <button
                        onClick={handleCapatilizesCase}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                           className='px-3 py-1 text-sm'>
                            Capatilized Case
                        </span>
                    </button>
                    <button
                        onClick={handleToggleCase}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                            className='px-3 py-1 text-sm'>
                            tOgGlE CaSe
                        </span>
                    </button>
                    <button
                        onClick={handleRemoveSpaces}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                           className='px-3 py-1 text-sm'>
                            Remove extra space
                        </span>
                    </button>
                    <button
                        onClick={handleClear}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                           className='px-3 py-1 text-sm'>
                            Clear
                        </span>
                    </button>
                    <button
                        onClick={handleCopy}
                        className='border border-[#b6b6b6] bg-[#334155] text-[#fff] ml-1 min-h-[40px] rounded-xl hover:bg-[#4c5c72] hover:text-white transition ease-in-out delay-75'>
                        <span
                            className='px-3 py-1 text-sm'>
                            Copy
                        </span>
                    </button>
                </div>
                {alert && <div style={{ color: 'red' }}>{alert}</div>}
            </form>
        </div>
    )
}

export default CaseConverter

