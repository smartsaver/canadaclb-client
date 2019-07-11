function getMailApiURL() {
  // dev environemnts
  if (process.env.GATSBY_DEPLOYMENT_ENV === 'staging') {
    return 'https://dev-myfuturesaver-server.herokuapp.com'
  } else if (process.env.GATSBY_DEPLOYMENT_ENV === 'development') {
    return 'https://localhost:3000'
  }
  return 'https://server.myfuturesaver.org'
}

const config = {
  mailApiURL: getMailApiURL(),
}

export default config
