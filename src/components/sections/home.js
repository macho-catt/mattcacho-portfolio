import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useStaticQuery, graphql } from 'gatsby';
import { homeStyles } from '../../styles';
import { Resume } from '..';
import GithubIcon from '/content/images/svg/github.svg';
import LinkedinIcon from '/content/images/svg/linkedin.svg';
import TwitterIcon from '/content/images/svg/twitter.svg';

function Home() {
  const query = graphql`
    query HomeMDX {
      home: mdx(slug: { regex: "/home/" }) {
        frontmatter {
          name
          location
          title
        }
        body
      }

      socials: mdx(slug: { regex: "/socials/" }) {
        frontmatter {
          twitter
          github
          linkedin
        }
      }
    }
  `;

  const { home, socials } = useStaticQuery(query);

  const { frontmatter, body } = home;
  const { name, location } = frontmatter;
  const socialList = Object.entries(socials.frontmatter);
  const socialsArr = [];

  const linkSocial = (social) => {
    switch (social) {
      case 'github':
        return <GithubIcon className={homeStyles.svgIcon} />;
      case 'linkedin':
        return <LinkedinIcon className={homeStyles.svgIcon} />;
      case 'twitter':
        return <TwitterIcon className={homeStyles.svgIcon} />;
      default:
        return null;
    }
  };

  socialList.forEach(([social, link]) => {
    socialsArr.push({
      social,
      link,
      component: linkSocial(social),
    });
  });

  return (
    <section id="home" className={homeStyles.section}>
      <div className={homeStyles.container}>
        <h1 className={homeStyles.name}>{name}</h1>
        <h2 className={homeStyles.h2}>{location}</h2>
        <MDXRenderer>{body}</MDXRenderer>

        <ul className={homeStyles.ul}>
          {socialsArr.map(({ social, link, component }) => (
            <li key={social}>
              <a
                href={link}
                key={social}
                target="_blank"
                rel="noopener noreferrer"
              >
                {component}
              </a>
            </li>
          ))}
          <li key="Resume">
            <Resume />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
