import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl',
  }
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form' style={{ marginTop: '10px' }}>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div><br />
      <Dropdown
        label='Select A Language'
        options={options}
        selected={language}
        onSelectedOption={setLanguage}
      />
      <br />
      <hr />
      <h3 className='header'>OutPut</h3>
      <Convert language={language} text={text} />
    </div>
  );
};
export default Translate;