import React from 'react'
import SurveyForm from '../../../../components/SurveyForm'
import Section from '../Section'
import feedbackSurveyContent from '../../content/feedbackSurveyContent'

const FeedbackSurvey = ({ isEnabled }) => {
  const { intro, footer } = feedbackSurveyContent
  return (
    <Section name="survey" className="Section--Smartsaver-theme">
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding"
      >
        SurveyMokey Embed here
      </SurveyForm>
      <div className="content" dangerouslySetInnerHTML={{ __html: footer }} />
    </Section>
  )
}

export default FeedbackSurvey
