import React from 'react'
import SurveyForm from '../../../../components/SurveyForm'
import Section from '../Section'
import emailSurveyContent from '../../content/emailSurveyContent'
import Form from '../../../../components/Form'
import FieldControl from '../../../../components/Form/FormFieldControl'

const EmailSurvey = ({ isEnabled }) => {
  const { intro } = emailSurveyContent
  return (
    <Section className="Section--Smartsaver-theme">
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <SurveyForm
        isEnabled={isEnabled}
        overlayText="Read and agree to the terms of agreement before proceeding"
      >
        <div className="columns">
          <div className="column is-half">
            <Form name="email-form">
              <FieldControl>
                <label htmlFor="email-form-name" className="label">
                  Email:
                </label>
                <input
                  className="input"
                  type="email"
                  id="email-form-name"
                  placeholder="Enter email..."
                />
              </FieldControl>
              <button className="button" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </SurveyForm>
    </Section>
  )
}

export default EmailSurvey
