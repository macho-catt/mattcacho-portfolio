import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config';
import { navStyles } from '../styles';

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        {navLinks.map(({ name, url }) => {
          if (name !== 'Resume') {
            return (
              <Link to={url} key={name} className={navStyles.liLink}>
                <li key={name}>{name}</li>
              </Link>
            );
          }
          return (
            <a
              href="/MattCachoResume.pdf"
              key={name}
              className={navStyles.liLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li key={name}>{name}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
