import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { contactStyles } from '../../styles';

function Contact() {
  const query = graphql`
    query ContactMDX {
      socials: mdx(slug: { regex: "/socials/" }) {
        frontmatter {
          email
        }
      }
    }
  `;

  const { socials } = useStaticQuery(query);
  const { email } = socials.frontmatter;

  return (
    <section id="contact" className={contactStyles.section}>
      <div className={contactStyles.container}>
        <h1 className={contactStyles.h1}>Get in touch:&nbsp;</h1>
        <h1>
          <a href={`mailto:${email}`} className={contactStyles.h1Link}>
            email me!
          </a>
        </h1>
      </div>
    </section>
  );
}

export default Contact;
