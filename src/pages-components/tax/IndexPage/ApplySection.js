import React from 'react'
import Section from '../../components/Section'
import { Typography, Button } from '@material-ui/core'
import marked from '../../../libs/marked'

const respApplicationURL = 'https://mysmartfuture.org/'

const respPromoterURL = {
  en:
    'https://www.canada.ca/en/employment-social-development/services/student-financial-aid/education-savings/resp/resp-promoters-list.html',
  fr:
    'https://www.canada.ca/fr/emploi-developpement-social/services/aide-financiere-etudiants/epargne-etudes/reee/liste-promoteurs-reee.html',
}

const translations = {
  en: {
    title: 'Applying is easy!',
    text: `
Review the Government of Canada’s List of [RESP promoters](${respPromoterURL.en}) who offer registered education savings plans (RESPs) as well as which government grant each promoter offers. This list is provided for information purposes only and does not constitute endorsement of the products of any vendor. 
    `,
  },
  fr: {
    title: 'C’est facile !',
    text: `
Consultez la liste des [promoteurs du REEE](${respPromoterURL.fr}) établie par le gouvernement du Canada; elle indique également quelles subventions additionnelles sont offertes par chacun d’eux. Cette liste est fournie à titre informatif et ne constitue pas une recommandation des produits proposés par ces entreprises.
    `,
  },
}

function ApplySection({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <Section>
      <Typography variant="h2">{content.title}</Typography>
      <Typography variant="body1" component="div">
        <div dangerouslySetInnerHTML={{ __html: marked(content.text) }}></div>
      </Typography>
      <Button component="a" href={respApplicationURL}>
        Go to Application
      </Button>
    </Section>
  )
}

export default ApplySection
