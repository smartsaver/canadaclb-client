import React from 'react'
import bannerImage from '../../../images/efry/efry-banner.jpg'
import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  root: {
    minHeight: '43rem',
    marginTop: '3rem',
  },
})

function Banner(props) {
  const { classes } = props
  return (
    <section className={classes.root}>
      <img src={bannerImage} alt="Efry Banner" />
      <Typography variant="srOnly">
        <h1>
          Make your child&apos;s Future Bright with <strong>FREE</strong>
          government money for your child&apos;s education
        </h1>
      </Typography>
    </section>
  )
}

export default withStyles(styles)(Banner)
