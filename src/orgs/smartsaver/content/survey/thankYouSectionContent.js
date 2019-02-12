import processMarkdown from '../../../../libs/marked'

const thankYouSectionContent = {
  intro: processMarkdown(`
### Thank you for completing our survey!
You have been entered into our draw for a chance to win:
  
* one $500* cash grand prize
* one of 10 cash prizes of $50
* one of 30 cash prizes of $25
  
Watch for an email from us confirming your participation in the draw. The prize winners will be randomly selected by SmartSAVER and contact by email on February 19, 2019.
  
**QUESTIONS?**
Call us at 1-855-737-7252 or email info@smartsaver.org
  `),
}

export default thankYouSectionContent
