import marked from '../../../../libs/marked'
import vanillaMarked from 'marked'

const ywcaSurveySectionContent = {
  title: '1. Survey',
  text: marked(`
You must complete the survey in order to apply below.
  `),
  footerText: vanillaMarked(`
Did you complete the survey by clicking the __DONE__ button? Scroll down to the next section below: [__RESP and CLB application__](./#apply)
  `),
}

export default ywcaSurveySectionContent
