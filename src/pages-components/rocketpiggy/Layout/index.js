import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/index'

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />

      {children}
    </Fragment>
  )
}

export default Layout
