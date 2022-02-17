import * as React from 'react'
import { Layout } from '../components'
import { notFoundStyles } from '../styles'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Matt Cacho">
      <section className={ notFoundStyles.section }>
        <h1 className={ notFoundStyles.h1 }>
          404 not found
        </h1>
      </section>
    </Layout>
  )
}

export default NotFoundPage