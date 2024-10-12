import { CaseConverter, Header } from "./Imports/import.component"
import { useState } from "react"

function App() {

  // THEME SWITCH FUNCTION........
  const [mode, setMode] = useState('Dark')

  const handleMode = () => {
    if(mode === 'Dark'){
      setMode('Light')
    }else{
        setMode('Dark')
    }
  }

  const switchMode = {
    color: mode === 'Dark' ? '#fff' : 'black',
    backgroundColor: mode === 'Dark' ? '#0d203a' : '#fff'
}

  return (
    <>
      <Header handleMode={handleMode} mode={mode} switchMode={switchMode} />
      <CaseConverter mode={mode} switchMode={switchMode}/>
    </>
  )
}

export default App
