import processMarkdown from '../../../../libs/marked'

const bannerContent = {
  intro: 'Thanks to UFile for Supporting Education Savings!',
  title: 'Grow your child’s dreams for tomorrow!',
  content: processMarkdown(`
Did you know that youth with savings for their educations are 50% more likely to participate in post-secondary education than those who have none?
  `),
  videoUrl: 'https://www.youtube.com/embed/ev6ZtfjRdBg',
}

export default bannerContent
