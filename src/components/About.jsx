import React from 'react'

const About = ({ switchMode, switchInnerColor }) => {
  return (
    <div className='h-[110vh] px-5 py-4 flex' style={switchMode}>
      <div
        style={switchInnerColor}
        className='rounded-md p-10'>
        <h2 className='text-4xl font-semibold'>About</h2>
        <p><span>Welcome to Easy Case Converter, your go-to tool for transforming text effortlessly! Whether you need to convert text to uppercase, lowercase, title case, or any other format, our user-friendly web application simplifies the process.</span></p>
        <p><span>Designed with simplicity in mind, Easy Case Converter allows users to quickly input their text and choose from a variety of case styles. Perfect for writers, students, and professionals, our tool ensures that your text is always presented in the format you need.</span></p>
        <p><span>No downloads, no complicated settings—just straightforward functionality at your fingertips. Try Easy Case Converter today and make text transformation a breeze!</span></p>
      </div>

      <div
        style={switchInnerColor}
        className='ml-7 w-[80vw] p-10 rounded-md'>
        <h2 className='text-2xl font-semibold'>About Buttons</h2>
        <div>
          <h3 className='font-semibold text-xl'>Uppercase</h3>
          <p><span>The Uppercase feature transforms all letters in your text to capital letters. This is useful for headings or emphasizing important information.
            <p>Example: “hello world” becomes “HELLO WORLD”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>Lowercase</h3>
          <p><span>The Lowercase feature converts all letters to small letters, which is ideal for uniformity in text.
            <p>Example: “HELLO WORLD” becomes “hello world”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>Sentence Case</h3>
          <p><span>Sentence Case capitalizes the first letter of each sentence while keeping the rest in lowercase. This is perfect for standardizing sentences.
            <p>Example: “hello world. this is a test.” becomes “Hello world. This is a test.”</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>Capitalized Case Case</h3>
          <p><span>The Capitalized Case feature capitalizes the first letter of each word in your text. This is commonly used for titles and headings.
            <p>Example: “the quick brown fox” becomes “The Quick Brown Fox”.</p></span></p>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>Toggle Case Case</h3>
          <p><span>Toggle Case switches the case of each letter—uppercase letters become lowercase and vice versa. This is a fun way to play with text.
            <p>Example: “Hello World” becomes “hElLo wOrLd”.</p></span></p>
        </div>
      </div>
    </div>
  )
}

export default About
