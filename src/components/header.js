import * as React from 'react';
import { headerStyles } from '../styles';

function Header() {
  return (
    <section className={headerStyles.section}>
      <button type="button" className={headerStyles.hamburger}>
        <span className={headerStyles.span1} />
        <span className={headerStyles.span2} />
        <span className={headerStyles.span3} />
      </button>
    </section>
  );
}

export default Header;
