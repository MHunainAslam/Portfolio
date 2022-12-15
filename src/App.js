 import './App.css';
// import image from './img/wave.svg';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import HomeMain from './Components/Homemain';
import Footer from './Components/Footer'
import React, { useState } from 'react';
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './Components/Portfolio';
import Orchids from './Components/Orchids';
import Lawyer from './Components/Lawyer';
import Result from './Components/Result';
import Todo from './Components/Todo';




function App() {

  const [theme, settheme] = useState('dark')
  const changemode = () =>{
    if (theme === 'dark') {
      settheme('light')
    } else {
      settheme('dark')
      
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Navbar theme={theme} changemode={changemode}/>
            <Banner theme={theme} />
            <HomeMain theme={theme} />
            <Footer theme={theme} />
          </>
          }>
          </Route>

          <Route path="/about" theme={theme}  element={<About  theme={theme} changemode={changemode} />} />
          <Route path="/project"  element={<><Portfolio theme={theme} changemode={changemode}/></>} />
          <Route path="/orchids" theme={theme}  element={<Orchids  theme={theme} changemode={changemode} />} />
          <Route path="/lawyer" theme={theme}  element={<Lawyer  theme={theme} changemode={changemode} />} />
          <Route path="/result" theme={theme}  element={<Result  theme={theme} changemode={changemode} />} />
          <Route path="/todo" theme={theme}  element={<Todo  theme={theme} changemode={changemode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
