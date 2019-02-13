import processMarkdown from '../../../../libs/marked'

const bannerContent = {
  intro: 'Thanks to UFile for Supporting Education Savings!',
  title: 'Grow your child’s dreams for tomorrow.',
  content: processMarkdown(`
Saving is easy with the Canada Learning Bond (CLB). The CLB offers families with modest incomes a simple way to start saving for their children’s education after high school with ___any Registered Education Savings Plan.___
  `),
  videoUrl: 'https://www.youtube.com/embed/ev6ZtfjRdBg',
}

export default bannerContent
