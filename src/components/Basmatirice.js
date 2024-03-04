
import { useCallback, useEffect, useRef, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css2 from "../css/style2.css";
import meadia2 from "../css/meadiaquery2.css";
import { useLocation } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from "./Navbar";
import Gotoup from "./Gotoup";
// import { Footer } from "rsuite";
import Footer from './Footer'

export default function Basmatirice(props) {

// Image magnify start---------------------

const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });


useEffect(() => {

const handleMouseMove = (e) => {
console.clear()
    const { clientX, clientY,offsetX,offsetY } = e;
    const { left, top,right,bottom} = e.target.getBoundingClientRect();
    setBoxPosition({ x: e.clientX-left-50,y: e.clientY-top-50});
    const magnifier = document.getElementById('second2');

    const xPos = - clientX + left + magnifier.clientWidth/8;
    const yPos = -clientY + top + magnifier.clientHeight/8;
    
    magnifier.style.transform = `translate(${xPos}px, ${yPos}px)`;
};

    let first = document.getElementById('first');
    let lens = document.getElementById('lens');

    first.addEventListener('mousemove',handleMouseMove);
}, []);

// Image magnify End---------------------

  const slider = [
    { 
    link : '/basmatirice',
     title: 'Basmati Rice',
     width: '100%',
     img:[require("../imgs/asset 2.png")]},
    {
    link : '/nonbasmatirice',
     title: 'Non Basmati Rice',
     width: '100%',
     img:[require("../imgs/asset 3.jpeg")]
    },
    {
      link : '/greenmillet',
      title: 'Green Millet',
      img:[require("../imgs/asset 42.jpeg")]
     },
     {
      link : '/yellowmaize',
      title: 'Yellow Maize',
      img:[require("../imgs/asset 43.jpeg")]
     },
      {
      link : '/barley',
      title: 'Barley',
      img:[require("../imgs/asset 44.jpeg")]
     },
     {
      link : '/sorghum',
      title: 'Sorghum',
      img:[require("../imgs/asset 45.jpeg")]
     },
     {
      link : '/wheat',
      title: 'Wheat',
      img:[require("../imgs/asset 46.jpeg")]
     },
     {
      link : '/sesameseeds',
      title: 'Sesame Seeds',
      img:[require("../imgs/asset 47.jpeg")]
     },
     {
      link : '/AlfalfaGrassSeeds',
      title: 'Alfalfa GrassSeeds',
      img:[require("../imgs/asset 48.jpeg")]
     },
     {
      link : '/PiperSudanGrassSeeds',
      title: 'Piper Sudan Grass Seeds',
      img:[require("../imgs/asset 49.jpeg")]
     },
     {
      link : '/FreshPromegranate',
      title: 'Fresh Promegranate',
      img:[require("../imgs/asset 50.jpeg")]
     },{
      link : '/FreshGinger',
      title: 'Fresh Ginger',
      img:[require("../imgs/asset 51.jpeg")]
     },{
      link : '/FreshRedOnion',
      title: 'Fresh Red Onion',
      img:[require("../imgs/asset 52.jpeg")]
     },{
      link : '/AjwainSpeeds',
      title: 'Ajwain Speeds',
      img:[require("../imgs/asset 15.jpeg")]
     },
     {
      link : '/AselioSpeeds',
      title: 'Aselio Speeds',
      img:[require("../imgs/asset 16.jpeg")]
     },{
      link : '/CorianderSeeds',
      title: 'Coriander Seeds',
      img:[require("../imgs/asset 17.jpeg")]
     },{
      link : '/CuminSeeds',
      title: 'Cumin Seeds',
      img:[require("../imgs/asset 18.jpeg")]
     },
     {
      link : '/FennelSpeeds',
      title: 'Fennel Speeds',
      img:[require("../imgs/asset 19.jpeg")]
     },{
      link : '/FenugreekSeeds',
      title: 'Fenugreek Seeds',
      img:[require("../imgs/asset 20.jpeg")]
     },{
      link : '/BayLeaves',
      title: 'Bay Leaves',
      img:[require("../imgs/asset 21.jpeg")]
     },{
      link : '/SennaLeaves',
      title: 'Senna Leaves',
      img:[require("../imgs/asset 22.jpeg")]
     },{
      link : '/RedChilliPowder',
      title: 'Red Chilli Powder',
      img:[require("../imgs/asset 23.jpeg")]
     },{
      link : '/TurmericPowder',
      title: 'Turmeric Powder',
      img:[require("../imgs/asset 24.jpeg")]
     },
   ]

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [error, seterror] = useState("");

  const Validation = (e) => {
    e.preventDefault();

    if (name.length == 0) {
      console.log("hellow");
      seterror("Please Enter the name");
    } else {
      seterror("");
    }

    if (email.length == 0) {
      console.log("hellow");
      seterror("Please Enter the email");
    } else {
      seterror("");
    }
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1450 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1043},
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1043, min: 761 },
      items: 3,
    },
    table: {
      breakpoint: { max: 761, min: 500},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* Header */}
      <Navbar/>
      <Gotoup/>
      <section>
        <div className="bg-img" id="bas">
          <div className="container main-head">
            <div className="row head-product d-flex justify-content-space-between align-items-center">
              <div className="col-sm-6 col-xs-12">
                <h1 className="h1">{props.title}</h1>
              </div>
              <div className="col-sm-6 col-xs-12 text-sm-end first-text-product  first-text-product2 ps-0">
                <Link to="/">Home</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to="/"> Products</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to= {props.titleline}> {props.maintitle}</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <span className="link-disgn link-disgn3">{props.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basmati rice  */}

      {/* <img id="zoom_01" src={require("../imgs/basmati.png")} data-zoom-image={require("../imgs/basmatilarge.png")}/> */}

      <div className="container"> 
        <div className="main-basmati-box mt-4">
          <div className="row row-box">
            <div className="col basmti-main-img">
            <div className="zoom-gallery">
            <div className="zoom-box" style={{width:props.width}}>
  
           
{/* imagemagnify start */}
      <div   id="first" className='boxx'>
      <img id='img-first' src={props.img} style={{width:props.width}} alt="" />
        <div id="lens" style={{
        position: 'absolute',
        top: boxPosition.y,
        left: boxPosition.x,
      }}></div>
      </div>
      <div id="second-img" className='boxx'>
      <img  id="second2"
       src={props.img}  alt=""
       style={{width:props.widths}}
       />
       </div>
        
            </div>
            </div>

            </div>
            <div className="col main-basmti-body">
              <div className="basmati-body">
                <p className="fn-26 mb-0 fc-black title-box1">{props.title}</p>
                <div className="brbtn">Get Bebst Price</div>
                <div className="fs-14">
                  <span className="gray-text">MOQ : </span>
                  <b className="fc-black">24 Ton</b>
                  <table className="mt-3 main-table" id="first-tbl">
                    <tbody>
                      <tr className="tb">
                        <td className="gray-text">Business Type </td>
                        <td>
                          <b>Manufacturer</b>
                        </td>
                      </tr>
                      <tr className="tb">
                        <td className="gray-text">Type </td>
                        <td>
                          <b>{props.title}</b>
                        </td>
                      </tr>
                      <tr className="tb">
                        <td className="gray-text">Use </td>
                        <td>
                          <b>Human Consumption</b>
                        </td>
                      </tr>
                      <tr className="tb">
                        <td className="gray-text">Style </td>
                        <td>
                          <b>Dried</b>
                        </td>
                      </tr>
                      <tr className="tb link-view-more ">
                        <td colSpan={2}>
                          <Link className="link" data-bs-target="#basmati-table">
                            Click to view more
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-red">Preferred Buyer From</p>
                <table className="w-100 mt-0">
                  <tbody>
                    <tr className="tb">
                      <td className="gray-text">Location :</td>
                      <td>
                        <b>Worldwide</b>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="row" id="basmati-btn">
                  <div className=" col second-btn p-0 ">
                    <div
                      id="box-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="brbtn1"> REQUEST TO CALL </div>
                    </div>
                  </div>
                  <div className="col second-btn p-0">
                  <div
                      id="box-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                    <div className="brbtn2">SEND ENQUIRY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Basmati rice table */}

      <div id="basmati-table">
        <div className="container">
          <div className="main-basmati-box">
            <div className="row table-box" >
              <div className="col-12 main-line-text">
                <p>Product Details</p>
              </div>
              <div className="box-body-table">
                <div className="row table-box-line">
                  <div className="col main-line">
                    <div className="single-line">
                      <div className="gray-text">Cultivation Type</div>
                      <b> Organic</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Color</div>
                      <b> White</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Broken</div>
                      <b> 5/10/25/50/100%</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Packaging Details</div>
                      <b> 25/50 Kg in PP Bag</b>
                    </div>
                  </div>
                  <div className="col main-line">
                    <div className="single-line">
                      <div className="gray-text">Shelf Life</div>
                      <b> 1 Year</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Speciality</div>
                      <b> Gluten Free, High In Protein</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Sortex</div>
                      <b> 100%</b>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="col-12 pre pt-3 table-pre">
                    For nearly half the world’s population, rice is life. Rice
                    provides one of the main sources of calories for billions of
                    people. It is a staple, a comfort food, a side dish and a
                    main meal. It’s also a highly nutritious component of a
                    healthy diet, if you choose the right source.
                  </p>

                  <div className="col-12 pt-2">
                    <strong>Range:</strong>
                    <p className="table-pre">
                      1For nearly half the world’s population, rice is life.
                      Rice provides one of the main sources of calories for
                      billions of people. It is a staple, a comfort food, a side
                      dish and a main meal. It’s also a highly nutritious
                      component of a healthy diet, if you choose the right
                      source.
                    </p>
                  </div>
                  <div className="col-12">
                    <strong>Range: </strong>
                    <ul className="main-line">
                      <li>1121</li>
                      <li>Pusa</li>
                      <li>Sugandha</li>
                      <li>Raw</li>
                      <li>Steam</li>
                      <li>Boiled</li>
                      <li>Traditional121</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}

              <div
                id="basmati-btn-last"
                className="col-12 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <div className="brbtn2">Yes! i am interested</div>
              </div>

              {/* <!-- Modal --> */}
              <div className="row" id="inner-form-full">
                <div className="col-12">
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog ">
                      <div className="modal-content">
                        <div className="modal-body">
                        <div className="scoll-tree">
                          <div className="row" id="inner-box-form">
                          
                            <div className="col col-form-img">
                              <div className="back-img back-img-box" style={{background:`url(${props.img})`}}>
                                <div className="bluer-back-img "></div>
                                <img
                                  className="product-img product-2"
                                  src={props.img}
                                  alt=""
                                />
                                <p className="title-interested">
                                  {props.title}
                                </p>
                              </div>
                              <div className='text-inner-form'>
                      
                                <p className="text-gray pt-2 m-0">
                                  <b className="">Preferred Buyer From</b>
                                </p>
                                <p className="text-gray mt-0 m-0">
                                  <span> Location :</span><span className="text-gray "> Worldwide</span>
                                </p>
                              </div>
                            </div>
                            <div className="col col-form">
                              <p className="title-interested2">
                                <b>Get a Quick Quote</b>
                              </p>
                              
                              <form onSubmit={Validation}>
                              <div id="inner-forn" className="inner-form">
                              <div className="row form-row">
                <div className="col-12 col form-box">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Name </label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Email</label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Mobile No.</label>
                    </div>
                    <div className="input-main-name mobail-box">

                    <PhoneInput  className="icon-flag" country={'in'} />
                     <input
                        className="inpute-name-box1 number-box"
                        type="text"
                        placeholder="Enter Mobail no."
                        required
                      />
                     
                    </div>
                  </div>
                </div>
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 gray-text">
                      <label className="name">Quantity</label>
                    </div>
                    <div className="input-main-name d-flex">
                      <input
                        className="inpute-name-box1 mr-3"
                        type="name"
                        placeholder="Estimated Quantity"
                        required
                      />
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Ton"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row form-row-radio m-0">
                <div className="col-12 col col-radio p-0">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 textarea-box-text">
                      <label className="name">Purpose of Requirement</label>
                    </div>
                    <div className="input-main-name input-main-name-radio">
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Reselling</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">End Use</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Raw Material</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 textarea-box-text">
                      <label className="name">Requirement Details</label>
                    </div>
                    <div className="input-main-name">
                      <textarea
                        className="inpute-name-box1 textarea-box"
                        placeholder="I am interested. Kindly send the quotation for the same."
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row" id="inner-btn-enquiry">
                <div className="col-sm-12">
                  <div id="box-btn">
                    <div className="box-btn">Send Enquiry</div>
                  </div>
                </div>
              </div>
                              </div>
                               
                              </form>
                            </div>
                          </div>
                          </div>
                        </div>
                        <button type="button" class="btn-close  btn-close-model" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    </div>
                  </div>
                </div>
             

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lookin for basmati rice */}

      <div className="container">
        <div className="main-basmati-box" id="lookingfor">
          <div className="lookin-box">
            <div className="row">
              <div className="col-12 pt-3 text-center lookin-box-text">
                <h2>
                  Looking for"
                  <span className="inner-text">
                    <b>{props.title}</b>
                  </span>
                  "?
                </h2>
              </div>
              <div className="row form-row">
                <div className="col form-box">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Name </label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Email</label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Mobile No.</label>
                    </div>
                    <div className="input-main-name mobail-box">
                     <PhoneInput  className="icon-flag" country={'in'} />
                     <input
                        className="inpute-name-box1 number-box"
                        type="text"
                        placeholder="Enter Mobail no."
                        required
                      />
                  
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 gray-text">
                      <label className="name">Quantity</label>
                    </div>
                    <div className="input-main-name d-flex">
                      <input
                        className="inpute-name-box1 mr-3"
                        type="name"
                        placeholder="Estimated Quantity"
                        required
                      />
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Ton"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row form-row-radio">
                <div className="col col-radio">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1  textarea-box-text">
                      <label className="name">Purpose of Requirement</label>
                    </div>
                    <div className="input-main-name input-main-name-radio">
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Reselling</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">End Use</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Raw Material</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 textarea-box-text">
                      <label className="name">Requirement Details</label>
                    </div>
                    <div className="input-main-name">
                      <textarea
                        className="inpute-name-box1 textarea-box"
                        placeholder="I am interested. Kindly send the quotation for the same."
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-sm-12">
                  <div id="box-btn">
                    <div className="box-btn">Send Enquiry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exprore More Products */}
      <div className="container">
        <div className="main-basmati-box hidden">
          <div className="row ">
            <div className="col-12 pt-3 text-center title-slide">
              <h2>Explore More Products</h2>
            </div>
          </div>

          <div className="row main-slider mt-4 mb-3">
            <div className="second-row-slider">
              <Carousel responsive={responsive}>
        {
          slider.map((user)=>(
            <div className="col-12 col-slider w-100 mb-5">
                  <Link
                    to= {user.link}
                    title="Grains"
                    className="slider-link"
                  >
                    <div className="single-product-slider ">
                      <div className="back-img-slider hidden">
                        <img
                          className="product-2"
                          src={user.img}
                          alt=""
                        />
                      </div>
                      <div id="basmati-btn-last-slider">
                        <b className="silder-text text-center">{user.title}</b>
                        <div className="brbtn2 btn-slider mt-3">
                          {" "}
                          Get Best Quote{" "}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
          ))
        }
               
              </Carousel>
            </div>
          </div>
        </div>
      </div>
  <div className="row"  id="last-button">
      <div id="basmati-btn-last"  className="col-12 mb-0 bottom-btn" data-bs-toggle="modal"  data-bs-target="#exampleModal" >
              <div className="brbtn2">Send Enquity</div>
       </div>
   </div>
   <Footer/>
    </>
  );
}
