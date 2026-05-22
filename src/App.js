// App.js or index.js
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';

function App() {
  return (
    <BrowserRouter>  {/* Router must wrap everything using Link */}
      <Navbar />
      {/* Your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;