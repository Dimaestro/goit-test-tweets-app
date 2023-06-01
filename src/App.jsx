
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Dima</h1>
      <NavLink to='/'>1</NavLink>
      <NavLink to='/dima'>2</NavLink>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path='/dima' element={<div>Dima</div>} />
      </Routes>
    </>
  )
}

export default App
