import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'

import Button from 'components/Buttons/Button'
import Modal from 'components/Modal'
import ModalFooter from 'components/Modal/Footer'
import ModalSubmit from 'components/Modal/Submit'
import ModalPad from 'components/Modal/Pad'

storiesOf('Modal', module)
  .add('with footer', () =>
    <Modal
      title='this is a title'
      description='this is a title description'
      illustration='check'
      type='brand'
      onClose={action('closed')}
    >
      <ModalPad>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id
          est laborum.
        </p>
      </ModalPad>
      <ModalFooter>
        <Button onClick={action('submit')} label='Submit' />
        <Button
          onClick={action('closed')}
          label='Cancel'
          type='wrong'
          outline
        />
      </ModalFooter>
    </Modal>
  )
  .add('with submit', () =>
    <Modal
      title='this is a title'
      description='this is a title description'
      illustration='check'
      type='brand'
      onClose={action('closed')}
      onSubmit={action('submit')}
    >
      <ModalPad>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id
          est laborum.
        </p>
      </ModalPad>
      <ModalSubmit label='submit!' />
    </Modal>
  )
