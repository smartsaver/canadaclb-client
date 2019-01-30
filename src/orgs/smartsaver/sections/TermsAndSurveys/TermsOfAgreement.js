import React from 'react'
import Section from '../Section'
import Notification from '../../../../components/Notification'
import termsOfAgreementContent from '../../content/termsOfAgreementContent'
import style from './TermsOfAgreement.module.css'

const TermsOfAgreement = ({ onSubmit, isAccepted }) => {
  const { intro, termsOfAgreement } = termsOfAgreementContent
  const isFormHidden = isAccepted ? 'is-hidden' : ''
  const isSuccessHidden = !isAccepted ? 'is-hidden' : ''
  return (
    <Section name="terms-of-agreement" className={`${style.TermsOfAgreement}`}>
      <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
      <article
        className={`box content ${style.box}`}
        dangerouslySetInnerHTML={{ __html: termsOfAgreement }}
      />
      <form onSubmit={onSubmit} className={isFormHidden}>
        <div className="field">
          <div className="control">
            <label className="checkbox" htmlFor="termsOfAgreementCheckbox">
              <input
                name="termsOfAgreementCheckbox"
                type="checkbox"
                id="termsOfAgreementCheckbox"
              />{' '}
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Notification
        message="Thank you. You may now fill out the application forms."
        isHidden={isSuccessHidden}
      />
    </Section>
  )
}

export default TermsOfAgreement
