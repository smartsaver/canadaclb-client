import React from 'react'
import withStyles from 'react-jss'
import bannerPhoto from '../../../images/ywca/graduation-girl.jpg'

const styles = theme => ({
  Container: {
    margin: '0 auto',
    minHeight: '30rem',
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
})

function BannerSection(props) {
  const { classes } = props
  return (
    <section>
      <div className={classes.Container} />
    </section>
  )
}

export default withStyles(styles)(BannerSection)
