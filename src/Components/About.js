import React from 'react'
import Navbar from './Navbar'
import cv from '../img/Hunains Resume.jpg'
import Footer from './Footer';
import downloadcv from '../img/full project.gif'



export default function About(props) {
  return (
    <>
      <Navbar theme={props.theme} changemode={props.changemode} />

      <div className="container-fluide" >
        <svg style={{ backgroundColor: props.theme === 'dark' ? 'black' : 'blue' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="container" >
          <div className="col-md-12 AboutHead">
            <h1 data-aos="zoom-in-down" style={{ color: 'white', marginTop: '-22%' }}>About Me</h1>
          </div>
        </div>
      </div>
      <div className="container-fluide" style={{ backgroundColor: props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white' }}>
        <div className="container" style={{ marginTop: '10%' }}>
          <div className="col-md-12 col-sm-12">
            <div className="aboutbox" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <p>I am Hunain Aslam student at Dadabhoy institute of higher education (6th Semester with 3.4 CGPA). I've also completed Web Development Course from Aptech learning Pakistan. Meticulous FrontEnd Developer. A fast learner who canquickly integrate into a team. Knowledgeable in Html,CSS, bootstrap, and JavaScript. I am enthusiastic to constantly learn and growin the industry and strive on new challenges.</p>
            </div><br />
            <div className="aboutline"></div><br />
            <div className="col-md-12 AboutHead">
              <h1 data-aos="zoom-in-down" style={{ color: props.theme === 'dark' ? 'white' : '' }}>Resume</h1>
            </div>
            <div className="resume">
              <img src={cv} alt="" />
            </div><br />
            <div className='downloadbtn'>
              <a href={cv}  download>
              <button type="button" className='btn btn-primary'><img style={{width:'25px' , marginTop:'-4px', marginRight:'3px' }} src={downloadcv} alt="" />Download</button>
              </a>            
            </div>
          </div><br /><br />
          <div className="aboutline"></div><br />
        </div>
      </div>
      <Footer theme={props.theme} />
    </>
  )
}
