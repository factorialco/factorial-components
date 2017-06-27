Examples of Select Inputs

    const FormModel = require('../../../lib/FormModel/FormModel.js').default;
    const form = new FormModel({first_name: 'Paco'}, {first_name: 'string'});
    const field = form.get('first_name');
    const options = [
      {label: 'foo', value: 'bar'}
    ];

    <ul className='example-list'>
      <li><Select label='First name' field={field} options={options} /></li>
    </ul>
