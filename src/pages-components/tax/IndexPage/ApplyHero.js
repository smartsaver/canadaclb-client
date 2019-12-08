import React from 'react'
import Section from '../../components/Section'
import { Typography } from '@material-ui/core'

const translations = {
  en: {
    title:
      'Apply today! You can catch up on past grant amounts that your CLB-eligible child may have missed in previous years.',
  },
  fr: {
    title:
      'Demandez le BEC aujourd’hui ! Votre enfant pourra également recevoir les montants des années précédentes où il était admissible.',
  },
}

function ApplyHero({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <Section>
      <Typography>{content.title}</Typography>
    </Section>
  )
}

export default ApplyHero
