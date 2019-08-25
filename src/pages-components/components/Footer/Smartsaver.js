import React from 'react'
// import {Typography} from '@material-ui/core'

const translations = {
  en: {
    mainText: 'Copyright SmartSAVER.org © 2018. All rights reserved.',
    privacy: {
      text: 'PRIVACY POLICY'.toUpperCase(),
      link: 'https://www.smartsaver.org/privacy.shtml',
    },
    terms: {
      text: 'Terms & Conditions'.toUpperCase(),
      link: 'http://www.smartsaver.org/terms-conditions.shtml',
    },
    charity: 'Charitable Registration #136402948RR0001',
    contact: {
      title: 'Contact Us',
      text: `
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
      `,
    },
  },
  fr: {
    mainText: 'Copyright SmartSAVER.org © 2018. Tous droits réservés.',
  },
  privacy: {
    text: 'Politique de confidentialité'.toUpperCase(),
    link: 'http://www.smartsaver.org/fr/privacy.shtml',
  },
  terms: {
    text: 'Conditions et modalités'.toUpperCase(),
    link: 'http://www.smartsaver.org/fr/terms-conditions.shtml',
  },
  charity: 'Numéro d’organisme de bienfaisance : #136402948RR0001',
  contact: {
    title: 'Coordonnées :',
    text: `
info@smartsaver.org
1-855-RESP-CLB (1-855-737-7252)
    `,
  },
}

function SmartsaverFooter({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <footer>
      <section>{content.mainText}</section>
      <section></section>
      <section></section>
    </footer>
  )
}

export default SmartsaverFooter
