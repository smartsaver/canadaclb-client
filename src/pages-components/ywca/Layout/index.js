import React, { Fragment } from 'react'
import logo from '../../../images/ywca/ywca-logo.png'
import Navbar from '../components/Navbar/index'
import NavbarBrand from '../components/Navbar/NavbarBrand'
import Footer from '../components/Footer/index'
import withStyles from '@material-ui/core/styles/withStyles'
import grey from '@material-ui/core/colors/grey'

const styles = () => ({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
    'section:nth-child(odd)': {
      backgroundColor: grey[100],
    },
  },
})

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar brand={<NavbarBrand logo={logo} alt="YWCA" />} />

      {children}
      <Footer />
    </Fragment>
  )
}

export default withStyles(styles)(Layout)
