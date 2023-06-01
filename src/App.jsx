import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      <NavLink to='/goit-test-tweets-app/'>Dima</NavLink>
      <NavLink to='goit-test-tweets-app//vite'>Vite</NavLink>
      <Routes>
        <Route path='/goit-test-tweets-app/' element={<div>Dima</div>} />
        <Route path='goit-test-tweets-app//vite' element={<div>Vite</div>} />
     </Routes>
    </>
  )
}

export default App
