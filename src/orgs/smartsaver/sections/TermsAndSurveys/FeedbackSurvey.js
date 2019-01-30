import React from 'react'
import SurveyForm from '../../../../components/SurveyForm'
import Section from '../Section'
import feedbackSurveyContent from '../../content/feedbackSurveyContent'

const FeedbackSurvey = ({ isEnabled }) => {
  const { intro, footer, surveyUrl } = feedbackSurveyContent
  return (
    <Section name="survey" className="Section--Smartsaver-theme">
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding"
      >
        <iframe title="Past Applicant Survey" src={surveyUrl} />
      </SurveyForm>
      <div className="content" dangerouslySetInnerHTML={{ __html: footer }} />
    </Section>
  )
}

export default FeedbackSurvey
