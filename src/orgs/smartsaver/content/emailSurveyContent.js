import processMarkdown from '../../../libs/marked'

const emailSurveyContent = {
  intro: processMarkdown(`
## Enter Email
Please provide your email address so we can confirm your submission.
  `),
}

export default emailSurveyContent
