import React from 'react'
import { storiesOf } from '@storybook/react'
import NotificationDanger from '../Notification/NotificationDanger'

storiesOf('Notification', module).add('Danger Notification', () => (
  <NotificationDanger>Hello Text</NotificationDanger>
))
