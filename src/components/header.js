import * as React from 'react';
import { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { headerStyles } from '../styles';
import { navLinks } from '../config';

function Header() {
  const [hamClicked, setHamClicked] = useState(false);

  const handleHamClick = () => {
    setHamClicked(!hamClicked);
  };

  const handleLinkClick = () => {
    setHamClicked(false);
  };

  return (
    <section className={headerStyles.section}>
      {/* div to take the space at the top for mobile */}
      <div className={headerStyles.opaqueHeader} />

      <button
        type="button"
        className={headerStyles.hamburger}
        onClick={handleHamClick}
        onKeyDown={handleHamClick}
      >
        <span className={headerStyles.span1} />
        <span className={headerStyles.span2} />
        <span className={headerStyles.span3} />
      </button>

      {hamClicked && (
        <nav className={headerStyles.mobileNav}>
          <ul className={headerStyles.ul}>
            {navLinks.map(({ name, url }, i) => (
              <span
                role="button"
                onClick={handleLinkClick}
                onKeyDown={handleLinkClick}
                tabIndex={i}
                key={name}
              >
                <AnchorLink to={url} key={name}>
                  <li key={name}>{name}</li>
                </AnchorLink>
              </span>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}

export default Header;
