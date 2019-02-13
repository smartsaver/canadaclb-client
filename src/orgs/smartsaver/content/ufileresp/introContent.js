import processMarkdown from '../../../../libs/marked'

const introContent = {
  content: processMarkdown(`
## The Canada Learning Bond is available to children:

* Born January 1, 2004 or later

* Family’s net income is $46,605 or less. (for 2018) for three kids or less.  For more children, [click here](https://www.canada.ca/en/employment-social-development/services/student-financial-aid/education-savings/resp/resp-promoters/bulletin/notice-2018-772.html).

Upon acceptance, eligible children receive $500 plus $100 more for each year they are eligible (to age 15 or maximum __$2,000__).
You __do not__ have to put any of your own money into the RESP to receive the Canada Learning Bond.

__Note: Benefits are also available for all the years the child was eligible prior to the application.__
  `),
}

export default introContent
