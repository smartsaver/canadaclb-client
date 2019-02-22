import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../smartsaver/SmartsaverFooter'
import SmartsaverNavbar from '../smartsaver/SmartsaverNavbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import brandLogo from '../../images/smartsaver/smartsaver-logo-small.png'

const Navbar = () => {
  return (
    <SmartsaverNavbar
      navbarBrand={
        <NavbarItem
          text={<img src={brandLogo} alt="SmartSAVER" />}
          href="https://www.smartsaver.org/"
          isLinkWillOpenInNewWindow={true}
        />
      }
      navbarEnd={<NavbarItem text="Contact" href="#contact" />}
    />
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <h1>Hello World</h1>
      </main>
      <h2>Smartsaver footer</h2>
      <Footer />
    </Layout>
  )
}

export default IndexPage
