import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import a from '../img/result/user.png'
import b from '../img/result/costomization.png'
import c from '../img/result/print.JPG'
import next from '../img/nextimg.gif'
import close from '../img/closeimg.gif'




export default function Result(props) {
    return (
        <>

            <Navbar theme={props.theme} changemode={props.changemode} />

            <div className="container-fluide" >
                <svg style={{ backgroundColor: props.theme === 'dark' ? 'black' : 'blue' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={props.theme === 'dark' ? 'rgb(39, 33, 33)' : 'white'} fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className="container" >
                    <div className="col-md-12 AboutHead">
                        <h4 data-aos="zoom-in-down" style={{ color: 'white', marginTop: '-22%' }}>Result Generator</h4>
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
                        <div className="col-6 my-4">
                            <h6>Web App</h6><img data-bs-toggle="modal" href="#exampleModalToggle" src={a} alt="" />
                            <h6 className='my-4'>Print and Save</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle3" src={c} alt="" />
                        </div>
                        <div className="col-6 my-4">
                            <h6 className='my-4'>Customization</h6>   <img data-bs-toggle="modal" href="#exampleModalToggle2" src={b} alt="" />
                        </div>

                        {/* modal images */}
                        <div className="modal modal-xl fade" id="exampleModalToggle" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={a} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={close} alt="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal modal-xl fade" id="exampleModalToggle2" aria-hidden={true} tabIndex="-1">
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

                        <div className="modal modal-xl fade" id="exampleModalToggle3" aria-hidden={true} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img style={{ width: '100%' }} src={c} alt="" />
                                    </div>
                                    <div className="modal-footer" style={{ display: 'flex', placeContent: 'center' }}>
                                        <img style={{ width: '30px' }} src={close} alt="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" />
                                        <img style={{ width: '30px', marginLeft: '-100%', transform: 'rotate(180deg)' }} src={next} alt="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" />
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
