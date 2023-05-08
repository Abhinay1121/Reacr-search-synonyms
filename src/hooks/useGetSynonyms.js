import { fetchSynonyms } from '../api/fetchSynonyms';
import React, { useState } from 'react';

export const useGetSynonyms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [synonms, setSynonms] = useState([]);
  const getSynonyms = (word) => {
    setIsLoading(true);
    fetchSynonyms(word)
      .then((data) => setSynonms(data))
      .then(() => setIsLoading(false));
  };
  return { isLoading, synonms, getSynonyms };
};
