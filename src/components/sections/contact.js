import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { contactStyles } from '../../styles'

const Contact = () => {

  return(
    <section id="contact" className={ contactStyles.section }>
      Contact
    </section>
  )
}

export default Contact