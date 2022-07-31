// import React from 'react';

function fetchPicturesApi({ query, key, page = 1 }) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      return data.hits;
    });
}

export default fetchPicturesApi;
