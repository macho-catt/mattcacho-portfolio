import * as React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { navLinks } from '../config';
import { navStyles } from '../styles';

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        {navLinks.map(({ name, url }) => (
          <AnchorLink to={url} key={name} className={navStyles.liLink}>
            <li key={name}>{name}</li>
          </AnchorLink>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
