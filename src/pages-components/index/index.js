import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../smartsaver/SmartsaverFooter'
import SmartsaverNavbar from '../smartsaver/SmartsaverNavbar'
import NavbarItem from '../../components/Navbar/NavbarItem'
import brandLogo from '../../images/smartsaver/smartsaver-logo-small.png'
import Banner from './Banner'
import allContent from './content'

const { footerContent } = allContent

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
      navbarEnd={
        <NavbarItem text="Contact" href="mailto:info@smartsaver.org" />
      }
    />
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Banner content={footerContent} />
      </main>
      <h2>Smartsaver footer</h2>
      <Footer />
    </Layout>
  )
}

export default IndexPage
