import React from 'react'
import { Typography } from '@material-ui/core'
import Section from '../../components/Section'

// styles

// text

const translations = {
  en: {
    title: 'The Canada Learning Bond',
    subtitle:
      'The Canada Learning Bond (CLB) is a grant of $500 to $2,000 from the Government of Canada to help modest-income families with the cost of a child’s education after high school. It is deposited directly into a child’s Registered Education Savings Plan (RESP). Receiving the CLB will not impact any other government assistance you already receive. ',
  },
  fr: {
    title: 'Le Bon d’études canadien',
    subtitle:
      'Le Bon d’études canadien est une somme allant de 500 $ à 2 000 $, offerte par le gouvernement du Canada pour aider les familles à revenu modeste à épargner pour les études de leurs enfants après le secondaire. L’argent est déposé directement dans un régime enregistré d’épargne-études (REEE). Recevoir le BEC n’aura aucune influence sur les autres programmes d’aide gouvernementale dont vous êtes déjà bénéficiaire.',
  },
}

/**
 *
 * @param {String} [locale = 'en'] - en or fr
 */

function Hero({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <Section>
      <Typography variant="h1">{content.title}</Typography>
      <Typography variant="body1">{content.subtitle}</Typography>
    </Section>
  )
}

export default Hero
