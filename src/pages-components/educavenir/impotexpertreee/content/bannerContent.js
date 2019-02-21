import { processMarkdown } from './index'

const bannerContent = {
  content: processMarkdown(`
Saviez-vous que les jeunes ont 50 % plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ?
  `),
  seoContent:
    'Saviez-vous que les jeunes ont 50 % plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ?',
}

export default bannerContent
