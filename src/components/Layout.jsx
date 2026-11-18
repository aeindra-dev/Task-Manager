import React from 'react'
import NavBar from "./NavBar";

const Layout = ({dark,setDark,children}) => {
  return (
    <div className={'min-h-dvh grid grid-rows-[auto_1fr_auto] ' + (dark?'bg-black text-red-600':'bg-white text-blue-600')}>
        <header className='sticky top-0 z-50'>
            <NavBar dark={dark} setDark={setDark}></NavBar>
        </header>
        <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
            {children}
        </main>
        <footer>
            Thanks
        </footer>
    </div>
  )
}

export default Layout