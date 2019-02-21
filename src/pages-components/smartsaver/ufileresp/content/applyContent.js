import { processMarkdown } from './index'

const embedUrl = 'https://www.smartsaver.org/startmyresp/?ufile'

const applyContent = {
  title: 'Apply For Your Child’s Canada Learning Bond Today!',
  content: processMarkdown(`
If your child was born in 2004 or later and your net family income is $46,605* or less, you can start saving for your child’s education today. There is no cost to apply for the Canada Learning Bond and getting it doesn’t require you to use any of your own money.

_*for three kids or less. For families with more than 3 children [click here](https://www.canada.ca/en/employment-social-development/services/student-financial-aid/education-savings/resp/resp-promoters/bulletin/notice-2018-772.html)._

Eligible children receive an initial deposit of $500 and an additional $100 for every year that they’re eligible, including the years they were eligible before they applied, to a maximum of $2000.

To receive the Canada Learning Bond, your child needs a Registered Education Savings Plan (RESP). You can get one started at no cost, with no fees, right here:

_If you cannot see the form, [click here.](${embedUrl})_
  `),
  embedUrl,
  footerContent: processMarkdown(`
Brought to you by UFile and SmartSAVER.  For more information, call 1-855-737-7252 (1-855-RESP-CLB) or info@smartsaver.org.
  `),
}

export default applyContent
