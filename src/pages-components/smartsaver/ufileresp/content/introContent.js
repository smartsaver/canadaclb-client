import { processMarkdown } from './index'

const introContent = {
  content: processMarkdown(`
Find out if your child is eligible to receive the Canada Learning Bond, a grant of  $500 to $2,000 from the Government of Canada that is deposited directly into the Registered Education Savings Plan (RESP) of an eligible child to help with the costs of education after high school.
  `),
}

export default introContent
