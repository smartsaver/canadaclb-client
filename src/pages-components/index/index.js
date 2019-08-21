import React from 'react'
import Layout from '../../bulma-components/Layout'
import SmartsaverNavbar from '../smartsaver/SmartsaverNavbar'
import NavbarItem from '../../bulma-components/Navbar/NavbarItem'
import brandLogo from '../../images/smartsaver/smartsaver-logo-small.png'
import Banner from './Banner'
import SEO from '../components/SEO'
import IndexContentSections from './IndexContentSections'
import Footer from './IndexFooter'
import allContent from './content'

const { bannerContent, footerContent } = allContent

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
      <SEO title="Home" />
      <Navbar />
      <main>
        <Banner content={bannerContent} />
        <IndexContentSections content={allContent} />
      </main>
      <Footer content={footerContent} />
    </Layout>
  )
}

export default IndexPage
