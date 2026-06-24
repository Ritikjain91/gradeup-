// App.js or index.js
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Services from './Component/Services/Services.jsx';
import Reactjs from './Component/Reactjs/Reactjs.jsx';

function App() {
  return (
    <BrowserRouter>  {/* Router must wrap everything using Link */}
      <Navbar />
      
      {/* Your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/reactjs" element={<Reactjs />} />
        <Route path="*" element={<h1 className='text-4xl text-center mt-10 text-red-500'>404 Not Found</h1>} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;