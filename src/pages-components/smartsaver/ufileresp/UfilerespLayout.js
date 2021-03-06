import React from 'react'
import Layout from '../../../bulma-components/Layout'
import Navbar from '../../../bulma-components/Navbar'
import NavbarItemButtonContainer from '../../../bulma-components/Navbar/NavbarItemButtonContainer'
import NavbarItem from '../../../bulma-components/Navbar/NavbarItem'
import SEO from '../../../bulma-components/Seo'
import logo from '../../../images/smartsaver/ufile-logo.png'

const logoUrl = 'https://www.ufile.ca?ref=ssorg'

const UfilerespLayout = ({ children, seoTitle, seoContent }) => {
  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoContent}
        keywords={['resp', 'education', 'ufileresp']}
      />
      <Navbar
        navbarBrand={
          <NavbarItem
            isLinkWillOpenInNewWindow={true}
            text={<img className="image" src={logo} alt="UfileRESP" />}
            href={logoUrl}
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
