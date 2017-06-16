Examples of Text Inputs

    const FormModel = require('../../../lib/FormModel/FormModel.js').default;
    const formModel = new FormModel({first_name: 'Paco', last_name: ''}, {first_name: 'string', last_name: 'string'});
    const fieldModel = formModel.getField('first_name');
    const info = (<div>ola k fas</div>);

    <ul className='example-list' style={{maxWidth: 400}}>
      <li><Text label='First name' fieldModel={fieldModel} /></li>
      <li><Text label='First name' fieldModel={formModel.getField('last_name')} placeholder='HODOR' /></li>
      <li><Text label='First name' fieldModel={fieldModel} info={info} /></li>
    </ul>
