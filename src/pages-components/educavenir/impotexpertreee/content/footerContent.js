import { processMarkdown } from './index'
import image from '../../../../images/educavenir/impot-expert-logo.png'

const ufileUrl = 'https://www.impotexpert.ca/?ref=ssorg'
const footerContent = {
  content: processMarkdown(`
Visitez [ImpôtExpert.ca](${ufileUrl}) pour obtenir le remboursement maximal de votre famille.
  `),
  ufileUrl,
  logo: image,
}

export default footerContent
