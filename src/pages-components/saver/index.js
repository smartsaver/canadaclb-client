import React from 'react'
import HomeLayout from './HomeLayout'
import SEO from '../../bulma-components/Seo'
import SmartSaverBanner from './SmartSaverBanner'
import ClaimSection from './Claim'
import ParticipateSection from './Participate'
import ListOfFormsSection from './ListOfForms'
import StepsToApplySection from './StepsToApply'
import WealthsimpleSection from './Wealthsimple'
import NoSponsorshipSection from './NoSponorship'
import SubmissionSurveyForm from './ListOfForms/SubmissionSurveyForm'
import RespUploadSection from './RespUpload'
import FaqSection from './Faq'

const IndexPage = () => {
  return (
    <HomeLayout>
      <SEO
        title="MyFutureSAVER"
        keywords={[`resp`, `myfuturesaver`, `education`]}
      />
      <SmartSaverBanner />
      <ClaimSection />
      <ParticipateSection />
      <StepsToApplySection />
      <ListOfFormsSection />
      <WealthsimpleSection />
      <NoSponsorshipSection />
      <SubmissionSurveyForm />
      <RespUploadSection />
      <FaqSection />
    </HomeLayout>
  )
}

export default IndexPage
