import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { projStyles } from '../../styles';
import { ProjectCard } from '..';

function Projects() {
  const query = graphql`
    query ProjMDX {
      projects: allMdx(filter: { slug: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            title
            url
            techStack
            github
            order
          }
          body
          id
        }
      }
    }
  `;

  const { projects } = useStaticQuery(query);
  const { nodes } = projects;

  return (
    <section id="projects" className={projStyles.section}>
      <div className={projStyles.container}>
        <h2 className={projStyles.h2}>Projects</h2>

        <div className={projStyles.body}>
          {nodes
            .map((node) => (
              <ProjectCard id={node.id} node={node} key={node.id} />
            ))
            .sort(
              (a, b) =>
                b.props.node.frontmatter.order - a.props.node.frontmatter.order
            )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
