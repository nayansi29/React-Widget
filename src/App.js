import React from 'react';
import Accordance from './components/Accordance';
import Search from './components/Search';

const App = () => {
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
  ]
  return (
    <div>
      <Search />
    </div>
  )
}

export default App;