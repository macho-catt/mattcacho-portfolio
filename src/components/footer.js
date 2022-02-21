import * as React from 'react';
import { Link } from 'gatsby';
import { footerStyles } from '../styles';

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      {/* <div className="w-1/3"> */}
      <Link
        to="https://github.com/macho-catt/mattcacho-portfolio"
        target="_blank"
        className={footerStyles.footerLink}
      >
        <div>Designed and built by Matt Cacho</div>
      </Link>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
