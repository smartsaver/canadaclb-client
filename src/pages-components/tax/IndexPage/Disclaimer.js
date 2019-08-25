import React from 'react'
import marked from '../../../libs/marked'

const translations = {
  en: {
    text: `
Disclaimer: The link will open a new window with SmartSAVER, a charitable program that helps Canadian families to get their children on the path to post-secondary education, at no cost to the parents.
    `,
  },
  fr: {
    text: `
Disclaimer : Ce lien ouvrira dans nouvelle fenêtre le site de Mon ÉducAVENIR, un programme de bienfaisance visant à aider les familles à aligner leurs enfants vers des études postsecondaires, sans que les parents aient à débourser de l’argent.
    `,
  },
}

function Disclaimer({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: marked(content.text) }}></div>
    </section>
  )
}

export default Disclaimer
