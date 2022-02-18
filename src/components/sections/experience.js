import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { expStyles } from '../../styles'
import * as Dayjs from 'dayjs'

const Experience = () => {

  const { exp } = useStaticQuery(query)
  const { nodes } = exp
  
  const sortByDate = (arr) => {
    return arr.sort((a, b) => {
      if (a.frontmatter.end === "Present") {
        return -1
      } else if (b.frontmatter.end === "Present") {
        return 1
      } else {
        return parseInt(b.frontmatter.end) - parseInt(a.frontmatter.end)
      }
    })
  }

  const fullTime = sortByDate(nodes.filter(node => node.frontmatter.status === "Full-Time"))
  const volunteer = sortByDate(nodes.filter(node => node.frontmatter.status === "Volunteer"))

  return (
    <section id="experience" className={ expStyles.section }>
      <div className={ expStyles.container }>

        <div>
          <h2 className={ expStyles.h2 }>
            Work Experience
          </h2>

          <ul>
            {
              fullTime.map((node, i) => (
                <li key={ i }>
                  <h3>
                    { node.frontmatter.org }
                  </h3>
                  <h3>
                    { node.frontmatter.role }
                  </h3>
                  <h3>
                    { Dayjs(node.frontmatter.start).format('MMM YYYY') } - { node.frontmatter.end !== "Present" ? Dayjs(node.frontmatter.end).format('MMM YYYY') : "Present" }
                  </h3>
                  <div>
                    <MDXRenderer>
                      { node.body }
                    </MDXRenderer>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2 className={ expStyles.h2 }>
            Open Source Communities
          </h2>

          <ul>
            {
                volunteer.map((node, i) => (
                  <li key={ i }>
                    <h3>
                      { node.frontmatter.org }
                    </h3>
                    <h3>
                      { node.frontmatter.role }
                    </h3>
                    <h3>
                      { Dayjs(node.frontmatter.start).format('MMM YYYY') } - { node.frontmatter.end !== "Present" ? Dayjs(node.frontmatter.end).format('MMM YYYY') : "Present" }
                    </h3>
                    <div>
                      <MDXRenderer>
                        { node.body }
                      </MDXRenderer>
                    </div>
                  </li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  )
}

const query = graphql`
  query ExpMDX {
    exp: allMdx(filter: {slug: {regex: "/experience/"}}) {
      nodes {
        frontmatter {
          role
          org
          start
          end
          status
        }
        body
      }
    }
  }
`

export default Experience