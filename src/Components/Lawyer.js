import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import a from '../img/lawyer/home.png'
import b from '../img/lawyer/services.png'
import c from '../img/lawyer/about.png'
import d from '../img/lawyer/contact.png'
import e from '../img/lawyer/client registration.png'
import f from '../img/lawyer/login.png'
import g from '../img/lawyer/lawyer login.png'
import h from '../img/lawyer/lawyer registration.png'
import i from '../img/lawyer/book oppointment.png'
import j from '../img/lawyer/dashboard.png'
import k from '../img/lawyer/add specialization.png'
import l from '../img/lawyer/list specialization.png'
import m from '../img/lawyer/add location.png'
import n from '../img/lawyer/list Location.png'
import o from '../img/lawyer/add lawyer.png'
import p from '../img/lawyer/list lawyer.png'
import next from '../img/nextimg.gif'
import close from '../img/closeimg.gif'




export default function Lawyer(props) {

    return (
        <>

            <Navbar theme={props.theme} changemode={props.changemode} />

            <div className="container-fluide" >
                <svg style={{ backgroundColor: props.theme === 'dark' ? 'black' : 'blue' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className="container" >
                    <div className="col-md-12 AboutHead">
                        <h2 data-aos="zoom-in-down" style={{ color: 'white', marginTop: '-22%' }}>Lawyer Booking</h2>
                    </div>
                </div>
            </div>

            <div className="container-fluide" style={{
                backgroundColor: props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white',
                color: props.theme === 'dark' ? 'white' : ''
            }}>
                <div className="container" style={{ marginTop: '10%' }}>
                    <div className="lawyerbox row">

                        {/* images */}
                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <p>Home</p><img data-bs-toggle="modal" href="#exampleModalToggle" src={a} alt="" />
                            <p className='my-4'>Add Specialization (Lawyer)</p>   <img data-bs-toggle="modal" href="#exampleModalToggle11" src={k} alt="" />
                            <p className='my-4'>Add Lawyer (Admin)</p>   <img data-bs-toggle="modal" href="#exampleModalToggle15" src={o} alt="" />
                            
                        </div>
                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <p>Services</p><img data-bs-toggle="modal" href="#exampleModalToggle2" img src={b} alt="" />
                            <p className='my-4'>Client Registration</p>   <img data-bs-toggle="modal" href="#exampleModalToggle5" src={e} alt="" />
                            <p className='my-4'>Client Login</p><img data-bs-toggle="modal" href="#exampleModalToggle8" src={f} alt="" />
                            <p className='my-4'>List Specialization</p><img data-bs-toggle="modal" href="#exampleModalToggle12" src={l} alt="" />                      
                            <p className='my-4'>List Lawyer</p>   <img data-bs-toggle="modal" href="#exampleModalToggle16" src={p} alt="" />
                            
                        </div>

                        <div className="col-md-3 col-sm-3 col-3 my-4">
                            <p>About</p><img data-bs-toggle="modal" href="#exampleModalToggle3" src={c} alt="" />
                            <p className='my-4'>Lawyer Registration</p><img data-bs-toggle="modal" href="#exampleModalToggle6" src={h} alt="" />
                            <p className='my-4'>Dashboard</p>   <img data-bs-toggle="modal" href="#exampleModalToggle9" src={j} alt="" /> 
                            <p className='my-4'>Add Location (Lawyer)</p>   <img data-bs-toggle="modal" href="#exampleModalToggle13" src={m} alt="" />
                            
                            </div>

                        <div className="col-md-3 col-sm-3 col-3 my-4" >
                            <p>Contact</p><img data-bs-toggle="modal" href="#exampleModalToggle4" src={d} alt="" />
                            <p className='my-4'>Lawyer Login</p>   <img data-bs-toggle="modal" href="#exampleModalToggle7" src={g} alt="" />
                            <p className='my-4'>Book Oppintment</p>   <img data-bs-toggle="modal" href="#exampleModalToggle10" src={i} alt="" />
                            <p className='my-4'>List Location</p>   <img data-bs-toggle="modal" href="#exampleModalToggle14" src={n} alt="" />
                            
                        </div>

                        {/* modal images */}
                        <div className="modal modal-lg fade" id="exampleModalToggle" aria-hidden={true} tabIndex="-1" >
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
                                <div className="modal-content" >
                                    <div className="modal-body" >
                                        <img style={{ width: '100%' }} src={a} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={close} alt="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle2" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={b} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle3" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={c} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle4" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={d} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle5" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={e} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle6" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={h} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle7" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={g} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle8" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={f} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle9" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={j} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle10" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={i} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle11" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={k} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle12" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle12" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={l} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle13" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle13" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={m} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle14" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle12" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle14" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={n} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle15" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle13" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle15" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={o} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle16" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle14" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-lg fade" id="exampleModalToggle16" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={p} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={close} alt="" data-bs-target="#exampleModalToggle16" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle15" data-bs-toggle="modal" />
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
