import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { skillStyles } from '../../styles'

const Skills = () => {

  const { skills } = useStaticQuery(query)
  const {
    tools,
    frameworks,
    languages,
    technologies
  } = skills.frontmatter

  return (
    <section id="skills" className={ skillStyles.section }>
      <div className={ skillStyles.container }>
        <h2 className={ skillStyles.h2 }>
          Skills
        </h2>

        <div className={ skillStyles.body }>
          <div className= { skillStyles.col }>
            <h3 className={ skillStyles.h3 }>Languages</h3>
            <ul>
              {
                languages.map((language, i) => (
                  <li key={ i }>{ language }</li>
                ))
              }
            </ul>
          </div>

          <div className= { skillStyles.col }>
            <h3 className={ skillStyles.h3 }>Frameworks</h3>
            <ul>
              {
                frameworks.map((framework, i) => (
                  <li key={ i }>{ framework }</li>
                ))
              }
            </ul>
          </div>

          <div className= { skillStyles.col }>
            <h3 className={ skillStyles.h3 }>Technologies</h3>
            <ul>
              {
                technologies.map((technology, i) => (
                  <li key={ i }>{ technology }</li>
                ))
              }
            </ul>
          </div>

          <div className= { skillStyles.col }>
            <h3 className={ skillStyles.h3 }>Tools</h3>
            <ul>
              {
                tools.map((tool, i) => (
                  <li key={ i }>{ tool }</li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

const query = graphql`
  query SkillsMDX {
    skills: mdx(slug: {regex: "/skills/"}) {
      frontmatter {
        tools
        frameworks
        languages
        technologies
      }
    }
  }
`
export default Skills