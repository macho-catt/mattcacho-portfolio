import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks } from '../config'

const Nav = () => {
  return (
    <nav className="lg:col-span-1 h-screen bg-midnightBlue text-white">

      <ul className="lg:flex lg:flex-col lg:justify-center lg:gap-5 lg:h-full text-center">
        {
          navLinks.map(({ name, url }, i) => (
            <Link to={url} className="hover:text-midnightBlue hover:bg-white">
              <li key={i}>
                { name }
              </li>
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav