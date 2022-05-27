import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Search = () => {
  const [items, setItems] = useState('programming');
  const [result, setResult] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: items,
        }
      });
      setResult(data.query.search);
    };
    if (items && !result.length) {
      search();
    }
    else {
      const timeoutId = setTimeout(() => {
        if (items) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [items, result.length]);
  const renderedResult = result.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Search Items</label>
          <input type="text"
            value={items}
            onChange={(e) => setItems(e.target.value)} />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResult}
      </div>
    </div>
  )
}
export default Search;