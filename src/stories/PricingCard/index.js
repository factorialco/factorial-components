import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import LinkButton from 'components/Buttons/LinkButton'
import React from 'react'

import PricingCard from 'components/PricingCard'

storiesOf('PricingCard', module).add('standard', () =>
  <div style={{ width: 280 }}>
    <PricingCard
      title='Coste para el empleado'
      footer={
        <LinkButton onClick={action('more information')}>
          Mas informacion &rarr;
        </LinkButton>
      }
      cost={{
        cost: '14,90',
        periodicity: 'mes',
        extra_cost: 'o 63,50 AdeslasExtra',
        description: 'Descontados de la nomina y cargados a la empresa'
      }}
    />
  </div>
)
