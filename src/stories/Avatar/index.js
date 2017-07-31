import { storiesOf } from '@storybook/react'
import profilePic from '../fixtures/profile.png'
import React from 'react'

import Avatar from 'components/Avatar'

storiesOf('Avatar', module)
  .add('small', () => <Avatar url={profilePic} size='small' />)
  .add('short', () => <Avatar url={profilePic} size='short' />)
  .add('medium', () => <Avatar url={profilePic} />)
  .add('grande', () => <Avatar url={profilePic} size='grande' />)
  .add('big', () => <Avatar url={profilePic} size='big' />)
