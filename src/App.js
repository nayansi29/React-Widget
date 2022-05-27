import React, { useState } from 'react';
import Accordance from './components/Accordance';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './Route';
import Header from './components/Header';

const App = () => {
  const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    }
  ];
  const [selected, setSelected] = useState(options[0]);
  const items = [
    {
      title: 'What is React ?',
      content: 'React is a frontend javascript Library'
    },
    {
      title: 'Why Use React?',
      content: 'React is easy to use library or a single page Application.'
    },
    {
      title: 'How Do you use React?',
      content: 'You Can Use React by Creating Compoents',
    }
  ];
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordance items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} selected={selected} onSelectedOption={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
export default App;