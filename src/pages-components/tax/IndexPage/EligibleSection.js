import React from 'react'
import Section from '../../components/Section'
import { Typography } from '@material-ui/core'
import marked from '../../../libs/marked'

const translations = {
  en: {
    title: 'Is my child eligible?',
    text: `
To qualify for the Canada Learning Bond, both you and your child must have Social Insurance Numbers, be residents of Canada, and:

- Your child was born in 2004 or later and has a Social Insurance Number.
- Your net family income is $47,630 or less for a family with up to 3 children. For a family with more than 3 children, the family income can be higher. 
    `,
  },
  fr: {
    title: 'Mon enfant est-il admissible ?',
    text: `
Pour recevoir le Bon d’études canadien, votre enfant et vous devez posséder un numéro d’assurance sociale et résider au Canada. De plus : 
- Votre enfant doit être né en 2004 ou après. 
- Votre revenu familial net est de 47 630 $ ou moins si votre famille compte jusqu’à trois enfants. Si vous avez plus de trois enfants, votre famille peut être admissible même si votre revenu est plus élevé. 
    `,
  },
}

function EligibleSection({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <Section>
      <Typography variant="h2">{content.title}</Typography>
      <Typography variant="body1" component="div">
        <div dangerouslySetInnerHTML={{ __html: marked(content.text) }}></div>
      </Typography>
    </Section>
  )
}

export default EligibleSection
