import React, { Fragment } from 'react'
import IntroSection from './IntroSection'
import SEO from '../../../bulma-components/Seo/SeoWithoutTitleTemplate'
import TermsAndSurveysSection from './TermsAndSurveys'
import ThankyouSection from './Thankyou'
import surveySeoContent from './content/surveySeoContent'
import SmartsaverNavbar from '../SmartsaverNavbar'
import NavbarItem from '../../../bulma-components/Navbar/NavbarItem'
import NavbarDropdown from '../../../bulma-components/Navbar/NavbarDropdown'
import Layout from '../../../bulma-components/Layout'
import SmartsaverFooter from '../SmartsaverFooter'

const Navbar = () => {
  return (
    <SmartsaverNavbar
      navbarEnd={
        <Fragment>
          <NavbarDropdown text="Survey">
            <NavbarItem text="Terms of Agreement" href="#terms-of-agreement" />
            <NavbarItem text="Complete the Survey" href="#survey" />
            <NavbarItem text="Enter Email" href="#email" />
          </NavbarDropdown>
          <NavbarItem text="Contact" href="#contact" />
        </Fragment>
      }
    />
  )
}

const SurveyPage = () => {
  return (
    <Layout>
      <SEO
        title="SmartSAVER Survey"
        keywords={[`resp`, `myfuturesaver`, `education`, `survey`]}
        description={surveySeoContent}
      />
      <Navbar />
      <IntroSection />
      <TermsAndSurveysSection />
      <ThankyouSection />
      <SmartsaverFooter />
    </Layout>
  )
}

export default SurveyPage
