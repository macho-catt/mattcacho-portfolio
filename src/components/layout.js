import * as React from 'react';
import PropTypes from 'prop-types';
import { Head, Header, Nav, Footer } from '.';
import { layoutStyles } from '../styles';

function Layout({ children }) {
  return (
    <>
      <Head />

      <div id="root" className={layoutStyles.root}>
        <Header />
        <Nav />
        {/* div to take the space of the fixed nav bar for desktop view */}
        <div className={layoutStyles.placeholder} />
        <main className={layoutStyles.main}>{children}</main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
