import React, { useState } from 'react';

const BASE_URL = process.env.VITE_API ?? `https://api.datamuse.com`;

export const fetchSynonyms = async (word) => {
  return await (await fetch(`${BASE_URL}/words?rel_syn=${word}`)).json();
};
console.log(fetchSynonyms());
