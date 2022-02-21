import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks } from '../config'
import { navStyles } from '../styles'

const Nav = () => {
  return (
    <nav className={ navStyles.nav }>

      <ul className={ navStyles.ul }>
        {
          navLinks.map(({ name, url }, i) => {
            if (name !== "Resume") {
              return (
              <Link to={url} key={i} className={ navStyles.liLink }>
                <li key={i}>
                  { name }
                </li>
              </Link>
              )
            } else {
              return (
                <a href="/MattCachoResume.pdf" key={i} className={ navStyles.liLink } target="_blank" rel="noopener noreferrer">
                  <li key={i}>
                    { name }
                  </li>
                </a>
              )
            }
          })
        }
      </ul>
    </nav>
  )
}

export default Nav