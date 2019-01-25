import React, { Component } from 'react'
import TermsOfAgreementSection from './TermsOfAgreement'
import FeedbackSurvey from './FeedbackSurvey'
import EmailSurvey from './EmailSurvey'

class TermsAndSurveys extends Component {
  state = {
    isTermsOfAgreementAccepted: false,
  }

  handleTermsOfAgreementSubmit = event => {
    event.preventDefault()
    this.setState({
      isTermsOfAgreementAccepted: event.target.termsOfAgreementCheckbox.checked,
    })
  }

  render() {
    const { isTermsOfAgreementAccepted } = this.state
    const { handleTermsOfAgreementSubmit } = this
    return (
      <div>
        <TermsOfAgreementSection
          onSubmit={handleTermsOfAgreementSubmit}
          isAccepted={isTermsOfAgreementAccepted}
        />
        <FeedbackSurvey isEnabled={isTermsOfAgreementAccepted} />
        <EmailSurvey isEnabled={isTermsOfAgreementAccepted} />
      </div>
    )
  }
}

export default TermsAndSurveys
