import React from 'react'
import { Typography } from '@material-ui/core'
import Section from '../../components/Section'

// styles

// text

const translations = {
  en: {
    title: 'Did you receive this sticky note?',
    subtitle:
      'Easily apply to get up to $2,000 from the federal government for your child’s education after high school.',
  },
  fr: {
    title: 'Avez-vous reçu ce feuillet ?',
    subtitle:
      'Recevez jusqu’à 2000 $ du gouvernement fédéral pour les études de vos enfants après le secondaire ! ',
  },
}

/**
 *
 * @param {String} [locale = 'en'] - en or fr
 */

function Banner({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <Section>
      <Typography variant="h1">{content.title}</Typography>
      <Typography variant="body1">{content.subtitle}</Typography>
    </Section>
  )
}

export default Banner
