import processMarkdown from '../../../libs/marked'
import smartsaverLogo from '../../../images/smartsaver/smartsaver-logo-small.png'

const bannerContent = {
  title: processMarkdown(`
# Early savings build expectations! Children with savings for post-secondary education, including training programs, college diplomas, or university degrees, are _31% more likely to expect to go_ to post-secondary than children without education savings.*
  `),
}

const introContent = {
  title: 'The Canada Learning Bond',
  content: processMarkdown(`
The Canada Learning Bond (CLB) is a grant of $500 to $2000 from the Government of Canada to eligible families to help with the cost of a child’s education after high school. It is deposited directly into a child’s Registered Education Savings Plan (RESP).

Visit the Government of Canada’s [Education Savings](https://www.canada.ca/en/employment-social-development/services/student-financial-aid/education-savings.html) page for more information about the Canada Learning Bond and the Canada Education Savings Grants.
  `),
}

const aboutContent = {
  title: 'About SmartSAVER',
  content: processMarkdown(`
[SmartSAVER](https://www.smartsaver.org/) is a supportive ally of modest-income Canadians. We help families get their children on the path to post-secondary education by providing valuable information about, and access to, no-cost RESPs and government education grants.

Our digital platforms make it easy for families to start education savings for their children by applying for their Canada Learning Bonds, without it costing the family any of their own money.
  `),
}

const contactContent = {
  title: 'Contact',
  content: processMarkdown(`
Looking for a specific Canada Learning Bond page on our site? Need information?
Call us at 1-855-737-7252 or email info@smartsaver.org
  
*[Breaking the Pattern of Wealth Inequality in Higher Education.](https://childrenssavingsaccount.org/wp-content/uploads/2017/01/BreakingThe-PatternOfWealthInequalityInHigherEducation.pdf) University of Kansas, Center on Assets Education, and Inclusion. 2018
  `),
}

const footerContent = {
  intro: processMarkdown(`Copyright SmartSAVER.org © 2018. All Rights Reserved.
  `),
  otherLinks: processMarkdown(
    `[PRIVACY POLICY](http://www.smartsaver.org/privacy.shtml) | [TERMS &amp; CONDITIONS](http://www.smartsaver.org/terms-conditions.shtml)`
  ),
  image: smartsaverLogo,
  contact: processMarkdown(`
Looking for a specific Canada Learning Bond page on our site? Need information?

Call us at 1-855-737-7252 or email info@smartsaver.org

SmartSAVER is a charitable initiative dedicated to putting marginalized and modest-income children on the path to post-secondary education. We are an initiative of the [Omega Foundation](http://www.theomegafoundation.ca/), a national registered charity.
  
*[Breaking the Pattern of Wealth Inequality in Higher Education.](https://childrenssavingsaccount.org/wp-content/uploads/2017/01/BreakingThe-PatternOfWealthInequalityInHigherEducation.pdf) University of Kansas, Center on Assets Education, and Inclusion. 2018
  `),
  footer: processMarkdown(`Charitable Registration #136402948RR0001`),
}

export { processMarkdown }

export default {
  introContent,
  aboutContent,
  bannerContent,
  contactContent,
  footerContent,
}
