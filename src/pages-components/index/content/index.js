import processMarkdown from '../../../libs/marked'

const footerContent = {
  title: processMarkdown(`
# Early savings build expectations! Children with savings for post-secondary education, including training programs, college diplomas, or university degrees, are _31% more likely to expect to go_ to post-secondary than children without education savings.*
  `),
}

export { processMarkdown }

export default {
  footerContent,
}
