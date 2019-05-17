import React from 'react'
import Layout from '../../../bulma-components/Layout'
import Navbar from '../../../bulma-components/Navbar'
import NavbarItem from '../../../bulma-components/Navbar/NavbarItem'
import NavbarItemButtonContainer from '../../../bulma-components/Navbar/NavbarItemButtonContainer'
import SEO from '../../../bulma-components/Seo'
import logo from '../../../images/educavenir/impot-expert-logo.png'

const ImpotexpertLayout = ({ children, seoContent, seoTitle }) => {
  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoContent}
        lang="fr"
        keywords={['reee', 'éducation', 'educavenir']}
      />
      <Navbar
        navbarBrand={
          <NavbarItem
            isLinkWillOpenInNewWindow={true}
            text={<img src={logo} alt="ImpotExpertREEE" />}
            href="https://www.impotexpert.ca/?ref=ssorg"
          />
        }
        navbarEnd={
          <NavbarItemButtonContainer>
            <a className="button is-info" href="#appliquer">
              <strong>Appliquer</strong>
            </a>
          </NavbarItemButtonContainer>
        }
      />
      <main>{children}</main>
    </Layout>
  )
}

export default ImpotexpertLayout
