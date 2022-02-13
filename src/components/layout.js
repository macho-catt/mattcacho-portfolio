import * as React from 'react'
import Head from './head'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      <div id="root" className="lg:grid lg:grid-cols-6 lg:relative font-sans">
        <Nav />
        {/* div to take the space of the fixed nav bar */}
        <div className="lg:col-span-1" />
        <div className="lg:col-span-5">
          <main>
            <div className="flex flex-col justify-center bg-blue-100">
              {children}
            </div>
          </main>

          <footer className="bg-otherPurple">Footer</footer>
        </div>
      </div>
    </>
  )
}

export default Layout