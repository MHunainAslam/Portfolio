import React from 'react'
import Navbar from './Navbar'
import cv from '../img/Hunains Resume.jpg'
import Footer from './Footer';
import seefullproject from '../img/full project.gif'
import orchids from '../img/Orchids Wedding.png'
import result from '../img/result.png'
import lawyer from '../img/lawyer.avif'
import todo from '../img/Todolist.png'
import { Link } from 'react-router-dom';




export default function Portfolio(props) {
 
  return (
    <>
      <Navbar theme={props.theme} changemode={props.changemode} />

      <div className="container-fluide" >
        <svg style={{ backgroundColor: props.theme === 'dark' ? 'black' : 'blue' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="container" >
          <div className="col-md-12 AboutHead">
            <h1 data-aos="zoom-in-down" style={{ color: 'white', marginTop: '-22%' }}>Projects</h1>
          </div>
        </div>
      </div>

    <div className="container-fluide" style={{ backgroundColor: props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white' }}>
      <div className="container" style={{ marginTop: '10%' }}>
        <div className="col-md-12 col-sm-12">
          <div className="aboutbox">
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
              <div className="col">
                <div className="card h-100">
                  <img src={orchids} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">Orchid's Wedding Planner</h5>
                    <p className="card-text">Where you can book everything related to the Wedding Ceremony. <br /> (HTML, CSS & BOOTSTRAP)</p>
                    
                  </div>
                  <div className="card-footer bg-transparent border-success">
                  <Link  to='/orchids' className="btn btn-primary"><img style={{width:'25px' , marginTop:'-4px', marginRight:'3px'}} src={seefullproject} alt="" /> Show</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={lawyer} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Lawyer Booking</h5>
                    <p className="card-text">Where you can book Lawyer related to any case. <br /> (PHP & MYSQL)</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                  <Link  to="/lawyer" className="btn btn-primary"><img style={{width:'25px' , marginTop:'-4px', marginRight:'3px'}} src={seefullproject} alt="" /> Show</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={result} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Result Generator Web App</h5>
                    <p className="card-text">It helps schools and colleges in generating results. <br /> (HTML, CSS, BOOTSTRAP & JAVASCRIPT)</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                  <Link  to="/result" className="btn btn-primary"><img style={{width:'25px' , marginTop:'-4px', marginRight:'3px'}} src={seefullproject} alt="" /> Show</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={todo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Todo List</h5>
                    <p className="card-text">where you can save todos.  <br /> (HTML, CSS, BOOTSTRAP & REACT)</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                  <Link  to="/todo" className="btn btn-primary"><img style={{width:'25px' , marginTop:'-4px', marginRight:'3px'}} src={seefullproject} alt="" /> Show</Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br />


        </div>

      </div>
      </div>
      <Footer theme={props.theme} />
    </>
  )
}
