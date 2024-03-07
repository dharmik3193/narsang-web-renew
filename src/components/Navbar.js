import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Affix } from 'rsuite';
import { BiChevronRight } from "react-icons/bi";

export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>

      <Affix>
        <header className='full-pad'>
          <div className='header'>

            <div className='d-flex align-items-center nav-new-line'>
              {/* --------------------------------start  offcanvas ------------------------- */}
              <button className='off-canvas-btn  ' onClick={handleShow}>
                <HiBars3CenterLeft className=''></HiBars3CenterLeft>
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

            <nav class="navbar nav" data-spy="affix" data-offset-top="197">
              <ul className='m-0'>
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

          </div>
        </header>
      </Affix>
    </>
  )
}
