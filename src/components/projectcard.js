import * as React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { projCardStyles } from '../styles';
import GithubIcon from '/content/images/svg/github.svg';
import LiveIcon from '/content/images/svg/live.svg';

function ProjectCard({ node }) {
  return (
    <div className={projCardStyles.card}>
      <div className={projCardStyles.header}>
        <h2 className={projCardStyles.headerTitle}>{node.frontmatter.title}</h2>
        <div className={projCardStyles.headerInfo}>
          <h1>{node.frontmatter.techStack}</h1>
          <div className={projCardStyles.iconLinks}>
            <a
              href={node.frontmatter.github}
              key="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className={projCardStyles.svgIcon} />
            </a>

            <a
              href={node.frontmatter.url}
              key="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiveIcon className={projCardStyles.svgIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={projCardStyles.textBody}>
        <MDXRenderer>{node.body}</MDXRenderer>
      </div>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  node: PropTypes.objectOf(PropTypes.node),
};

ProjectCard.defaultProps = {
  node: null,
};
