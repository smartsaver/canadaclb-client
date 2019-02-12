import React from 'react'
import Layout from '../../../../components/Layout'
import Navbar from '../../../../components/Navbar'
import NavbarItem from '../../../../components/Navbar/NavbarItem'
import logo from '../../images/ufile-logo.png'

const UfilerespLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar
        navbarBrand={
          <NavbarItem
            text={<img className="image" src={logo} alt="UfileRESP" />}
          />
        }
      />
      <main>{children}</main>
    </Layout>
  )
}

export default UfilerespLayout
