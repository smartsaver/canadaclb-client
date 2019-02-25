import processMarkdown from '../../../../libs/marked'

const introContent = {
  intro: processMarkdown(`
# It’s time to talk about education savings!
It’s been a while since you’ve used our online StartMyRESP.ca application to open a no-cost RESP and apply for your child/children’s Canada Learning Bonds. Saving for your family and for education can be challenging, so we’re excited to offer you a chance to win:

* one $500* cash grand prize
* one of 10 cash prizes of $50
* one of 30 cash prizes of $25
  `),
}

const instructionContent = {
  intro: processMarkdown(`
## Answer the survey to enter our draw
* The survey will take you less than 10 minutes to complete.
  
* You will be asked about your experience using StartMyRESP.ca and saving for your child’s education.
  
* Your feedback will help us better understand what Canadian families like yours need in order to prepare their child for post-secondary studies!
  
* Your personal information will not be shared with any other organizations. Your answers will be shared anonymously with our researchers and combined with answers from other respondents to the survey.
  
* The cash prizes is for your family’s personal use, and does not need to be deposited into your child’s RESP – unless you choose to do so.

  ***Remember:*** *children who are eligible for the Canada Learning Bond can receive additional matching funds from the federal government of 40% for every dollar a parent chooses to deposit into their RESP (up to $600 per year**).
  That’s a bonus of 40 cents on top of every dollar if you choose to contribute!*
  ***For complete details, visit [Canada.ca](https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html).*

* The prize winners will be randomly selected by SmartSAVER. Winners will be contacted by email on February 19, 2019.
  `),
}

const participateContent = {
  intro: processMarkdown(`
## Who can participate?

To be eligible for the draw, participants must:
* Have previously signed up to open an RESP and apply for their child’s/children’s Canada Learning Bond/s through the online StartMyRESP.ca application.
* Live outside of Quebec.
* Agree to the terms of agreement
  `),
}

export { introContent, instructionContent, participateContent }
export default introContent
