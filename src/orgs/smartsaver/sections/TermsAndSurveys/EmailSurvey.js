import React from 'react'
import SurveyForm from '../../../../components/SurveyForm'
import Section from '../Section'
import emailSurveyContent from '../../content/emailSurveyContent'

const EmailSurvey = ({ isEnabled }) => {
  const { intro } = emailSurveyContent
  return (
    <Section className="Section--Smartsaver-theme">
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding"
      >
        MailChimpCapture
      </SurveyForm>
    </Section>
  )
}

export default EmailSurvey
