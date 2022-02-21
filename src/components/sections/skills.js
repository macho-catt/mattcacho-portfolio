import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { skillStyles } from '../../styles';

function Skills() {
  const query = graphql`
    query SkillsMDX {
      skills: mdx(slug: { regex: "/skills/" }) {
        frontmatter {
          tools
          frameworks
          languages
          technologies
        }
      }
    }
  `;

  const { skills } = useStaticQuery(query);
  const { tools, frameworks, languages, technologies } = skills.frontmatter;

  return (
    <section id="skills" className={skillStyles.section}>
      <div className={skillStyles.container}>
        <h2 className={skillStyles.h2}>Skills</h2>

        <div className={skillStyles.body}>
          <div className={skillStyles.col}>
            <h3 className={skillStyles.h3}>Languages</h3>
            <ul>
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>

          <div className={skillStyles.col}>
            <h3 className={skillStyles.h3}>Frameworks</h3>
            <ul>
              {frameworks.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
          </div>

          <div className={skillStyles.col}>
            <h3 className={skillStyles.h3}>Technologies</h3>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className={skillStyles.col}>
            <h3 className={skillStyles.h3}>Tools</h3>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
