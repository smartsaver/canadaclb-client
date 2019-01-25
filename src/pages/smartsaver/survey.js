import React from 'react'
import SmartsaverLayout from '../../orgs/smartsaver/Layout'
import IntroSection from '../../orgs/smartsaver/sections/IntroSection'
import TermsAndSurveysSection from '../../orgs/smartsaver/sections/TermsAndSurveys'

const surveyPage = () => {
  return (
    <SmartsaverLayout>
      <IntroSection />
      <TermsAndSurveysSection />
    </SmartsaverLayout>
  )
}

export default surveyPage
