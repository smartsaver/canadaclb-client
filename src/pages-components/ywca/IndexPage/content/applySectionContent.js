import marked from '../../../../libs/marked'

const canadaUrl =
  'https://www.canada.ca/en/employment-social-development/services/learning-bond/eligibility.html'

const applySectionContent = {
  title: '2. Application',
  text: marked(`
Apply for your child’s Canada Learning Bond Today!

If your child was born in 2004 or later and your yearly family income is $46,605* or less, you can start saving for your child’s education today through the CLB at no additional cost or requirement to use your own money.

_*for three kids or less. For families with more than 3 children [click here.](${canadaUrl})_
  `),
  embedUrl: 'https://mysmartfuture.org/signup/ywca',
  footerText: marked(
    'Brought to you by the YWCA and SmartSAVER. For more information, contact us at 1888-RESP-CLB or email info@smartsaver.org.'
  ),
}

export default applySectionContent
