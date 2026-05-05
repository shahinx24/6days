import File from './components/File'
import { Routes, Route } from "react-router-dom"
import Page from './components/Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<File />}/>
      <Route path='/page/:id' element={<Page />}/>
    </Routes>
  )
}

export default App
