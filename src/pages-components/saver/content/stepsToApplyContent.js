import { processMarkdown } from './index'
import { stepOptions } from './index'
import step1Logo from '../../../images/smartsaver/steps/step1.png'
import step2Logo from '../../../images/smartsaver/steps/step2.png'
import step3Logo from '../../../images/smartsaver/steps/step3.png'
import step4Logo from '../../../images/smartsaver/steps/step4.png'

const processStep = content => processMarkdown(content, stepOptions)

const step1 = {
  title: 'Apply',
  image: step1Logo,
  content: processStep(`
### 1. Apply

It will take about 10 minutes to complete. You will not be charged any fees. You can start the account with $0.
  `),
}

const step2 = {
  title: 'Finalize',
  image: step2Logo,
  content: processStep(`
### 2. Confirm

SmartSAVER will send your information to your chosen bank and you will complete your application with them.
  `),
}

const step3 = {
  title: 'Confirm',
  image: step3Logo,
  content: processStep(`
### 3. Finalize

At your bank appointment, you will  show your ID, and your child's Social Insurance Numbers. You will sign your application.
  `),
}

const step4 = {
  title: 'Receive',
  image: step4Logo,
  content: processStep(`
### 4. Complete

If you are approved, the Canada Learning Bond will be deposited in your child's new RESP.
  `),
}

const stepsList = [step1, step2, step3, step4]

const stepsToApplyContent = {
  title: '4 Steps Process*',
  content: processMarkdown(`
You can sign up in 4 easy steps that take place over the course of about 70 days. Each step can be completed quickly – most will take no more than a few minutes of your time.
  `),
  note: processMarkdown(`
__* The entire process can take 2 months to complete due to processing times.__
  `),
  footer: processMarkdown(`
_Remember, children who are eligible for the Canada Learning Bond can receive an additional matching grant of 40% for every dollar deposited into their RESPs. That’s a bonus of 40 cents on top of every dollar that you contribute!_

__Questions?__ Call us at 1-855-737-7252 or email info@smartsaver.org
  `),
}

export { stepsList }

export default stepsToApplyContent
