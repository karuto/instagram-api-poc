import React, { useState, useEffect } from 'react';

function Entry() {
  const IG_BASE_URL = 'https://api.instagram.com';
  const CLIENT_SECRET = 'c713cf725f779fe00bb80bde4a2b801e';
  const CLIENT_ID = '1310875336001088';
  const REDIRECT_URI = 'https://karuto.github.io/instagram-api-poc/content';
  const RESPONSE_TYPE = 'code';
  const SCOPE = 'user_profile,user_media';
  const ACCESS_TOKEN_URL = `${IG_BASE_URL}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${CODE}&scope=${SCOPE}`;
  useEffect(() => {
      fetch(ACCESS_TOKEN_URL)
      .then(response => response.json())
      .then(data => console.log(data));
  });

  return (
    <h1>Hello entry</h1>
  );
}

export default Entry;
