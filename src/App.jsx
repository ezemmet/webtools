import { CaseConverter, Header, Footer } from "./Imports/import.component"
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
    backgroundColor: mode === 'Dark' ? '#1e3049' : 'rgb(193 194 195)'
  }

  return (
    <>
      <Header handleMode={handleMode} mode={mode} switchMode={switchMode} />
      <CaseConverter mode={mode} switchMode={switchMode} switchInnerColor={switchInnerColor} />
      <Footer switchMode={switchMode}/>
    </>
  )
}

export default App
