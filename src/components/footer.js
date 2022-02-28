import * as React from 'react';
import { footerStyles } from '../styles';

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://github.com/macho-catt/mattcacho-portfolio"
        target="_blank"
        className={footerStyles.footerLink}
        rel="noreferrer"
      >
        <div>Designed and built by Matt Cacho using GatsbyJS</div>
      </a>
    </footer>
  );
}

export default Footer;
