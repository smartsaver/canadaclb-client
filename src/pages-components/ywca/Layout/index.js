import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/index'
import NavbarBrand from '../components/Navbar/NavbarBrand'
import Footer from '../components/Footer/index'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
  },
})

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar brand={<NavbarBrand logo={''} alt="YWCA" />} />

      {children}
      <Footer />
    </Fragment>
  )
}

export default withStyles(styles)(Layout)
