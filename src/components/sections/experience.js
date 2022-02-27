import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Dayjs from 'dayjs';
import { Panel } from '..';
import { expStyles } from '../../styles';

function Experience() {
  const query = graphql`
    query ExpMDX {
      exp: allMdx(filter: { slug: { regex: "/experience/" } }) {
        nodes {
          frontmatter {
            role
            org
            start
            end
            status
            live
            github
          }
          body
          id
        }
      }
    }
  `;

  const { exp } = useStaticQuery(query);
  const { nodes } = exp;

  const sortByDate = (arr) =>
    arr.sort((a, b) => {
      if (a.frontmatter.end === 'Present') {
        return -1;
      }
      if (b.frontmatter.end === 'Present') {
        return 1;
      }
      return Dayjs(b.frontmatter.end) - Dayjs(a.frontmatter.end);
    });

  const fullTime = sortByDate(
    nodes.filter((node) => node.frontmatter.status === 'Full-Time')
  );
  const volunteer = sortByDate(
    nodes.filter((node) => node.frontmatter.status === 'Volunteer')
  );

  return (
    <section id="experience" className={expStyles.section}>
      <div className={expStyles.container}>
        <Panel title="Work Experience" workExpArr={fullTime} />

        <Panel title="Open Source Communities" workExpArr={volunteer} />
      </div>
    </section>
  );
}

export default Experience;
