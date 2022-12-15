import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import homeimg from '../img/orchid/home.png'
import aboutimg from '../img/orchid/about.png'
import galleryimg from '../img/orchid/gallery.png'
import pkgimg from '../img/orchid/packages.png'
import services from '../img/orchid/services.png'
import reserv from '../img/orchid/reservation form.png'
import contact from '../img/orchid/contact.png'
import signin from '../img/orchid/signin.png'
import signup from '../img/orchid/sign up.png'
import forgot from '../img/orchid/forgot pass.png'
import thanku from '../img/orchid/thank u.png'
import next from '../img/nextimg.gif'
import close from '../img/closeimg.gif'




export default function Orchids(props) {

    return (
        <>

            <Navbar theme={props.theme} changemode={props.changemode} />

            <div className="container-fluide" >
                <svg style={{ backgroundColor: props.theme === 'dark' ? 'black' : 'blue' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className="container" >
                    <div className="col-md-12 AboutHead">
                        <h4 data-aos="zoom-in-down" style={{ color: 'white', marginTop: '-22%' }}>Orchid's Wedding Planner</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluide" style={{
                backgroundColor: props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white',
                color: props.theme === 'dark' ? 'white' : ''
            }}>
                <div className="container" style={{ marginTop: '10%' }}>
                    <div className="orchidbox row">

                        {/* images */}
                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <h6>Home</h6><img data-bs-toggle="modal" href="#exampleModalToggle" src={homeimg} alt="" />
                            <h6 className='my-4'>Sign In</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle8" src={signin} alt="" />
                            <h6 className='my-4'>Thank You</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle11" src={thanku} alt="" />
                        </div>
                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <h6>About</h6><img data-bs-toggle="modal" href="#exampleModalToggle2" img src={aboutimg} alt="" />
                            <h6 className='my-4'>Services</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle5" src={services} alt="" />
                        </div>

                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <h6>Gallery</h6><img data-bs-toggle="modal" href="#exampleModalToggle3" src={galleryimg} alt="" />
                            <h6 className='my-4'>Resetvation</h6><img data-bs-toggle="modal" href="#exampleModalToggle6" src={reserv} alt="" />
                            <h6 className='my-4'>Sign Up</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle9" src={signup} alt="" />
                        </div>

                        <div className="col-md-3 col-sm-3 col-3 my-4" >
                            <h6>Packages</h6><img data-bs-toggle="modal" href="#exampleModalToggle4" src={pkgimg} alt="" />
                            <h6 className='my-4'>Contact</h6><img data-bs-toggle="modal" href="#exampleModalToggle7" src={contact} alt="" />
                            <h6 className='my-4'>Forgot Password</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle10" src={forgot} alt="" />
                        </div>

                        {/* modal images */}
                        <div className="modal fade" id="exampleModalToggle" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={homeimg} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={close} alt="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle2" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={aboutimg} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle3" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={galleryimg} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle4" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={pkgimg} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle5" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={services} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle6" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={reserv} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle7" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={contact} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle8" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={signin} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle9" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={signup} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle10" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={forgot} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle11" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={thanku} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={close} alt="" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>













                        <br />


                    </div>

                </div>
            </div>
            <Footer theme={props.theme} />
        </>
    )
}
