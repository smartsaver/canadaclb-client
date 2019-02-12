import processMarkdown from '../../../../libs/marked'

const termsOfAgreementContent = {
  intro: processMarkdown(`
### Participate in this draw
Please take a moment to read and accept the terms of agreement.
  `),
  termsOfAgreement: processMarkdown(`
**Terms of Agreement/Permissions**
A. My participation in this program is entirely voluntary.

B. I give SmartSAVER permission to:
i. Collect, own, hold, and retain the right to the information that I provide.
  
ii. Share my data anonymously with researchers for the purpose of studying the SmartSaver program. This means my name and any other identifying information won’t be shared. SmartSAVER may contact me in the future to ask me to complete additional survey questions. It is up to my discretion to respond or not.
  
C. I can withdraw my consent any time before February 18, 2019 by writing to SmartSAVER at info@smartsaver.org.
  `),
}

export default termsOfAgreementContent
