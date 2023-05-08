import React, { useState, useEffect } from 'react';
import { useGetSynonyms } from './hooks/useGetSynonyms';

export default function App() {
  const [word, setWord] = useState('');
  const { isLoading, synonms, getSynonyms } = useGetSynonyms();
  console.log(word);

  const handleFetchSynonms = (e) => {
    e.preventDefault();
    getSynonyms(word);
  };

  const handleSynonmsClick = (newWord) => {
    setWord(newWord.word);
    getSynonyms(newWord.word);
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="word-input">Your word</label>
        <input
          value={word}
          id="word-input"
          onChange={(e) => setWord(e.target.value)}
        />

        <button type="submit" onClick={handleFetchSynonms}>
          Search
        </button>
      </form>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {synonms?.map((synonm) => (
            <li key={synonm.word} onClick={() => handleSynonmsClick(synonm)}>
              {synonm.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
