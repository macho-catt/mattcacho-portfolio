import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { aboutStyles } from '../../styles'

const About = () => {

  const { about } = useStaticQuery(query)
  const { frontmatter, body } = about
  const alt = frontmatter.me_alt
  const image = getImage(frontmatter.me)

  return (
    <section id="about" className={ aboutStyles.section }>
      <div className ={ aboutStyles.container }>
        <h2 className={ aboutStyles.h2 }>
          About me
        </h2>

        <div className={ aboutStyles.body }>
          <div className={ aboutStyles.bodyContent }>
            <MDXRenderer>
              { body }
            </MDXRenderer>
          </div>
          <picture className={ aboutStyles.squareImg }>
            <GatsbyImage 
              image={ image }
              alt={ alt }
              className={ aboutStyles.img }
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  query AboutMDX {
    about: mdx(slug: {regex: "/about/"}) {
      frontmatter {
        me {
          childImageSharp {
            gatsbyImageData
          }
        }
        me_alt
      }
      body
    }
  }
`

export default About