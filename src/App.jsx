import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CaseConverter, Header, Footer, About, Contact } from "./Imports/import.component"
import { useState } from "react"

function App() {

  // THEME SWITCH FUNCTION........
  const [mode, setMode] = useState('Dark')

  const handleMode = () => {
    if (mode === 'Dark') {
      setMode('Light')
    } else {
      setMode('Dark')
    }
  }

  // Object for more theme colors, for different possiblity.
  const switchMode = {
    color: mode === 'Dark' ? '#fff' : 'black',
    backgroundColor: mode === 'Dark' ? '#0d203a' : 'rgb(217 219 218)'
  }
  const switchInnerColor = {
    color: mode === 'Dark' ? '#fff' : 'black',
    backgroundColor: mode === 'Dark' ? 'rgb(9 24 45)' : 'rgb(205 205 205)'
  }

  // FOR SMALL DEVICES BARS

  return (
    <>
      <BrowserRouter>
        <Header handleMode={handleMode} mode={mode} switchMode={switchMode}/>
        <Routes>
          <Route path="/" element={
            <CaseConverter mode={mode} switchMode={switchMode} switchInnerColor={switchInnerColor} />
          }></Route>
          <Route path="/about" element={
            <About switchMode={switchMode} switchInnerColor={switchInnerColor}/>
          }></Route>
          <Route path="/contact" element={
            <Contact switchMode={switchMode} switchInnerColor={switchInnerColor}/>
          }></Route>
        </Routes>
        <Footer switchMode={switchMode} switchInnerColor={switchInnerColor} />
      </BrowserRouter>
    </>
  )
}

export default App
