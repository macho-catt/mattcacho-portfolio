import * as React from 'react';
import {
  Layout,
  Home,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from '../components';

function IndexPage() {
  return (
    <Layout pageTitle="Matt Cacho">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <h2>misc</h2> */}
      <Contact />
    </Layout>
  );
}

export default IndexPage;
