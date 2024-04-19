import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Display from "./components/Display"
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.calculator}>
      <Display></Display>      
      <ButtonContainer></ButtonContainer>
    </div>
  )
}
export default App
