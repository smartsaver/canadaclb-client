import React from 'react'
import Section from '../../components/Section'
import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import marked from '../../../libs/marked'
import logo from '../../../images/efry/efry-logo-small.jpg'

const styles = theme => ({
  logo: {
    width: '100%',
  },
  contact: {
    backgroundColor: '#ffffff',
  },
  text: {
    '& p + p': {
      marginTop: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  bar: {
    padding: '.8rem',
    backgroundColor: theme.palette.secondary.main,
  },
  barContainer: {
    margin: '0 auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 4rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 6rem',
    },
  },
  barText: {
    color: '#ffffff',
    fontWeight: 300,
    '& a': {
      color: '#ffffff',
      textDecoration: 'underline',
    },
    '& a:hover': {
      color: theme.palette.primary.main,
    },
  },
  socialLinks: {
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  socialIcon: {
    fontSize: '1.2rem',
  },
})

function Contact(props) {
  const { classes } = props
  return (
    <footer>
      <Section name="contact" className={classes.contact}>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <img className={classes.logo} src={logo} alt="Efry" />
          </Grid>
          <Grid item md={6}>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{
                __html: marked(`
Brought to you by EFry and SmartSAVER. For more information, call __1-855-737-7252 (1-855-RESP-CLB)__ or info@smartsaver.org.

EFry staff are available to help you with every step of the process, so you can easily access this money to improve your child's future. If you need support with your application, contact EFry at futurebright@elizabethfry.com or __604-520-1166__.
       `),
              }}
            />
          </Grid>
        </Grid>
      </Section>
      <section className={classes.bar}>
        <Grid
          className={classes.barContainer}
          container
          alignItems="center"
          spacing={1}
        >
          <Grid item sm={12} md={8}>
            <Typography variant="body1" className={classes.barText}>
              Learn more about EFry’s programs and services at{' '}
              <a href="https://www.elizabethfry.com" rel="noopener noreferrer">
                www.elizabethfry.com
              </a>
            </Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography
              variant="body1"
              className={`${classes.barText} ${classes.socialLinks}`}
            >
              <a
                href="https://www.facebook.com/EFryVancouver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook{' '}
                <span className={classes.socialIcon}>
                  <i className="fab fa-facebook-square" />
                </span>
              </a>{' '}
              <a
                href="ttps://twitter.com/EFryVancouver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter{' '}
                <span className={classes.socialIcon}>
                  <i className="fab fa-twitter-square" />
                </span>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </section>
    </footer>
  )
}

export default withStyles(styles)(Contact)
