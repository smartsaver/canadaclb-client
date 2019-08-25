import React from 'react'
import Section from '../../components/Section'
import { Typography } from '@material-ui/core'
import marked from '../../../libs/marked'

const translations = {
  en: {
    title: 'Additional Money',
    text: `
While _parents aren’t required to add any of their own money,_ children who are eligible for the Canada Learning Bond can receive a matching grant of 40% for every dollar a parent deposits into their RESPs. That’s a bonus of 40 cents on every dollar!
    `,
  },
  fr: {
    title: 'De l’argent supplémentaire',
    text: `
Les _parents ne sont pas tenus de cotiser eux-mêmes_ au REEE de leurs enfants admissibles au BEC, mais s’ils le font, le gouvernement versera un montant supplémentaire correspondant à 40 % de l’argent cotisé. Ce sont 40 sous qui s’ajoutent à chaque dollar déposé !
    `,
  },
}

function AdditionalSection({ locale = 'en' }) {
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

export default AdditionalSection
