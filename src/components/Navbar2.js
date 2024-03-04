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
                      <li><Link to="/products">Products <span><FiChevronDown className=''></FiChevronDown></span></Link>
                        <ul>
                          <li><Link to="/inadianrice">Indian Rice<BiChevronRight></BiChevronRight></Link>
                            <ul>
                              <li><Link to="/basmatirice" >Basmati Rice</Link></li>
                              <li><Link to="/nonbasmatirice" >Non Basmati Rice</Link></li>
                            </ul>
                          </li>
                          <li><Link to='/grains'>Grains<BiChevronRight></BiChevronRight> </Link>
                            <ul>
                              <li><Link to="/greenmillet">Green Millet </Link></li>
                              <li><Link to="/yellowmaize">Yellow Maize </Link></li>
                              <li><Link to="/barly">Barly</Link></li>
                              <li><Link to="/sorgum">Sorgum </Link></li>
                              <li><Link to="/wheat">Wheat </Link></li>
                              <li><Link to="/sesameseeds">Sesame Seeds </Link></li>
                            </ul>
                          </li>
                          <li><Link to="/fodderseeds">Fodder Seeds<BiChevronRight></BiChevronRight></Link>
                            <ul>
                              <li><Link to="/alfalfagrassseeds">Alfalfa Grass Seeds </Link></li>
                              <li><Link to="/pipersudangrassseeds">Piper Sudan Grass Seeds </Link></li>
                            </ul>
                          </li>
                          <li><Link to="/freshfruits" >Fresh Fruits<BiChevronRight></BiChevronRight></Link>
                            <ul>
                              <li><Link to="/FreshPromegranate">Pomegrants </Link></li>
                            </ul>
                          </li>
                          <li><Link to="/freshvegetables" >Fresh Vegetables<BiChevronRight></BiChevronRight></Link>
                            <ul>
                              <li><Link to="/FreshGinger">Fresh Ginger</Link></li>
                              <li><Link to="/FreshRedOnion">Fresh Red Onion</Link></li>
                            </ul>
                          </li>
                          <li><Link to='/indianspices"'>Indian Spices<BiChevronRight></BiChevronRight></Link>
                            <ul>
                              <li><Link to="/AjwainSeeds">Ajwain Seeds </Link></li>
                              <li><Link to="/AselioSseds">Aselio Seeds </Link></li>
                              <li><Link to="/CorianderSeeds">Coriander Seeds </Link></li>
                              <li><Link to="/CuminSeeds">Cumin Seeds </Link></li>
                              <li><Link to="/FennelSeeds">Fennel seeds </Link></li>
                              <li><Link to="/BayLeaves">Bay Leaves </Link></li>
                              <li><Link to="/SennaLeaves">Senna Leaves  </Link></li>
                              <li><Link to="/RedChilliPowder">Red Chilli Powder </Link></li>
                              <li><Link to="/TurmericPowder">Termeric Powder </Link></li>
                            </ul>
                          </li>
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
                <li><Link to="/" >Product <span><FiChevronDown></FiChevronDown></span></Link>
                  <ul>
                    <li><Link to="">Indian Rice<BiChevronRight></BiChevronRight></Link>
                      <ul>
                        <li><Link to="/basmati" >Basmati Rice</Link></li>
                        <li><Link to="/nonbasmati" >Non Basmati Rice</Link></li>
                      </ul>
                    </li>
                    <li><Link to="" >Grains<BiChevronRight></BiChevronRight> </Link>
                      <ul>
                        <li><Link to="/greenmillet">Green Millet </Link></li>
                        <li><Link to="/yellowmaize">Yellow Maize </Link></li>
                        <li><Link to="/barly">Barly</Link></li>
                        <li><Link to="/sorgum">Sorgum </Link></li>
                        <li><Link to="/wheat">Wheat </Link></li>
                        <li className='sub-menu-btn'><Link>View All</Link></li>
                      </ul>
                    </li>
                    <li><Link to="" >Fodder Seeds<BiChevronRight></BiChevronRight></Link>
                      <ul>
                        <li><Link to="/alfalfagrassseeds">Alfalfa Grass Seeds </Link></li>
                        <li><Link to="/pipersudangrassseeds">Piper Sudan Grass Seeds </Link></li>
                      </ul>
                    </li>
                    <li><Link to="" >Fresh Fruits<BiChevronRight></BiChevronRight></Link>
                      <ul>
                        <li><Link to="/freshpomegrants">Pomegrants </Link></li>
                      </ul>
                    </li>
                    <li><Link to="" >Fresh Vegetables<BiChevronRight></BiChevronRight></Link>
                      <ul>
                        <li><Link to="/freshginger">Fresh Ginger</Link></li>
                        <li><Link to="freshredonion">Fresh Red Onion</Link></li>
                      </ul>
                    </li>
                    <li><Link to="" >Indian Spices<BiChevronRight></BiChevronRight></Link>
                      <ul>
                        <li><Link to="/ajwainseeds">Ajwain Seeds </Link></li>
                        <li><Link to="/aselioseeds">Aselio Seeds </Link></li>
                        <li><Link to="/corianderseeds">Coriander Seeds </Link></li>
                        <li><Link to="cuminseeds">Cumin Seeds </Link></li>
                        <li><Link to="/fennelseeds">Fennel seeds </Link></li>
                        <li><Link to="/FenugreekSeeds">Fenugreek Seeds </Link></li>
                        <li><Link to="/BayLeaves">Bay Leaves </Link></li>
                        <li><Link to="/SennaLeaves">Senna Leaves </Link></li>
                        <li><Link to="/RedChilliPowder">Red Chilli Powder </Link></li>
                        <li><Link to="/TurmericPowder">Turmeric Powder</Link></li>
                        {/* <li className='sub-menu-btn '><Link>View All</Link></li> */}
                      </ul>
                    </li>

                  </ul>
                </li>

                <li><NavLink to="/contact" >Contact Us</NavLink></li>

              </ul>
            </nav>

            <div className='dots-nav d-flex align-items-center mb-0'>
              <ul className='p-0'>
                <li><Link ><PiDotsThreeVerticalBold className='three-dot'></PiDotsThreeVerticalBold></Link>
                  <ul className='p-0'>
                    <li  className=''>
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
