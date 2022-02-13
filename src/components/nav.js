import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks } from '../config'
import { navStyles } from '../styles'

const Nav = () => {
  return (
    <nav className={ navStyles.nav }>

      <ul className={ navStyles.ul }>
        {
          navLinks.map(({ name, url }, i) => (
            <Link to={url} key={i} className={ navStyles.liLink }>
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