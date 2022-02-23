import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components';
import { notFoundStyles } from '../styles';

function NotFoundPage() {
  return (
    <Layout pageTitle="Matt Cacho">
      <section className={notFoundStyles.section}>
        <h1 className={notFoundStyles.h1}>404 not found</h1>
        <Link to="/" className={notFoundStyles.link}>
          <h2 className={notFoundStyles.h2}>Back to Home</h2>
        </Link>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
