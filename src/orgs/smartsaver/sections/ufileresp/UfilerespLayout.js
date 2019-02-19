import React from 'react'
import Layout from '../../../../components/Layout'
import Navbar from '../../../../components/Navbar'
import NavbarItemButtonContainer from '../../../../components/Navbar/NavbarItemButtonContainer'
import NavbarItem from '../../../../components/Navbar/NavbarItem'
import logo from '../../../../images/smartsaver/ufile-logo.png'

const UfilerespLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar
        navbarBrand={
          <NavbarItem
            isLinkWillOpenInNewWindow={true}
            text={<img className="image" src={logo} alt="UfileRESP" />}
            href="https://www.ufile.ca?ref=ssorg"
          />
        }
        navbarEnd={
          <NavbarItemButtonContainer>
            <a className="button is-danger" href="#apply">
              <strong>Apply</strong>
            </a>
          </NavbarItemButtonContainer>
        }
      />
      <main>{children}</main>
    </Layout>
  )
}

export default UfilerespLayout
