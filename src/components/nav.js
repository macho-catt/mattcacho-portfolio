import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config';
import { navStyles } from '../styles';
import { Resume } from '.';

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        {navLinks.map(({ name, url }) => (
          <Link to={url} key={name} className={navStyles.liLink}>
            <li key={name}>{name}</li>
          </Link>
        ))}
      </ul>
      <Resume />
    </nav>
  );
}

export default Nav;
