import React from 'react'
import withStyles from 'react-jss'
import bannerPhoto from '../../../images/ywca/graduation-girl.jpg'
import Typography from '@material-ui/core/Typography'
import lightBlue from '@material-ui/core/colors/lightBlue'

const styles = theme => ({
  Container: {
    margin: '0 auto',
    minHeight: '25rem',
    maxWidth: theme.breakpoints.values.xl,
    backgroundImage: `url(${bannerPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPositionY: '2rem',
    [theme.breakpoints.up('xl')]: {
      borderRadius: 3,
    },
  },
  textContainer: {
    backgroundColor: lightBlue[50],
  },
  textSection: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.xl,
    minHeight: '13rem',
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 4rem',
    },
  },
  text: {
    margin: '0 1rem',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '1.7rem',
    '& p': {
      marginBottom: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 4rem',
    },
  },
})

function BannerSection(props) {
  const { classes, content = { text: '' } } = props
  return (
    <section>
      <div className={classes.Container} />
      <div className={classes.textContainer}>
        <div className={classes.textSection}>
          <Typography
            variant="h2"
            classes={{ root: classes.text }}
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        </div>
      </div>
    </section>
  )
}

export default withStyles(styles)(BannerSection)
