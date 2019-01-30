/* eslint-disable no-undef */
const DEVELOPMENT = process.env.NODE_ENV === 'development'
const STAGING = process.env.GATSBY_DEPLOYMENT_ENV === 'staging'
// production config for mailchimp
let mailchimp = {
  pastApplicantListId: '6c53c2d1cd',
}

if (DEVELOPMENT || STAGING) {
  // override ListId on my mailchimp account on development
  mailchimp = {
    pastApplicantListId: '55b8e53120',
  }
}

export { mailchimp }
