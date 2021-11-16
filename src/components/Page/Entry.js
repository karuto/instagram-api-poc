import React, { useState, useEffect } from 'react';

function Entry() {
  const IG_BASE_URL = 'https://api.instagram.com';
  const CLIENT_SECRET = 'c713cf725f779fe00bb80bde4a2b801e';
  const ACCESS_TOKEN_URL = `${IG_BASE_URL}/authorize?client_id=1310875336001088`
  useEffect(() => {
      fetch();
  });

  return (
    <h1>Hello entry</h1>
  );
}

export default Entry;
