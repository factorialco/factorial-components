import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from 'components/Buttons/Button';
import RoundButton from 'components/Buttons/RoundButton';

storiesOf('Button', module)
  .addDecorator((story) => (
    <div style={{width: 200}}>
      {story()}
    </div>
  ))
  .add('with text', () => (
    <Button onClick={action('clicked')} label="this is some text" />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="😃 😃 😃" />
  ))
  .add('outlined', () => (
    <Button outline onClick={action('clicked')} label="this is some text" />
  ));

storiesOf('RoundButton', module)
  .addDecorator((story) => (
    <div style={{width: 200}}>
      {story()}
    </div>
  ))
  .add('with text', () => (
    <RoundButton
      set='utility'
      icon='add'
      onClick={action('clicked')}
      label="this is some text"
    />
  ))
  .add('with some emoji', () => (
      <RoundButton
      set='utility'
      icon='add'
      onClick={action('clicked')}
      label="😃 😃 😃"
    />
  ))
