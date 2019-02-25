import { processMarkdown } from './index'
import image from '../../../../images/smartsaver/ufile-logo.png'

const ufileUrl = 'https://www.ufile.ca/?ref=ssorg'
const footerContent = {
  content: processMarkdown(`
Visit [UFile.ca](${ufileUrl}) for your family’s maximum refund.
  `),
  ufileUrl,
  logo: image,
}

export default footerContent
