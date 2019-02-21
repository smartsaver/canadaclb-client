import React from 'react'
import SmartsaverLayout from '../SmartsaverLayout'
import IntroSection from './IntroSection'
import SEO from '../../../components/Seo/SeoWithoutTitleTemplate'
import TermsAndSurveysSection from './TermsAndSurveys'
import ThankyouSection from './Thankyou'
import surveySeoContent from './content/surveySeoContent'

const SurveyPage = () => {
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

export default SurveyPage
