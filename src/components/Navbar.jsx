import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [loginForm, setLoginForm] = useState(false);
    const setFrom = () =>{
        if(loginForm){
            setLoginForm(false)
        } else{
            setLoginForm(true)
        }
    }
  return (
    <>
    <nav className='py-2 fixed-top'>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
            <img src="/assets/whole.png" alt="" />
        </div>
        <div className='nav-search-bar'>
            <i className='bi bi-search'></i>
            <input type="text" name="" id="" placeholder='Search for your favorite groups in ATG' />
        </div>
        <div className='desktop' style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <p className='m-0' style={{color:'black', fontWeight:'bold'}}>Create account. <span style={{color:'blue'}}>It's free!</span></p>
        </div>
        <div className='text-end container-fluid mobile-nav'>
            <div className='w-fit'>
                <button className='btn'>
                    <img height='15px' width='15px' src="/assets/Rectangle.png" alt="" />
                </button>
                <button className='btn'>
                    <img height='15px' width='15px' src="/assets/Oval.png" alt="" />
                </button>
                <button className='btn'>
                    <img height='15px' width='15px' src="/assets/Path.png" alt="" />
                </button>
            </div>
        </div>
      </div>
    </nav>
    {/* <!-- Modal --> */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header text-center " style={{background:'#EFFFF4'}}>
                    <p className='m-0 ' style={{color:'#008A45' ,fontSize:'0.85rem'}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div style={{position:'absolute', right:'0', transform:'translate(0,-180%)'}}><i style={{color:'white'}} type="button" className="bi bi-x-circle-fill" data-bs-dismiss="modal" aria-label="Close"></i></div>
                </div>
                <div className="modal-body p-4">
                    <div className='d-flex'>
                        <div className='login-portal'>
                            <h1 className='fs-5 '>{loginForm?"Sign In":"Create account"}</h1>
                            { !loginForm?
                            <form action="">
                                <div className=''>
                                    <div className='name-div d-flex '>
                                        <div className='input-div w-50'>
                                            <label htmlFor=""></label>
                                            <input className='w-100' type="text" name="" id="" placeholder='First Name'/>
                                        </div>
                                        <div className='input-div w-50'>
                                            <label htmlFor=""></label>
                                            <input className='w-100' type="text" name="" id="" placeholder='Last Name'/>
                                        </div>
                                    </div>
                                    <div className='input-div'>
                                        <label htmlFor=""></label>
                                        <input className='w-100' type="text" name="" id="" placeholder='Email'/>
                                    </div>
                                    <div className='input-div'>
                                        <label htmlFor=""></label>
                                        <input className='w-100' type="text" name="" id="" placeholder='Password'/>
                                        <i type='button' className="bi bi-eye" style={{position:'absolute', transform:"translate(-120%, 0)"}}></i>
                                    </div>
                                    <div className='input-div'>
                                        <label htmlFor=""></label>
                                        <input className='w-100' type="text" name="" id="" placeholder='Confirm password'/>
                                    </div>
                                </div>
                                <div className='mobile-button'>
                                    <button type='submit' className='btn btn-primary rounded-5'>Create Accoont</button>
                                    <div className='mobile-login'>
                                        <p className='text-end m-0' style={{fontSize:'0.85rem',fontWeight:'bold'}}> or, <a onClick={()=>{setFrom()}} style={{textDecoration:'none', color:'blue', cursor:'pointer'}}>{loginForm?"Create Account ":"Sign in"}</a></p>
                                    </div>
                                </div>
                                
                            </form>
                            :
                            <form action="">
                                <div className=''>
                                    <div className='input-div'>
                                        <label htmlFor=""></label>
                                        <input className='w-100' type="text" name="" id="" placeholder='Email'/>
                                    </div>
                                    <div className='input-div'>
                                        <label htmlFor=""></label>
                                        <input className='w-100' type="text" name="" id="" placeholder='Password'/>
                                        <i type='button' className="bi bi-eye" style={{position:'absolute', transform:"translate(-120%, 0)"}}></i>
                                    </div>
                                </div>
                                <div className='mobile-button'>
                                    <button type='submit' className='btn btn-primary rounded-5'>Sign in</button>
                                    <div className='mobile-login'>
                                        <p className='text-end m-0' style={{fontSize:'0.85rem',fontWeight:'bold'}}> or, <a onClick={()=>{setFrom()}} style={{textDecoration:'none', color:'blue', cursor:'pointer'}}>{loginForm?"Create Account ":"Sign in"}</a></p>
                                    </div>
                                </div>
                            </form>
                            }
                            <div className='mt-3'>
                                <div className='login-option'>
                                    <a href="">
                                        <img className='me-2' src="/assets/f_logo_RGB-Blue_1024.png" alt="" />
                                        <p className='m-0'>Sign up with Facebook</p>
                                    </a>
                                </div>
                                <div className='login-option'>
                                    <a href="">
                                        <img className='me-2' src="/assets/search.png" alt="" />
                                        <p className='m-0'>Sign up with Google</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='login-img'>
                            <p className='text-end' style={{fontSize:'0.85rem', fontWeight:'bold'}}>Already have an account? <a onClick={()=>{setFrom()}} style={{textDecoration:'none', color:'blue', cursor:'pointer', textAlign: loginForm?"left":null}}>{loginForm?"Create new for free":"Sign in"}</a></p>
                            <div className='text-center'>
                                <img style={{width:'100%'}} src="/assets/Group 3.png" alt="" />
                            </div>
                            <p className='m-0 text-center' style={{color:'grey', fontSize:'0.6rem'}} >By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
