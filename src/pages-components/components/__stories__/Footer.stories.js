import React from 'react'
import { storiesOf } from '@storybook/react'
import SmartsaverFooter from '../Footer/Smartsaver'

storiesOf('Footer', module)
  .add('Smartsaver Footer', () => <SmartsaverFooter />)
  .add('Smartsaver Footer FR', () => <SmartsaverFooter locale="fr" />)
