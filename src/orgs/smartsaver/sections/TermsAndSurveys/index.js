import React, { Component } from 'react'
import TermsOfAgreementSection from './TermsOfAgreement'

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
      </div>
    )
  }
}

export default TermsAndSurveys
