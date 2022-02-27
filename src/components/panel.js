import * as React from 'react';
import PropTypes from 'prop-types';
import * as Dayjs from 'dayjs';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { panelStyles } from '../styles';
import LiveIcon from '/content/images/svg/live.svg';
import GithubIcon from '/content/images/svg/github.svg';

// For styling the bullet points in the MDX body
const components = {
  li: (props) => <li {...props} className={panelStyles.liBullet} />,
};

function Panel({ title, workExpArr }) {
  return (
    <div className={panelStyles.container}>
      <h2 className={panelStyles.h2}>{title}</h2>

      <ul className={panelStyles.ul}>
        {workExpArr.map((node) => (
          <li key={node.id} className={panelStyles.li}>
            <div className={panelStyles.liHeader}>
              <h3 className={panelStyles.h3}>{node.frontmatter.org}</h3>
              <div className={panelStyles.iconLinks}>
                {node.frontmatter.github && (
                  <a
                    href={node.frontmatter.github}
                    key="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className={panelStyles.svgIcon} />
                  </a>
                )}
                {node.frontmatter.live && (
                  <a
                    href={node.frontmatter.live}
                    key="Live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiveIcon className={panelStyles.svgIcon} />
                  </a>
                )}
              </div>
            </div>

            <div className={panelStyles.liBody}>
              <div>
                <h4 className={panelStyles.h4}>{node.frontmatter.role}</h4>

                <h6 className={panelStyles.h6}>
                  {Dayjs(node.frontmatter.start).format('MMM YYYY')} -{' '}
                  {node.frontmatter.end !== 'Present'
                    ? Dayjs(node.frontmatter.end).format('MMM YYYY')
                    : 'Present'}
                </h6>
              </div>

              <div>
                <MDXProvider components={components}>
                  <MDXRenderer>{node.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Panel;

Panel.propTypes = {
  title: PropTypes.string,
  workExpArr: PropTypes.arrayOf,
};

Panel.defaultProps = {
  title: null,
  workExpArr: null,
};
