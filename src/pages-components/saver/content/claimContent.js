import { processMarkdown } from './index'

const claim = {
  title: 'Two things you can claim for your children',
  content: processMarkdown(`
1. **Claim your child's Canada Learning Bond (CLB)** - a federal grant of $500 to $2,000 to eligible families to help with the cost of a child's education after high school.

2. You could receive $500 from the Government of Canada for your child's education savings!

_* Children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar a parent deposits into their RESPs._
  `),
}

export default claim
