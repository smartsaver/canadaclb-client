import processMarkdown from '../../../libs/marked'

const respSurveyUrl = 'https://www.smartsaver.org/startmyresp/?rocketpiggy'

const socialServicesUrl =
  'https://www.canada.ca/en/employment-social-development/services/student-financial-aid/education-savings/resp/resp-promoters/bulletin/notice-2018-772.html'

const applyContent = {
  title: 'Launch your Child’s Education Savings with The Canada Learning Bond',
  text: processMarkdown(`
If your child was born in 2004 or later and your net family income is $46,605* or less, you can start saving for your child’s education today. There is no cost to apply for the Canada Learning Bond and getting it doesn’t require you to use any of your own money.

*for three kids or less. For families with more than 3 children [click here](${socialServicesUrl}).

Eligible children receive an initial deposit of $500 and an additional $100 for every year that they’re eligible, including the years they were eligible before they applied, to a maximum of $2000.

To receive the Canada Learning Bond, your child needs a Registered Education Savings Plan (RESP). You can get one started at no cost, with no fees, right here:
  `),
  respSurveyUrl,
}

export default applyContent
