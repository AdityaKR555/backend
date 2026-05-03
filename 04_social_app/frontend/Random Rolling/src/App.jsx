import { useState } from 'react'
import Header from '../components/Header'
import { Routes, Route } from "react-router-dom";
import Feed from '../pages/Feed';
import Createpost from '../pages/Createpost';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/create-post" element={<Createpost />} />
      </Routes>
    </>
  )
}

export default App
