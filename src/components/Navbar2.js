import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Affix } from 'rsuite';
import { BiChevronRight } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import SendBtn from './SendBtn';
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export default function Navbar2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Affix>
        <header className='full-pad'>
          <div className='header'>
            <div className='nav-new-line'>
              {/* --------------------------------start  offcanvas ------------------------- */}
              <button className='off-canvas-btn h-100 p-0' onClick={handleShow}>
                <HiBars3CenterLeft></HiBars3CenterLeft>
              </button>
              <Offcanvas show={show} onHide={handleClose} className="w-5">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body className='m-0 p-0'>
                  <nav class="canva">
                    <ul>
                      <li className='nav-item'><NavLink to="/" >Home</NavLink></li>
                      <li><NavLink to="/about" >About Us</NavLink></li>
                      <li><Link to="/products" >Product <span><FiChevronDown></FiChevronDown></span></Link>
                        <ul>
                          <li><Link to="/peanuts">Peanuts</Link></li>
                          <li><Link to='/green-gram' >Green Gram</Link></li>
                          <li><Link to="/black-gram" >Black Gram</Link></li>
                          <li><Link to="/wheat" >Wheat</Link></li>
                          <li><Link to="/wheat-flour" >Wheat Flour</Link>
                            {/* <ul>
                        <li><Link to="/FreshGinger">Fresh Ginger</Link></li>
                        <li><Link to="/FreshRedOnion">Fresh Red Onion</Link></li>
                      </ul> */}
                          </li>
                          <li><Link to="/chikpea" >Chikpea</Link></li>
                          <li><Link to="/chikpea-splits" >Chikpea Split</Link></li>
                          <li><Link to="/soybean" >Soy Bean</Link></li>
                          <li><Link to="/pegion-pea" >Pegion Pea</Link></li>
                          <li><Link to="/gram-flour" >Gram Flour</Link></li>
                          <li><Link to="/pearl-millet" >Pearl Millet</Link></li>

                        </ul>
                      </li>

                      <li><NavLink to="/contact" >Contact Us</NavLink></li>
                    </ul>
                  </nav>
                </Offcanvas.Body>
              </Offcanvas>
              {/* --------------------------------End offcanvas ------------------------- */}

              <Link to="/" class="logo">
                <img src={require('../img/logo.png')} alt="" />
              </Link>
            </div>

            <nav class="navbar nav ms-auto" data-spy="affix" data-offset-top="197">
              <ul className='m-0 p-0'>
                <li className=''><NavLink to="/" >home</NavLink></li>
                <li><NavLink to="/about" >about Us</NavLink></li>
                <li><Link to="/products" >Product <span><FiChevronDown></FiChevronDown></span></Link>
                  <ul>
                    <li><Link to="/peanuts">Peanuts</Link></li>
                    <li><Link to='/green-gram' >Green Gram</Link></li>
                    <li><Link to="/black-gram" >Black Gram</Link></li>
                    <li><Link to="/wheat" >Wheat</Link></li>
                    <li><Link to="/wheat-flour" >Wheat Flour</Link>
                      {/* <ul>
                        <li><Link to="/FreshGinger">Fresh Ginger</Link></li>
                        <li><Link to="/FreshRedOnion">Fresh Red Onion</Link></li>
                      </ul> */}
                    </li>
                    <li><Link to="/chikpea" >Chikpea</Link></li>
                    <li><Link to="/chikpea-splits" >Chikpea Split</Link></li>
                    <li><Link to="/soybean" >Soy Bean</Link></li>
                    <li><Link to="/pegion-pea" >Pegion Pea</Link></li>
                    <li><Link to="/gram-flour" >Gram Flour</Link></li>
                    <li><Link to="/pearl-millet" >Pearl Millet</Link></li>

                  </ul>
                </li>

                <li><NavLink to="/contact" >Contact Us</NavLink></li>

              </ul>
            </nav>

            <div className='dots-nav d-flex align-items-center mb-0'>
              <ul className='p-0'>
                <li><Link ><PiDotsThreeVerticalBold className='three-dot'></PiDotsThreeVerticalBold></Link>
                  <ul className='p-0'>
                    <li className=''>
                      <div>
                        <div className='mail-wrap m-0 p-0'>
                          <p className='d-flex'><span><MdOutlineMail className='fs-5'></MdOutlineMail></span>
                            <span>narsangoverseas01@gmail.com</span>
                          </p>
                        </div>
                        <div>
                          <FaMobileAlt className='fs-5'></FaMobileAlt> 0856679089
                        </div>
                        <SendBtn />
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </header>


      </Affix>
    </>
  )
}
