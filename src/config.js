const STAGING = process.env.GATSBY_DEPLOYMENT_ENV === 'staging'
const DEVELOPMENT = process.env.NODE_ENV === 'development'

function getMailApiURL() {
  // dev environemnts
  if (STAGING) {
    return 'https://dev-myfuturesaver-server.herokuapp.com'
  } else if (DEVELOPMENT) {
    return 'https://localhost:3000'
  }
  return 'https://server.myfuturesaver.org'
}

function getOrgEmail() {
  if (DEVELOPMENT || STAGING) {
    return 'jcunanan05@gmail.com'
  }
  // production
  return 'info@smartsaver.org'
}

const config = {
  mailApiURL: getMailApiURL(),
  orgEmail: getOrgEmail(),
}

export default config
