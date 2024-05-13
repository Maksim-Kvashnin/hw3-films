import './App.css'
import { Stars } from './Components/Stars/Stars'

function App() {
  return (
    <>
      <Stars />
      <Stars count={1}/>
      <Stars count={3}/>
      <Stars count={5}/>
      <Stars count={'star'}/>
      <Stars count={0}/>
      <Stars count={7}/>
    </>
  )
}

export default App
