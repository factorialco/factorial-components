Examples of Day picker Inputs

    const FormModel = require('../../../lib/FormModel/FormModel.js').default;
    const form = new FormModel({hired_on: null}, {hired_on: 'date'});
    const field = form.get('hired_on');

    <ul className='example-list' style={{maxWidth: 200}}>
      <li><DayPicker label='Hired on' field={field} /></li>
    </ul>
