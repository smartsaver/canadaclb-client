import processMarkdown from '../../../../libs/marked'

const applyContent = {
  title: 'What do I need to apply?',
  content: processMarkdown(`
* There is no cost to apply
* Social Insurance Number (SIN) for you and your child.
* Have filed your latest income tax return.  

Research demonstrates that even small amounts of education savings can set in motion a chain reaction of positive social and educational outcomes for a child and their family:

1. Youth with savings earmarked for their education are 50% more likely to participate in post-secondary education than those who have none.
2. For children as young as 11, their perception of whether college is financially possible influences their school-focused goals and the effort they put into their school work.
3. Children with education savings between $1 – $499 are 3 times more likely to pursue postsecondary and 4 times more likely to graduate.
  `),
  embedUrl: 'https://www.smartsaver.org/startmyresp',
  footerContent: processMarkdown(`
Brought to you by UFile and SmartSAVER.  For more information, call 1888-RESP-CLB or info@smartsaver.org.
  `),
}

export default applyContent
