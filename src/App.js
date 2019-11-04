import React, { useState } from 'react';
import MoviesAndKeywords from './arr1';
import Chart from 'react-google-charts';
import Fuse from 'fuse.js';
import './index.css';

var synonyms = require('synonyms');

var options = {
  shouldSort: true,
  threshold: 0.6,
  includeScore: true,
  location: 0,

  minMatchCharLength: 1,
  keys: ['key_words']
};

var fuse = new Fuse(MoviesAndKeywords, options);
function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [showresult, setShowResult] = useState(false);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSub = e => {
    e.preventDefault();
    let list_of_words = search.split(' ');
    let syns = [];
    for (let word of list_of_words) {
      let word_syns = synonyms(word);
      console.log(word_syns);
    }
    let _new = syns.join(' ');
    console.log('search is ', _new);
    var result = fuse.search(search);
    let sample_results = [];
    sample_results.push(['', '', { role: 'style' }]);
    let bar_movies = [];
    for (let r of result) {
      bar_movies.push([
        r['item'].movie,
        r['score'],
        'stroke-color: #000; stroke-width: 4; fill-color: #08090A'
      ]);
    }
    bar_movies = bar_movies.reverse();
    sample_results = [...sample_results, ...bar_movies];

    setResults(sample_results);
    setShowResult(true);
    console.log(result);
  };
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <h1>Movie Search Engine</h1>
      <form
        className='form-inline my-2 my-lg-0'
        style={{ marginLeft: '40%', paddingTop: '1%' }}
      >
        <input
          className='form-control mr-sm-2'
          type='text'
          placeholder='Search'
          onChange={handleChange}
        />
        <button
          className='btn btn-outline-info my-2 my-sm-0'
          type='submit'
          onClick={handleSub}
        >
          Search
        </button>
      </form>

      {showresult ? (
        <Chart
          chartType='BarChart'
          width='100%'
          height='900px'
          data={results}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
