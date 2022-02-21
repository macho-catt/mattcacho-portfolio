import * as React from 'react'
import { Head, Nav, Footer } from '../components'
import { layoutStyles } from '../styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      <div id="root" className={ layoutStyles.root }>
        <Nav />
        {/* div to take the space of the fixed nav bar */}
        <div className={ layoutStyles.placeholder } />
        <main className={ layoutStyles.main }>
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Layout