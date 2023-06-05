import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";


const Layout = () => {
  return (
    <>
      <header>
        <AppBar/>
      </header>
      <main>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default Layout
