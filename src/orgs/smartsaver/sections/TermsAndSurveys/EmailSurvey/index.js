import React, { Component } from 'react'
import SurveyForm from '../../../../../components/SurveyForm'
import Section from '../../Section'
import emailSurveyContent from '../../../content/emailSurveyContent'
import EmailSurveyForm from './EmailSurveyForm'
import Notification from '../../../../../components/Notification'
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

  handleFormSuccess = ({ success, state }) => {
    this.setIsFormSuccess(true)
    this.setIsFormError(false)
    // sendMailToSmartsaver();
    // sendApplicantSuccessMail();
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
