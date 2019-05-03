import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />

      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
