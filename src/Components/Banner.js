import React from 'react'
import programmerimg from '../img/programmer.jpeg'

export default function Banner(props) {
  return (
    <>
      <div className="container-fluide">
        <div className="bannercontent" style={{backgroundColor: props.theme === 'dark' ? 'black' : ''}}>
          <div className="container">
            <div className="col-md-12 row ">
              <div className="col-md-6 myname-div">
                <div data-aos="zoom-in-right" className="myname">
                  <h1>Hello, I'm Hunain</h1>
                  <h5>Front-End Developer</h5>
                  <h6> Learning to become a MERN stack developer</h6> <br />
                  <img className='myphoneimg  d-lg-none d-xl-block  d-md-none d-lg-block d-xl-none' src={programmerimg} alt="" />   
                </div>
              </div>
              
                <div data-aos="zoom-in-left" className="myimg-div col-md-6 text-center d-none d-sm-block d-sm-none d-md-block">                
                  <img className="myimg" src={programmerimg} alt="" />    
                </div>
              
            </div>
          </div>
        </div>
        <div className="svg-div"  style={{backgroundColor: props.theme === 'dark' ? 'black' : ''}}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.205) '}} viewBox="0 0 1440 350">
          <path fill={props.theme === 'dark' ? ' rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,96C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          {/* <svg style={{boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.205) ', marginTop:'-70px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
            <path fill={props.theme === 'dark' ? ' rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,74.7C672,117,768,203,864,245.3C960,288,1056,288,1152,250.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg> */}
        </div>
      </div>
      
    </>
  )
}

