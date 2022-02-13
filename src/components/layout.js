import * as React from 'react'
import Head from './head'
import Nav from './nav'
import { layoutStyles } from '../styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      <div id="root" className={ layoutStyles.root }>
        <Nav />
        {/* div to take the space of the fixed nav bar */}
        <div className="lg:col-span-1" />
        <div className="lg:col-span-5">
          <main className={ layoutStyles.main }>
            {children}
          </main>

          <footer className="bg-otherPurple">Footer</footer>
        </div>
      </div>
    </>
  )
}

export default Layout