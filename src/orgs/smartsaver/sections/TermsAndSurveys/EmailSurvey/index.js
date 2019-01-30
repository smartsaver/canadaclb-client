import React, { Component } from 'react'
import SurveyForm from '../../../../../components/SurveyForm'
import Section from '../../Section'
import emailSurveyContent from '../../../content/emailSurveyContent'
import EmailSurveyForm from './EmailSurveyForm'
import Notification from '../../../../../components/Notification'
import axios from 'axios'
import PropTypes from 'prop-types'

class EmailSurvey extends Component {
  state = {
    isFormSuccess: false,
    isFormError: false,
    errorMessage: "Something's wrong with submitting the form.",
    successMessage: '',
  }

  setIsFormSuccess = boolValue => {
    if (typeof boolValue !== 'boolean') return
    this.setState(() => ({ isFormSuccess: boolValue }))
  }

  setIsFormError = boolValue => {
    if (typeof boolValue !== 'boolean') return
    this.setState(() => ({ isFormError: boolValue }))
  }

  sendMailToSmartsaver = async ({ email }) => {
    /* eslint-disable no-undef, no-console */
    const baseURL = process.env.GATSBY_MAIL_SERVER_URL
    const to = process.env.GATSBY_MYFUTURESAVER_EMAIL
    const data = {
      from: 'Myfuturesaver.org <noreply@myfuturesaver.org>',
      to: `${to}`,
      subject: 'Past StartMyRESP Applicant Survey',
      text: `
A past StartMyRESP applicant has submitted their survey on CanadaCLB.ca/SmartSAVER/survey

See Below.
email: ${email}
`,
    }
    try {
      await axios({
        method: 'post',
        baseURL,
        url: '/success',
        data,
      })
    } catch (error) {
      if (!error.response) console.log(error)
      console.log(error.response.data)
    }
  }

  sendApplicantSuccessMail = async ({ email }) => {
    /* eslint-disable no-undef, no-console */
    const baseURL = process.env.GATSBY_MAIL_SERVER_URL
    const data = {
      from: 'Myfuturesaver.org <noreply@myfuturesaver.org>',
      to: `${email}`,
      subject: 'Thank you for completing our survey!',
      text: `
You have been entered into our draw for a chance to win:

• one $500* cash grand prize
• one of 10 cash prizes of $50
• one of 30 cash prizes of $25
  
Watch for an email from us confirming your participation in the draw. The prize winners will be randomly selected by SmartSAVER and contact by email on February 19, 2019.
  
QUESTIONS?
Call us at 1-855-737-7252 or email info@smartsaver.org
  
The SmartSAVER Team
`,
    }
    try {
      await axios({
        method: 'post',
        baseURL,
        url: '/success',
        data,
      })
    } catch (error) {
      if (!error.response) console.log(error)
      console.log(error.response.data)
    }
  }

  handleFormSuccess = ({ formData }) => {
    this.setIsFormSuccess(true)
    this.setIsFormError(false)
    this.sendMailToSmartsaver(formData)
    this.sendApplicantSuccessMail(formData)
  }

  handleFormError = ({ error }) => {
    this.setIsFormError(true)
    if (!error) return
    this.setState(() => ({ errorMessage: error[0].error }))
  }

  render() {
    const { intro } = emailSurveyContent
    const { isEnabled } = this.props
    const { isFormSuccess, isFormError, errorMessage } = this.state
    const { handleFormSuccess, handleFormError } = this
    return (
      <Section className="Section--Smartsaver-theme">
        <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
        <SurveyForm
          isEnabled={isEnabled}
          overlayText="Read and agree to the terms of agreement before proceeding"
        >
          <div className="columns">
            <div className="column is-half">
              <EmailSurveyForm
                onSuccess={handleFormSuccess}
                onError={handleFormError}
              />
            </div>
          </div>
          <Notification
            isHidden={!isFormSuccess}
            className="is-success"
            message="Successfully Submitted the form."
          />
          <Notification
            isHidden={!isFormError}
            className="is-danger"
            message={errorMessage}
          />
        </SurveyForm>
      </Section>
    )
  }
}

EmailSurvey.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
}

export default EmailSurvey
