import React from 'react'

const Contact = ({ switchMode, switchInnerColor }) => {

  const handleSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      style={switchMode}
      className='h-[90vh] px-5 py-4 flex'>
      <div
        style={switchInnerColor}
        className='rounded-md p-10'>
        <h2 className='text-4xl font-semibold'>Contact</h2>
        <p className='mt-3'><span className='text-sm'>For questions, comments, and suggestions for how this site can serve you better, please contact us using the form below. Thank you!</span></p>
        <form onSubmit={handleSumbit}>
          <div className='flex flex-col mt-4'>
            <label htmlFor="name">Name: </label>
            <input
              style={switchMode}
              className='rounded outline-none px-3 py-1 mt-1'
              placeholder='Enter Name'
              required
              type="text" />
            <label className='mt-3' htmlFor="email">Email: </label>
            <input
              style={switchMode}
              className='rounded outline-none px-3 py-1 mt-1'
              placeholder='Enter Email'
              required
              type="text" />
            <label className='mt-3' htmlFor="subject">Subject: </label>
            <input
              style={switchMode}
              className='rounded outline-none px-3 py-1 mt-1'
              placeholder='Enter Subject'
              required
              type="text" />
            <label className='mt-3' htmlFor="message">Message: </label>
            <textarea
              style={switchMode}
              className='rounded outline-none px-3 py-1 h-[5rem] mt-1'
              placeholder='Send message'></textarea>
          </div>
          <button
            className='mt-3 border-2 border-lime-500 hover:shadow-lime-hover rounded px-3 py-1 text-green-600 font-semibold'>
            Send
          </button>
        </form>
      </div>
      <div
        style={switchInnerColor}
        className='ml-7 w-[30vw] rounded-md'>
        other
      </div>
    </div>
  )
}

export default Contact
