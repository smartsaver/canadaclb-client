import processMarkdown from '../../../libs/marked'

const footerContent = {
  title: processMarkdown(`
# Early savings build expectations! Children with savings for post-secondary education, including training programs, college diplomas, or university degrees, are _31% more likely to expect to go_ to post-secondary than children without education savings.*
  `),
  content: processMarkdown(`
[SmartSAVER](https://www.smartsaver.org/) is a supportive ally of modest-income Canadians. We help families get their children on the path to post-secondary education by providing valuable information about, and access to, no-cost RESPs and government education grants.

Our digital platforms make it easy for families to start education savings for their children by applying for their Canada Learning Bonds, without it costing the family any of their own money.
  `),
}

export { processMarkdown }

export default {
  footerContent,
}
