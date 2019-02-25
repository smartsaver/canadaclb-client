import processMarkdown from '../../../../libs/marked'

const feedbackSurveyContent = {
  intro: processMarkdown(`
## Complete the survey

Please answer the following survey. This should only take you a few minutes.
Once you complete the survey a DONE button will appear. Scroll down to the next section below: **Enter Email**
**Remember!** Your participation is entirely voluntary. If you change your mind, please notify us by phone at 1-855-737-7252 or by email at info@smartsaver.org by February 18, 2019.
  `),
  footer: processMarkdown(`
Once you complete the survey a DONE button will appear. Scroll down to the next section below: **Enter Email**
  `),
  surveyUrl: 'https://www.surveymonkey.com/r/5KTQ8Q7',
}

export default feedbackSurveyContent
