import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { contactStyles } from '../../styles'

const Contact = () => {

  const { socials } = useStaticQuery(query)
  const email = socials.frontmatter.email

  return(
    <section id="contact" className={ contactStyles.section }>
      <div className={ contactStyles.container }>
        <h1 className={ contactStyles.h1 }>
          Get in touch:&nbsp;
          <a href={ `mailto:${email}` } className={ contactStyles.h1Link }>
            { email }
          </a>
        </h1>
      </div>
    </section>
  )
}

const query = graphql`
  query ContactMDX {    
    socials: mdx(slug: {regex: "/socials/"}) {
      frontmatter {
        email
      }
    }
  }
`

export default Contact