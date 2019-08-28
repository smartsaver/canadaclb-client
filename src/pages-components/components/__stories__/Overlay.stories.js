import React from 'react'
import { storiesOf } from '@storybook/react'
import OverlayBox from '../Overlay/OverlayBox'

storiesOf('Overlay', module).add('Box', () => (
  <div>
    <h1>This is Text</h1>
    <OverlayBox>Back to Top.</OverlayBox>
  </div>
))
