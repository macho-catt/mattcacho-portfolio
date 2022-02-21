import * as React from 'react'
import { Panel } from '../../components'
import { useStaticQuery, graphql } from 'gatsby'
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
        return Dayjs(b.frontmatter.end) - Dayjs(a.frontmatter.end)
      }
    })
  }

  const fullTime = sortByDate(nodes.filter(node => node.frontmatter.status === "Full-Time"))
  const volunteer = sortByDate(nodes.filter(node => node.frontmatter.status === "Volunteer"))

  return (
    <section id="experience" className={ expStyles.section }>
      <div className={ expStyles.container }>

        <Panel title="Work Experience" workExpArr={ fullTime } />

        <Panel title="Open Source Communities" workExpArr={ volunteer } />

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