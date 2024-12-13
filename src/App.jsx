import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DataFetch from './Datafetch'
import Header from './components/Header';
import Training from './components/Training'; // Import the Training page
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Courses from './components/Pages/Courses';
import Solution from './components/Pages/Solution';
import Contactus from './components/Pages/Contactus';
import Internship from './components/Pages/Internship';
import InplantTraining from './components/Pages/Inplant_training';
import VirtualTraining from './components/Pages/Virtualtraining';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/training" element={<Training />} />
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Internship' element={<Internship/>}/>
        <Route path='/Solution' element={<Solution/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path="/Inplanttraining" element={<InplantTraining />} />
        <Route path="/Virtualtraining" element={<VirtualTraining />} />
      </Routes>
    
      <Footer/> 
    </div>
  );
};

export default App;
