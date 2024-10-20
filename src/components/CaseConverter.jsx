import React, { useState } from 'react'

const CaseConverter = ({ switchMode, switchInnerColor }) => {

    const [text, setText] = useState('')
    const [alert, setAlert] = useState('')
    const [alertCol, setAlertCol] = useState('green')

    const emptyCheck = () => {
        setAlert('Please enter some text first!')
        setAlertCol('red')
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }

    const workDone = (msg) => {
        setAlert(msg)
        setAlertCol('green')
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleUpperCase = () => {
        if (text === '') {
            emptyCheck()
        } else {
            let newText = text.toUpperCase()
            setText(newText)
            workDone('Text converted to UPPER CASE')
        }
    }

    const handleLowerCase = () => {
        if (text === '') {
            emptyCheck()
        } else {
            let newText = text.toLowerCase()
            setText(newText)
            workDone('Text converted to lower case')
        }
    }

    const handleSentenceCase = () => {
        if (text === '') {
            emptyCheck()
        } else {
            let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
                return c.toUpperCase()
            })
            setText(newText)
            workDone('Text converted to Sentence case')
        }
    }

    const handleCapatilizesCase = () => {
        if (text === '') {
            emptyCheck()
        } else {
            let newText = text.toLowerCase()

            let capitalText = newText.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(' ')
            setText(capitalText)
            workDone('Text converted to Capatilize Case')
        }
    }

    const handleToggleCase = () => {
        if (text === '') {
            emptyCheck()
        } else {
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
            workDone('Text converted to tOgGlE CaSe')
        }
    }

    const handleRemoveSpaces = () => {
        if (text === '') {
            emptyCheck()
        } else {
            let newText = text.trim().replace(/\s+/g, ' ')
            setText(newText)
            workDone('Extra space removed')
        }
    }

    const handleClear = () => {
        let newText = ""
        setText(newText)
        workDone('Text Cleared')
    }

    const handleCopy = () => {
        if (text === '') {
            emptyCheck()
        } else {
            navigator.clipboard.writeText(text)
            workDone('Text Copied')
        }
    }

    return (
        <div
            style={switchMode}
            id="caseCon-container" className='text-center h-[90vh] dark:bg-[#0d203a] dark:text-[#fff] pt-5'>
            <div
                style={switchInnerColor}
                className='mx-[14rem] rounded-md dark:bg-[#1e3049] dark:text-[#fff]'
            >
                <h2 className='text-2xl font-bold py-2'>Case Converter</h2>
                <div
                    className='my-3 text-lg text-left px-10'>
                    <p>Accidentally typed in UPPER CASE or lower case, typing again borthering you, use easy case converter! Simple and fast.</p>
                </div>
                <form onSubmit={handleSumbit} className='flex flex-col justify-center items-center'>
                    <textarea
                        style={switchMode}
                        value={text}
                        onChange={handleOnChange}
                        placeholder='Type text here...'
                        className='w-[64vw] h-[45vh] dark:bg-[#0d203a] dark:text-[#fff] px-6 py-4 outline-none rounded-md font-semibold'></textarea>
                    <div className='h-[30px] mt-2'>
                        {alert && <div
                            style={{ color: alertCol }}
                            className='px-2 py-1 rounded-md font-semibold'
                        >
                            {alert}
                        </div>}
                    </div>
                    <div className="button-container my-4">
                        <button
                            onClick={handleUpperCase}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                UPPER CASE
                            </span>
                        </button>
                        <button
                            onClick={handleLowerCase}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                lower case
                            </span>
                        </button>
                        <button
                            onClick={handleSentenceCase}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                Sentence case
                            </span>
                        </button>
                        <button
                            onClick={handleCapatilizesCase}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                Capatilized Case
                            </span>
                        </button>
                        <button
                            onClick={handleToggleCase}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                tOgGlE CaSe
                            </span>
                        </button>
                        <button
                            onClick={handleRemoveSpaces}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                Remove extra space
                            </span>
                        </button>
                        <button
                            onClick={handleClear}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                Clear
                            </span>
                        </button>
                        <button
                            onClick={handleCopy}
                            className='hover:shadow-blue-hover border-2 font-bold border-blue-700 text-blue-700 ml-1 min-h-[40px] rounded-md'>
                            <span
                                className='px-3 py-1 text-sm'>
                                Copy
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CaseConverter

