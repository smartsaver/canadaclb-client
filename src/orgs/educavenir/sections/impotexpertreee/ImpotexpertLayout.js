import React from 'react'
import Layout from '../../../../components/Layout'
import Navbar from '../../../../components/Navbar'
import NavbarItem from '../../../../components/Navbar/NavbarItem'
import logo from '../../../../images/educavenir/impot-expert-logo.png'

const ImpotexpertLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar
        navbarBrand={
          <NavbarItem
            text={<img src={logo} alt="ImpotExpertREEE" />}
            href="#"
          />
        }
        navbarEnd={<NavbarItem text="Appliquer" href="#appliquer" />}
      />
      <main>{children}</main>
    </Layout>
  )
}

export default ImpotexpertLayout
