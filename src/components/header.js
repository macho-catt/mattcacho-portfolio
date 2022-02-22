import * as React from 'react';
import { headerStyles } from '../styles';

function Header() {
  return (
    <section className={headerStyles.section}>
      <div className={headerStyles.hamburger}>Hamburger</div>
    </section>
  );
}

export default Header;
