import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Content.js';
import Entry from './Entry.js';

function Page() {
    console.log('page');
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="content" element={<Content />} />
          </Routes>
        </BrowserRouter>
    );
}

export default Page;
