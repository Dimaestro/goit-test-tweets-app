import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import Layout from '../Layout/Layout';
import css from './App.module.css';

const Home = lazy(() => import('../../page/Home'));
const TweetsPage = lazy(() => import('../../page/Tweets'));

function App() {
  return (
    <div className={css.wrapper}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/tweets' element={<TweetsPage/>} />
        </Route>
     </Routes>
    </div>
  )
}

export default App;
