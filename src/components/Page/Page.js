import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './Page.css';
import Content from './Content.js';


function Page() {
    const IG_BASE_URL = 'https://api.instagram.com';
    const CLIENT_SECRET = 'c713cf725f779fe00bb80bde4a2b801e';
    const ACCESS_TOKEN_URL = `${IG_BASE_URL}/authorize?client_id=1310875336001088`
    useEffect(() => {
        fetch();
    });        


    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="content" element={<Content />} />
          </Routes>
        </BrowserRouter>
    );
}

export default Page;
