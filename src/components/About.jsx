import React from 'react'
import { Link } from 'react-router-dom'
import TeamImage from '../Image/teambgimg.jpg'

const About = ({ switchMode, switchInnerColor }) => {
  return (
    <div className='h-[120vh] px-5 py-4 flex' style={switchMode}>
      <div
        style={switchInnerColor}
        className='rounded-md p-10 w-[60%]'>
        <h2 className='text-4xl font-semibold'>About</h2>
        <p className='mt-5'><span>Welcome to <Link className='border-b border-gray-400 text-blue-600'>EZ Case Converter</Link>, your go-to tool for transforming text effortlessly! Whether you need to convert text to uppercase, lowercase, title case, or any other format, our user-friendly web application simplifies the process.</span></p>
        <p className='mt-5'><span>Designed with simplicity in mind, EZ Case Converter allows users to quickly input their text and choose from a variety of case styles. Perfect for writers, students, and professionals, our tool ensures that your text is always presented in the format you need.</span></p>
        <p className='mt-5'><span>No downloads, no complicated settings—just straightforward functionality at your fingertips. Try Easy Case Converter today and make text transformation a breeze!</span></p>
        <div className='flex mt-8'>
          <div className='w-[35%]'>
            <img src={TeamImage} alt="Team" className='h-[300px] rounded-sm' />
            <p className='text-center'>Team EZ Case Converter</p>
          </div>
          <div className='ml-6 w-[65%]'>
            <p><span>At <Link className='border-b border-gray-400 text-blue-600'>EZ Case Converter</Link>, your privacy and data security are our top priorities. We are committed to ensuring that your information remains confidential and protected while you use our services. We genuinely value your feedback, as it helps us improve and enhance your experience.</span></p>
            <p className='mt-6'><span>Thank you for visiting EZ Case Converter—we appreciate your support!</span></p>
          </div>
        </div>
      </div>

      <div
        style={switchInnerColor}
        className='ml-7 w-[40%] p-10 rounded-md'>
        <h2 className='text-4xl font-semibold'>About Buttons</h2>
        <div>
          <h3 className='font-semibold text-xl mt-4'>Uppercase</h3>
          <p className='text-sm mt-2'><span>The Uppercase feature transforms all letters in your text to capital letters. This is useful for headings or emphasizing important information.
            <p>Example: “hello world” becomes “HELLO WORLD”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl mt-4'>Lowercase</h3>
          <p className='text-sm mt-2'><span>The Lowercase feature converts all letters to small letters, which is ideal for uniformity in text.
            <p>Example: “HELLO WORLD” becomes “hello world”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl mt-4'>Sentence Case</h3>
          <p className='text-sm mt-2'><span>Sentence Case capitalizes the first letter of each sentence while keeping the rest in lowercase. This is perfect for standardizing sentences.
            <p>Example: “hello world. this is a test.” becomes “Hello world. This is a test.”</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl mt-4'>Capitalized Case Case</h3>
          <p className='text-sm mt-2'><span>The Capitalized Case feature capitalizes the first letter of each word in your text. This is commonly used for titles and headings.
            <p>Example: “the quick brown fox” becomes “The Quick Brown Fox”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl mt-4'>Toggle Case Case</h3>
          <p className='text-sm mt-2'><span>Toggle Case switches the case of each letter—uppercase letters become lowercase and vice versa. This is a fun way to play with text.
            <p>Example: “Hello World” becomes “hElLo wOrLd”.</p></span></p>
        </div>
      </div>
    </div>
  )
}

export default About
