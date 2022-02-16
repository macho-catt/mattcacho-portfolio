import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from 'gatsby'
import { homeStyles } from '../../styles'

const Home = () => {

  const { home, socials } = useStaticQuery(query)
  
  const {
    frontmatter,
    body
  } = home
  const {
    name,
    location
  } = frontmatter

  const {
    twitter,
    twitter_icon,
    email,
    github,
    github_icon,
    linkedin,
    linkedin_icon,
  } = socials.frontmatter

  const socialsArr = [
    {
      social: github,
      icon: github_icon
    }
  ]
  // console.log(socialsArr)
  return(
    <section className={ homeStyles.section }>
      <div className={ homeStyles.container }>
        <h1 className={ homeStyles.name }>{ name }</h1>
        <h2 className={ homeStyles.h2 }>{ location }</h2>
        <MDXRenderer>
          { body }
        </MDXRenderer>

        {/* <ul>
          {
            socialsArr.map(({ social, icon }, i) =>(
              <li key={i}>
                <img src={ icon } />
              </li>
            ))
          }
        </ul> */}
      </div>
    </section>
  )
}

const query = graphql`
  query HomeMDX {
    home: mdx(slug: {regex: "/home/"}) {
      frontmatter {
        name
        location
        title
      }
      body
    }
    
    socials: mdx(slug: {regex: "/socials/"}) {
      frontmatter {
        twitter
        twitter_icon
        email
        github
        github_icon
        linkedin
        linkedin_icon
      }
    }
  }
`

export default Home