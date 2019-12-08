import React from 'react'
import marked from '../../../libs/marked'

const translations = {
  en: {
    questions: `Questions? Call 1-855-RESP-CLB (1-855-737-7252) or Email info@smartsaver.org`,
    socialInsurance: `Need a Social Insurance Number for your child? [Find a Service Canada Office]()`,
    clbInfo: `Not sure if you already received the Canada Learning Bond? Contact your financial institution to ask for your RESP statement or contact the Canada Education Savings Program (CESP) government hotline at 1-888-276-3624 to receive your Statement of Account in the mail. `,
  },
  fr: {
    questions: `Des questions ? Composez le 1-855-RESP-CLB (1-855-737-7252) ou écrivez-nous : info@smartsaver.org`,
    socialInsurance: `Vous avez besoin d’un numéro d’assurance sociale pour votre enfant ? Trouver un bureau de Service Canada`,
    clbInfo: `Vous ne savez pas si votre enfant reçoit déjà le Bon d’études canadien? Demandez votre relevé de REEE à votre institution financière ou communiquez avec le Programme canadien pour l’épargne-études au 1-888-276-3624.`,
  },
}

function Faq({ locale = 'en' }) {
  const content = translations[locale]
  return (
    <section>
      <section
        dangerouslySetInnerHTML={{ __html: marked(content.questions) }}
      ></section>
      <section
        dangerouslySetInnerHTML={{ __html: marked(content.socialInsurance) }}
      ></section>
      <section
        dangerouslySetInnerHTML={{ __html: marked(content.clbInfo) }}
      ></section>
    </section>
  )
}

export default Faq
