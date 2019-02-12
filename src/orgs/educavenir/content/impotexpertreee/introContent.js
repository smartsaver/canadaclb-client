import processMarkdown from '../../../../libs/marked'

const introContent = {
  content: processMarkdown(`
## Le Bon d’études canadien est versé aux enfants:

* nés après le 31 décembre 2003;
* dont le revenu familial net est de 46 600 $ ou moins. (pour 2018) pour trois enfants ou moins.  
* Pour plus d'enfants, [cliquez ici](https://www.canada.ca/fr/emploi-developpement-social/services/aide-financiere-etudiants/epargne-etudes/reee/promoteurs-reee/bulletin/avis-2018-772.html).

Une fois la demande acceptée, les enfants admissibles reçoivent 500 $, et ensuite, 100 $ pour chaque année d’admissibilité (jusqu’à 15 ou un maximum de __2000 $__).
Vous n’êtes pas obligé d’investir votre propre argent dans le REEE de votre enfant pour recevoir le Bon d’étude canadien.

__Avis: les prestations sont également disponibles pour toutes les années auxquelles l’enfant était admissible avant la demande.__
  `),
}

export default introContent
