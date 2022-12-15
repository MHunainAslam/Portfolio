import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="container-fluide sticky-top" >
        <div className="navDiv" style={{ backgroundColor: props.theme === 'dark' ? 'rgba(0, 0, 0, 0.822)' : '' }}>
          <div className="container">

            <div className="col-md-12 row" >
              <div className="col-md-4" >
                <h4 data-aos="zoom-in-down" className='logoname d-none d-sm-block'><span>H</span>unain<span>A</span>slam.<span>HA</span><br /> </h4>
                <h4 data-aos="zoom-in-down" className='logoname d-block d-sm-none'><span>H</span>unain</h4>
              </div>
              <div className="col-lg-8" >
                <div className="teal navbarcss borderYtoX d-none  d-sm-block d-sm-none d-md-block d-md-none d-lg-block" data-aos="flip-down" >
                  <Link to='/'><svg style={{ marginTop: "-5px" }} width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                    <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                    <path d="M18.75 8.39V3H16.5v3.234"></path>
                  </svg>&nbsp;  HOME</Link>
                  <Link to='/project'><svg style={{ marginTop: "-5px" }} width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.243 4.5H3.757c-.832 0-1.507.675-1.507 1.507v11.236c0 .833.675 1.507 1.507 1.507h16.486c.833 0 1.507-.674 1.507-1.507V6.007c0-.832-.674-1.507-1.507-1.507Z"></path>
                    <path d="M.75 19.5h22.5"></path>
                  </svg>&nbsp; PROJECT</Link>
                  <Link to="/about"><svg style={{ marginTop: "-5px" }} width="26" height="27" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"></path>
                    <path d="M11 12.5a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-2Z"></path>
                    <path fillRule="evenodd" d="M7.543 2.883a31.331 31.331 0 0 1 8.913 0 3.196 3.196 0 0 1 2.73 2.874l.126 1.396c.293 3.225.293 6.47 0 9.694l-.127 1.396a3.197 3.197 0 0 1-2.729 2.874 31.334 31.334 0 0 1-8.913 0 3.197 3.197 0 0 1-2.728-2.874l-.127-1.396a53.504 53.504 0 0 1 0-9.694l.127-1.396a3.197 3.197 0 0 1 2.728-2.874Zm8.7 1.484a29.832 29.832 0 0 0-8.486 0 1.697 1.697 0 0 0-1.448 1.526l-.127 1.396a52.003 52.003 0 0 0 0 9.422l.127 1.396c.07.783.67 1.414 1.448 1.526a29.86 29.86 0 0 0 8.486 0 1.696 1.696 0 0 0 1.448-1.526l.127-1.396a52.009 52.009 0 0 0 0-9.422l-.127-1.396a1.697 1.697 0 0 0-1.448-1.526Z" clipRule="evenodd"></path>
                  </svg>&nbsp; ABOUT</Link>
                  <Link onClick={props.changemode}>
                    <svg style={{ marginTop: "-5px" }} width="26" height="26" fill="currentColor" role="switch" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.08 2.734a.922.922 0 0 1 .096 1.03 8.65 8.65 0 0 0-1.054 4.152c0 4.825 3.934 8.732 8.782 8.732.632 0 1.248-.066 1.84-.192a.945.945 0 0 1 .971.38.88.88 0 0 1-.037 1.071 10.02 10.02 0 0 1-7.785 3.694C7.36 21.6 2.88 17.144 2.88 11.653c0-4.133 2.537-7.678 6.149-9.18a.903.903 0 0 1 1.05.261Zm-1.37 1.24a8.723 8.723 0 0 0-4.6 7.679c0 4.824 3.935 8.73 8.783 8.73a8.78 8.78 0 0 0 6.246-2.594c-.405.05-.816.076-1.235.076-5.532 0-10.012-4.457-10.012-9.948 0-1.4.29-2.734.817-3.943Z"></path>
                    </svg>&nbsp; {props.theme === 'dark' ? "Enable Light Mode" : 'Enable Drak Mode' } </Link>
                </div>

               {/* mobile navbar */}


                <div className="navbarcssxs navbar" style={{ marginTop: "-50px" }}>

                  <button data-aos="zoom-in-right" className="navbar-toggler d-xl-none d-xxl-block d-lg-none d-xl-block d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                  </button>
                  {/* <button className="navbar-toggler d-lg-none d-xl-block  d-md-none d-lg-block d-xl-none"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                  </button> */}

                  <div className="offcanvas offcanvas-end" style={{backgroundColor: props.theme === 'dark' ? 'black' : 'blue'}} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasScrollingLabel" style={{ color: 'black' }}></h5>
                      <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body teal navbarcss borderYtoX text-center ">
                      <Link to='/' ><svg style={{ marginTop: "-5px", color: 'white' }} width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                        <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                        <path d="M18.75 8.39V3H16.5v3.234"></path>
                      </svg>&nbsp;  HOME</Link><br /><br /><br />
                      <Link to='/project'><svg style={{ marginTop: "-5px" }} width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.243 4.5H3.757c-.832 0-1.507.675-1.507 1.507v11.236c0 .833.675 1.507 1.507 1.507h16.486c.833 0 1.507-.674 1.507-1.507V6.007c0-.832-.674-1.507-1.507-1.507Z"></path>
                        <path d="M.75 19.5h22.5"></path>
                      </svg>&nbsp; PROJECT</Link><br /><br /><br />
                      <Link to='/about'><svg style={{ marginTop: "-5px" }} width="26" height="27" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"></path>
                        <path d="M11 12.5a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-2Z"></path>
                        <path fillRule="evenodd" d="M7.543 2.883a31.331 31.331 0 0 1 8.913 0 3.196 3.196 0 0 1 2.73 2.874l.126 1.396c.293 3.225.293 6.47 0 9.694l-.127 1.396a3.197 3.197 0 0 1-2.729 2.874 31.334 31.334 0 0 1-8.913 0 3.197 3.197 0 0 1-2.728-2.874l-.127-1.396a53.504 53.504 0 0 1 0-9.694l.127-1.396a3.197 3.197 0 0 1 2.728-2.874Zm8.7 1.484a29.832 29.832 0 0 0-8.486 0 1.697 1.697 0 0 0-1.448 1.526l-.127 1.396a52.003 52.003 0 0 0 0 9.422l.127 1.396c.07.783.67 1.414 1.448 1.526a29.86 29.86 0 0 0 8.486 0 1.696 1.696 0 0 0 1.448-1.526l.127-1.396a52.009 52.009 0 0 0 0-9.422l-.127-1.396a1.697 1.697 0 0 0-1.448-1.526Z" clipRule="evenodd"></path>
                      </svg>&nbsp; ABOUT</Link><br /><br /><br />
                      <Link onClick={props.changemode}>
                        <svg style={{ marginTop: "-5px" }} width="26" height="26" fill="currentColor" role="switch" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.08 2.734a.922.922 0 0 1 .096 1.03 8.65 8.65 0 0 0-1.054 4.152c0 4.825 3.934 8.732 8.782 8.732.632 0 1.248-.066 1.84-.192a.945.945 0 0 1 .971.38.88.88 0 0 1-.037 1.071 10.02 10.02 0 0 1-7.785 3.694C7.36 21.6 2.88 17.144 2.88 11.653c0-4.133 2.537-7.678 6.149-9.18a.903.903 0 0 1 1.05.261Zm-1.37 1.24a8.723 8.723 0 0 0-4.6 7.679c0 4.824 3.935 8.73 8.783 8.73a8.78 8.78 0 0 0 6.246-2.594c-.405.05-.816.076-1.235.076-5.532 0-10.012-4.457-10.012-9.948 0-1.4.29-2.734.817-3.943Z"></path>
                        </svg>&nbsp; {props.theme === 'dark' ? "Enable Light Mode" : 'Enable Drak Mode' }</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
