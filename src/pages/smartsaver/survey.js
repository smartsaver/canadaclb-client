import React from 'react'
import SmartsaverLayout from '../../orgs/smartsaver/Layout'
import IntroSection from '../../orgs/smartsaver/sections/IntroSection'
import TermsAndSurveysSection from '../../orgs/smartsaver/sections/TermsAndSurveys'
import ThankyouSection from '../../orgs/smartsaver/sections/Thankyou'

const surveyPage = () => {
  return (
    <SmartsaverLayout>
      <IntroSection />
      <TermsAndSurveysSection />
      <ThankyouSection />
    </SmartsaverLayout>
  )
}

export default surveyPage
