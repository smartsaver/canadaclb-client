import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  logo: {
    padding: '.3rem 0',
    maxWidth: '17rem',
  },
})

function NavbarBrand(props) {
  const { classes, logo, alt } = props
  return (
    <a className={classes.root} href="./#">
      <img className={classes.logo} src={logo} alt={alt} />
    </a>
  )
}

export default withStyles(styles)(NavbarBrand)
