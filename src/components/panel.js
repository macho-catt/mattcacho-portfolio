import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { panelStyles } from '../styles'
import * as Dayjs from 'dayjs'
import { MDXProvider } from '@mdx-js/react'

const Panel = ({ title, workExpArr }) => {
  const components = {
    li: props => <li {...props} className={panelStyles.liBullet} />
  }
  return (
    <div className={ panelStyles.container }>
      <h2 className={ panelStyles.h2 }>
        { title }
      </h2>

      <ul className={ panelStyles.ul }>
        {
          workExpArr.map((node, i) => (
            <li key={ i } className={ panelStyles.li }>

              <div className={ panelStyles.liHeader }>
                <h3 className={ panelStyles.h3 }>
                  { node.frontmatter.org }
                </h3>
              </div>

              <div className={ panelStyles.liBody }>
                <div>
                  <h4 className={ panelStyles.h4 }>
                    { node.frontmatter.role }
                  </h4>
                  
                  <h6 className={ panelStyles.h6 }>
                    { Dayjs(node.frontmatter.start).format('MMM YYYY') } - { node.frontmatter.end !== "Present" ? Dayjs(node.frontmatter.end).format('MMM YYYY') : "Present" }
                  </h6>
                </div>

                <div>
                  <MDXProvider components={ components }>
                    <MDXRenderer>
                      { node.body }
                    </MDXRenderer>
                  </MDXProvider>
                </div>
              </div>

            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Panel