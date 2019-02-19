import processMarkdown from '../../../../libs/marked'

const applyContent = {
  title: 'Avant de commencer',
  content: processMarkdown(`
* Il ne coûte rien pour s’inscrire!!
* Vous aurez besoin de votre numéro assurance sociale (NAS) et de celui de votre enfant.
* Produisez votre déclaration de revenus

Des recherches démontrent que de petits montants mis de côté pour les études peuvent générer une série d’effets sociaux et éducationnels positifs pour un enfant et sa famille.

1. Les jeunes ayant de l’épargne-études sont 50% plus susceptibles de poursuivre des études postsecondaires que ceux qui n’en pas.

2. Pour les enfants âgés au moins de 11 ans, leur perception de la question de savoir si les études postsecondaire sont financièrement possibles a une influence sur leurs objectifs en matière d’éducation et sur l’effort qu’ils mettent dans leurs travaux scolaires.

3. Les enfants ayant de l’épargne-études entre 1 $ et 499 $ sont trois fois plus susceptibles de poursuivre des études postsecondaires et quatre fois plus susceptibles d’obtenir leur diplôme.
  `),
  embedUrl: 'https://www.educavenir.org/reeeussite/Accueil.html?',
  footerContent: processMarkdown(
    "Présenté par UFile et SmartSAVER. Pour plus d'information contactez 1-888-RESP-CLB ou info@smartsaver.org"
  ),
}

export default applyContent
