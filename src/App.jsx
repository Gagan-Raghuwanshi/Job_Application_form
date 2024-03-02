import './App.css'
import Form from './Components/Form'
import Preview from './Components/Preview'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Form/>} />
      <Route path='/preview' element = {<Preview/>} />


     </Routes>
    </>
  )
}

export default App
