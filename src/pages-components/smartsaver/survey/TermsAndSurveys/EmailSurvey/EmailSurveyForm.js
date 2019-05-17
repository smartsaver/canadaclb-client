import React, { Component } from 'react'
import Form from '../../../../../bulma-components/Form'
import FieldControl from '../../../../../bulma-components/Form/FormFieldControl'
import axios from 'axios'
import PropTypes from 'prop-types'
import { mailchimp } from '../../../configs'

class EmailSurveyForm extends Component {
  state = {
    isLoading: false,
    email: '',
    isSuccess: false,
  }

  // setters
  setIsLoading = boolValue => {
    if (typeof boolValue !== 'boolean') return
    this.setState(() => ({ isLoading: boolValue }))
  }

  resetFormData = () => {
    this.setState(() => ({
      email: '',
    }))
  }

  // form handlers
  handleFormSubmit = async event => {
    const {
      setIsLoading,
      addToMailingList,
      handleFormSuccess,
      handleFormErrors,
    } = this
    // prevent form submission
    event.preventDefault()
    // set spinners and disable forms for loading
    setIsLoading(true)
    try {
      // send data
      const success = await addToMailingList(this.state)
      // when form submit is success
      if (success) handleFormSuccess(success)
    } catch (error) {
      handleFormErrors(error)
    } finally {
      setIsLoading(false)
    }
  }

  addToMailingList = ({ email }) => {
    /* eslint-disable no-undef */
    const listId = mailchimp.pastApplicantListId
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${process.env.GATSBY_MAIL_API_URL}/subscriber/new`,
        data: { email, listId },
      })
        .then(success => {
          if (!success.data) return resolve(success)
          return resolve(success.data)
        })
        .catch(error => {
          if (!error.response) return reject(error)
          return reject(error.response.data)
        })
    })
  }

  handleFormSuccess = success => {
    // set success state
    this.setState(() => ({ isSuccess: true }))
    // call success hooks outside the component
    this.props.onSuccess({ success, formData: this.state })
    // reset the form
    this.resetFormData()
  }

  handleFormErrors = error => {
    this.props.onError(error)
  }

  handleEmailChange = event => {
    const email = event.target.value
    this.setState(() => ({ email }))
  }

  render() {
    const { handleFormSubmit, handleEmailChange } = this
    const { isLoading, email, isSuccess } = this.state
    const isButtonLoading = isLoading ? 'is-loading' : ''
    const isFormFieldDisabled = isLoading
    return (
      <Form name="email-form" onSubmit={handleFormSubmit}>
        <FieldControl>
          <label htmlFor="email-form-name" className="label">
            Email:
          </label>
          <input
            className="input"
            type="email"
            id="email-form-name"
            placeholder="Enter email..."
            onChange={handleEmailChange}
            value={email}
            disabled={isFormFieldDisabled}
            required
          />
        </FieldControl>
        <button
          className={`button ${isButtonLoading}`}
          type="submit"
          disabled={isSuccess}
        >
          Submit
        </button>
      </Form>
    )
  }
}

EmailSurveyForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
}

export default EmailSurveyForm
