// @flow
import { Tooltip } from 'components/Tooltip'
import React from 'react'
import renderIf from 'lib/renderIf'
import RoundedBadge from 'components/RoundedBadge'
import WithToggleState from 'components/WithToggleState'

import styles from './index.scss'

type Props = {
  bang?: string,
  label: string,
  value: mixed
}

export default function ReadOnlyField (props: Props) {
  const BLANK_FIELD = ''

  return (
    <div className={styles.field}>
      <div className={styles.label}>
        {props.label}
      </div>
      {renderIf(Boolean(props.bang))(
        <div className={styles.iconContainer}>
          <WithToggleState
            target={({ open, toggle }) =>
              <Tooltip
                attachment='bottom center'
                open={open}
                size='small'
                toggle={toggle}
                type='brand'
              >
                <RoundedBadge size='small' type='brand'>
                  !
                </RoundedBadge>
                <div>
                  {props.bang}
                </div>
              </Tooltip>}
          />
        </div>
      )}
      <div className={styles.value}>
        {props.value || BLANK_FIELD}
      </div>
    </div>
  )
}
