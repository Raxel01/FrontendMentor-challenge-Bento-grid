import { useState } from 'react'
import style from './App.module.css'
import LeftComponent from './components/LeftComponent'
import RightComponent from './components/RightComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.App}>
      <LeftComponent/>
      <RightComponent/>
    </div>
  )
}

export default App;