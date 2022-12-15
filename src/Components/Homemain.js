import React from 'react'
import orchids from '../img/Orchids Wedding.png'
import result from '../img/result.png'
import lawyer from '../img/lawyer.avif'
import ProgressBar from 'react-bootstrap/ProgressBar';
import email from '../img/email.gif'
import name from '../img/name.gif'
import text from '../img/text.gif'
import done from '../img/done.gif'
import send from '../img/send.gif'
import seemore from '../img/seemore.gif'
import { Link } from 'react-router-dom';
import { useState } from 'react';






export default function HomeMain(props) {

  const [fullname, setfullname] = useState()
const [emaill, setemaill] = useState()
const [message, setmessage] = useState()

 const sendmsg = () =>{
  localStorage.setItem([fullname , emaill] , message )
 }

  
  return (
    <>
      <div className="container-fluide" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.205) ', backgroundColor: props.theme === 'dark' ? ' rgb(39, 33, 33)' : 'white' }}>
        <div className="container">
          <div className="projects">
            <div className="col-md-4 projectHead">
              <h1 data-aos="zoom-in-up" style={{ color: props.theme === 'dark' ? 'white' : '' }}>Projects</h1>
            </div>
            <br /><br /><br />
            <div className="projectscontent" >
              <div className="row row-cols-1 row-cols-md-3 g-4" >
                <div className="col" data-aos="flip-right" >
                  <div className="card h-100" >
                    <img src={orchids} className="card-img-top" alt="..." />
                    <div className="card-body"><br />
                      <h5 className="card-title">Orchid's Wedding Planner</h5>
                      <p className="card-text">Where you can book everything related to the Wedding Ceremony.</p>
                    </div>
                  </div>
                </div>
                <div className="col" data-aos="flip-right">
                  <div className="card h-100">
                    <img src={result} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Result Generator Web App</h5>
                      <p className="card-text">It helps schools and colleges in generating results.</p>
                    </div>
                  </div>
                </div>
                <div className="col" data-aos="flip-right">
                  <div className="card h-100">
                    <img src={lawyer} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Lawyer Booking</h5>
                      <p className="card-text">Where you can book Lawyer related to any case.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div><br />
            <div className="seemoreprojects">
              <div className="d-grid gap-2 col-md-4 col-sm-6 col-12 mx-auto">
                <Link to={'/project'}>
                <button className="btn btn-primary " type="button" style={{ width:'100%' }}> <img style={{ width: '40px', marginRight: '10px' }} src={seemore} alt="" /> Show More Projects</button>
                </Link>
                </div><br />
            </div>
          </div>
        </div>
      </div>

      {/* coding skills */}

      <div className="container-fluide" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.500) ', backgroundColor: props.theme === 'dark' ? "black" : 'blue', padding: '10px' }}>
        <div className="container">
          <div className="col-md-4 HomeMainHead">
            <h1 data-aos="zoom-in-down" style={{ color: 'white' }}>Coding Skills</h1>
          </div>
        </div>
      </div>
      
      <div className="container-fluide" style={{ backgroundColor: props.theme === 'dark' ? ' rgb(39, 33, 33)' : 'white', color: props.theme === 'dark' ? ' white' : '' , padding :'30px'}}>
        <div className="container" >
          <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >HTML</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={80} label={`${80}%`} />
            </div>
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >CSS</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={70} label={`${70}%`} />
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >Bootstrap</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={65} label={`${65}%`} />
            </div>
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >JavaScript</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={70} label={`${70}%`} />
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >React JS</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={35} label={`${35}%`} />
            </div>
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >My SQL</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={50} label={`${50}%`} />
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-12 col-12 p-3" style={{ display: 'inline-block' }}>
              <h5 className=' codingskillsheading' >PHP</h5>
              <ProgressBar data-aos="slide-right" className='codingskillsprogressbarcss' now={30} label={`${30}%`} />
            </div>
          </div>

        </div>
      </div>

      {/* contact section */}
    

      <div className="container-fluide" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.500) ',  backgroundColor: props.theme === 'dark' ? "black" : 'blue' , padding: '10px' }}>
        <div className="container">
          <div className="col-md-4 HomeMainHead">
            <h1 data-aos="zoom-in-down" style={{ color: 'white' }}>Get in Touch </h1>
          </div>
        </div>
      </div>
      <div className="container-fluide" style={{backgroundColor: props.theme === 'dark' ? ' rgb(39, 33, 33)' : 'white', color: props.theme === 'dark' ? ' white' : '' , padding :'30px'}}>
      <div className="container">
        <form action="">
        <div className="row g-3">
          <div className="col-md-6 col-sm-12 col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img style={{ width: '30px' }} src={name} alt="" />
                </span>
              <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" value={fullname} onChange={(e) => setfullname(e.target.value) }/>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><img style={{ width: '30px' }} src={email} alt="" /></span>
              <input type="text" className="form-control" placeholder="e.x(hunainaslam.ha@gmail.com)" aria-label="Email" aria-describedby="basic-addon1" value={emaill} onChange={(e) => setemaill(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text"><img style={{ width: '30px' }} src={text} alt="" /></span>
          <textarea className="form-control" aria-label="msg" placeholder='Message' rows={7} value={message} onChange={(e) => setmessage (e.target.value)}></textarea>
        </div>

        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ">
              <div className="modal-dialog modal-dialog-centered py-5 " style={{ color:'black'}}>
                <img style={{ width: '40px'  }} src={done} alt="" className='mx-3' />
                Your Message Has Been Send Successfully
              </div>
              <div className="modal-footer">
                <a href=""><button  className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Back to Home</button></a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <center>
          <button onClick={sendmsg} className="btn btn-primary col-md-4 col-sm-6 col-12" type='button' data-bs-toggle="modal" href="#exampleModalToggle" >
            <img style={{ width: '30px', fill: 'white' }} src={send} alt="" /> Send Message</button>
        </center>
        </form>


        <div className="col">
          <div className="social">
            <a className='mx-3' href="https://pk.linkedin.com/in/hunain-aslam-aa8884245" target={'_blank'}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={props.theme === 'dark' ? 'white' : 'black' }>
                <path fillRule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.75 4a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M2.25 8A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V8.75h-2.5Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75h-2.5Z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a className='mx-3' href="mailto:hunainaslam.ha@gmail.com">
              <svg width="24" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={props.theme === 'dark' ? 'white' : 'black' }>
                <path fillRule="evenodd" d="M2.25 12c0-5.384 4.366-9.75 9.75-9.75a9.71 9.71 0 0 1 6.64 2.623.75.75 0 0 1 .018 1.08l-2.545 2.545a.75.75 0 0 1-1.029.03A4.621 4.621 0 0 0 12 7.35a4.65 4.65 0 0 0 0 9.3 4.637 4.637 0 0 0 3.883-2.1H12a.75.75 0 0 1-.75-.75v-3.6a.75.75 0 0 1 .75-.75h8.825a.75.75 0 0 1 .736.604A10.2 10.2 0 0 1 21.75 12c0 5.384-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12ZM12 3.75a8.25 8.25 0 1 0 8.185 7.2H12.75v2.1h4.336a.75.75 0 0 1 .707 1A6.148 6.148 0 0 1 5.85 12 6.15 6.15 0 0 1 12 5.85c1.313 0 2.527.415 3.524 1.116l1.499-1.5A8.187 8.187 0 0 0 12 3.75Z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a className='mx-3' href="https://www.instagram.com/hunainaslam_ha/" target={'_blank'}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={props.theme === 'dark' ? 'white' : 'black' }>
                <path d="M16 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                <path fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32 2.89 2.89 0 0 1-2.55 2.516 46.217 46.217 0 0 1-10.184 0 2.89 2.89 0 0 1-2.55-2.516 44.421 44.421 0 0 1 0-10.32 2.89 2.89 0 0 1 2.55-2.516Z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a className='mx-3'  href="https://wa.me/message/ZVWAZDJPXCTRI1" target={'_blank'}>
              <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={props.theme === 'dark' ? 'white' : 'black' }>
                <path d="M8.886 7.17c.183.005.386.015.579.443.128.285.343.81.519 1.238.137.333.249.607.277.663.064.128.104.275.02.448l-.028.058a1.43 1.43 0 0 1-.23.37 9.386 9.386 0 0 0-.143.17c-.085.104-.17.206-.242.278-.129.128-.262.266-.114.522.149.256.668 1.098 1.435 1.777a6.634 6.634 0 0 0 1.903 1.2c.07.03.127.055.17.076.257.128.41.108.558-.064.149-.173.643-.749.817-1.005.168-.256.34-.216.578-.128.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23.064.109.064.62-.148 1.222-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655-2.426-.954-4.027-3.32-4.35-3.799a2.768 2.768 0 0 0-.053-.076l-.006-.008c-.147-.197-1.048-1.402-1.048-2.646 0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005Z"></path>
                <path fillRule="evenodd" d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.447 9.958-9.912a9.828 9.828 0 0 0-2.914-7.011A9.917 9.917 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911 0 1.739.458 3.447 1.33 4.954l-1.23 4.466Zm2.677-4.068a1.5 1.5 0 0 0-.148-1.15 8.377 8.377 0 0 1-1.129-4.202c0-4.63 3.793-8.411 8.458-8.411 2.27 0 4.388.877 5.986 2.468a8.328 8.328 0 0 1 2.472 5.948c0 4.63-3.793 8.412-8.458 8.412h-.005a8.5 8.5 0 0 1-4.044-1.026 1.5 1.5 0 0 0-1.094-.132l-2.762.721.724-2.628Z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a className='mx-3' href="https://github.com/MHunainAslam" target={'_blank'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={props.theme === 'dark' ? 'white' : 'black' }>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
