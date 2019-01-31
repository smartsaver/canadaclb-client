import React from 'react'
import SmartsaverLayout from '../../orgs/smartsaver/Layout'
import IntroSection from '../../orgs/smartsaver/sections/IntroSection'
import SEO from '../../components/Seo/SeoWithoutTitleTemplate'
import TermsAndSurveysSection from '../../orgs/smartsaver/sections/TermsAndSurveys'
import ThankyouSection from '../../orgs/smartsaver/sections/Thankyou'
import surveySeoContent from '../../orgs/smartsaver/content/surveySeoContent'

const surveyPage = () => {
  return (
    <SmartsaverLayout>
      <SEO
        title="SmartSAVER Survey"
        keywords={[`resp`, `myfuturesaver`, `education`, `survey`]}
        description={surveySeoContent}
      />
      <IntroSection />
      <TermsAndSurveysSection />
      <ThankyouSection />
    </SmartsaverLayout>
  )
}

export default surveyPage
