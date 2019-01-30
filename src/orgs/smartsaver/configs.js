/* eslint-disable no-undef */
const DEVELOPMENT = process.env.NODE_ENV === 'development'
// production config for mailchimp
let mailchimp = {
  pastApplicantListId: 'fe3e30ebf9',
}

if (DEVELOPMENT) {
  // override ListId on my mailchimp account on development
  mailchimp = {
    pastApplicantListId: '55b8e53120',
  }
}

export { mailchimp }
