import React from 'react'
import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Section from '../Section'
import smartsaverLogo from '../../../images/smartsaver/smartsaver-logo-small.png'
import marked from '../../../libs/marked'

const translations = {
  en: {
    mainText: 'Copyright SmartSAVER.org © 2018. All rights reserved.',
    privacy: {
      text: 'PRIVACY POLICY'.toUpperCase(),
      link: 'https://www.smartsaver.org/privacy.shtml',
    },
    terms: {
      text: 'Terms & Conditions'.toUpperCase(),
      link: 'http://www.smartsaver.org/terms-conditions.shtml',
    },
    charity: 'Charitable Registration #136402948RR0001',
    contact: {
      title: 'Contact Us',
      text: `
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
      `,
    },
  },
  fr: {
    mainText: 'Copyright SmartSAVER.org © 2018. Tous droits réservés.',
    privacy: {
      text: 'Politique de confidentialité'.toUpperCase(),
      link: 'http://www.smartsaver.org/fr/privacy.shtml',
    },
    terms: {
      text: 'Conditions et modalités'.toUpperCase(),
      link: 'http://www.smartsaver.org/fr/terms-conditions.shtml',
    },
    charity: 'Numéro d’organisme de bienfaisance : #136402948RR0001',
    contact: {
      title: 'Coordonnées :',
      text: `
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
      `,
    },
  },
}

const styles = {
  root: {
    background: '#003b59',
  },
  typography: {
    padding: '.1rem 0',
    color: 'white',
  },
  typographyBody1: {
    fontSize: 16,
    fontWeight: '300',
    '& a': {
      color: '#fabc09',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  link: {
    color: '#fabc09',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gridRowGap: '1rem',
  },
  containerItem: {
    padding: '0 1rem',
  },
}

/**
 *
 * @param {Object} classes - jss injection
 * @param {String} [locale = 'en']
 */

function SmartsaverFooter({ locale = 'en', classes }) {
  const content = translations[locale]
  const BodyText = props => (
    <Typography
      classes={{ body1: classes.typographyBody1 }}
      className={classes.typography}
      variant="body1"
      {...props}
    >
      {props.children}
    </Typography>
  )
  const LinkNewTab = props => (
    <a
      className={classes.link}
      href={content.privacy.link}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
  const Item = props => (
    <div className={classes.containerItem}>{props.children}</div>
  )
  return (
    <footer className={classes.root}>
      <Section>
        <div className={classes.container}>
          <Item>
            <img src={smartsaverLogo} alt="SmartSAVER.org" />
            <BodyText>{content.mainText}</BodyText>
            <BodyText>
              <LinkNewTab>{content.privacy.text}</LinkNewTab>
              {' | '}
              <LinkNewTab>{content.terms.text}</LinkNewTab>
            </BodyText>
            <BodyText>{content.charity}</BodyText>
          </Item>
          <Item>
            <Typography variant="h4" className={classes.typography}>
              {content.contact.title}
            </Typography>
            <BodyText component="div">
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(content.contact.text),
                }}
              ></div>
            </BodyText>
          </Item>
        </div>
      </Section>
    </footer>
  )
}

export default withStyles(styles)(SmartsaverFooter)
