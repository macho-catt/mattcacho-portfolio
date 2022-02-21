import * as React from 'react'
import { Layout, Home, About, Skills, Experience, Contact } from '../components'

const IndexPage = () => {
  return (
    <Layout pageTitle="Matt Cacho">
      <Home />
      <About />
      <Skills />
      <Experience />
      {/* <h2>portfolio / projects</h2> */}
      {/* <h2>misc</h2> */}
      <Contact />
    </Layout>
  )
}

export default IndexPage