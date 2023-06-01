import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      <NavLink to='*'>Dima</NavLink>
      <NavLink to='/vite'>Vite</NavLink>
      <Routes>
        <Route path='/' element={<div>Dima</div>} />
        <Route path='/vite' element={<div>Vite</div>} />
     </Routes>
    </>
  )
}

export default App
