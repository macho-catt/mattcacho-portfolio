import * as React from 'react'
import Nav from './nav'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      {/* <head>
        <title>{pageTitle}</title>
      </head> */}

      <div id="root" className="lg:grid lg:grid-cols-6">
        <Nav />

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