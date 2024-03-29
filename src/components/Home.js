import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Gotoup from './Gotoup';
import Collapse from 'react-bootstrap/Collapse';

export default function Home() {

  const [isActive, setIsActive] = useState(false); // for accordian

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const Slide = [
    {
      img: require('../img/slider1.jpg'),
      alt: "First slide",
      p_1: "WELCOME TO",
      p_2: "NARSANG OVERSEAS",
      p_3: "We are leading suppliers of animal fodder seeds",
    },
    {
      img: require('../img/asset 3.jpeg'),
      alt: "Second slide",
      p_1: "NARSANG OVERSEAS",
      p_2: "Spices",
      p_3: "We are leading processor of spices in India"
    },
    {
      img: require('../img/asset 4.jpeg'),
      alt: "Third slide",
      p_1: "NARSANG OVERSEAS",
      p_2: "Fruits",
      p_3: "We are leading supplier of fruits in India"
    },
    {
      img: require('../img/asset 5.jpeg'),
      alt: "Fourth slide",
      p_1: "NARSANG OVERSEAS",
      p_2: "Rice",
      p_3: "We are trader of basmati & non basmati rice in India"
    }
  ]
  const Range_Product = [
    {
      img: require('../img/peanuts.jpg'),
      link: "/peanuts",
      name: "Peanuts"
    },
    {
      img: require('../img/green_gram.jpeg'),
      link: "/green-gram",
      name: "Green Gram"
    },
    {
      img: require('../img/black_gram.jpg'),
      link: "/black-gram",
      name: "Black Gram"
    },
    {
      img: require('../img/wheat.jpg'),
      link: "/wheat",
      name: "Wheat"
    }, {
      img: require('../img/wheat_flour.jpg'),
      link: "/wheat-flour",
      name: "Wheat Flour"
    },
    {
      img: require('../img/chickpea.jpg'),
      link: "/chikpea",
      name: "Chikpea"
    },
    {
      img: require('../img/chikpea_split.jpg'),
      link: "/chikpea-splits",
      name: "Chikpea Splits"
    },
    {
      img: require('../img/soybean.jpg'),
      link: "/soybean",
      name: "Soy Bean"
    }
  ]
  const Featured = [
    {
      f_name: "Fresh Pomegranate",
      f_link: "/FreshPromegranate",
      f_img: require('../img/14.jpeg')
    },
    {
      f_name: "Fresh Ginger",
      f_link: "/FreshGinger",
      f_img: require('../img/15.jpeg')
    },
    {
      f_name: "Fresh Red Onion",
      f_link: "/FreshRedOnion",
      f_img: require('../img/16.jpeg')
    },
    {
      f_name: "Red Chilli Powder",
      f_link: "/RedChilliPowder",
      f_img: require('../img/17.jpeg')
    },
    {
      f_name: "Termeric Powder",
      f_link: "/TurmericPowder",
      f_img: require('../img/18.jpeg')
    },
    {
      f_name: "Basmati Rice",
      f_link: "/basmatirice",
      f_img: require('../img/19.png')
    }
  ]

  return (

    <>

      <Navbar />
      <Gotoup />

      {/*---------------------------- Start Banner ----------------------- */}
      <div className='banner'>
        <Carousel activeIndex={index} onSelect={handleSelect} className='cut-corner' >
          {
            Slide.map((items) => (
              <Carousel.Item >
                <img className="d-block w-100" src={items.img} alt={items.alt} />

                <Carousel.Caption className='bg'>
                  <div className='cap-text caption-div'>
                    <p> {items.p_1} </p>
                    <p className='h p'> {items.p_2} </p>
                    <p className='p'> {items.p_3} </p>
                  </div>
                </Carousel.Caption>

              </Carousel.Item>
            ))
          }
        </Carousel>

        <div className='cross'>
          <div className=''></div>
        </div>
      </div>
      {/*---------------------------- End Banner ----------------------- */}

      {/*---------------------------- Start QUALITY SPEAKS FOR US! ----------------------- */}
      <section>
        <div className='spacer-speaks full-pad'>
          <div className='speake-title text-center'>
            <h1>QUALITY SPEAKS FOR US!</h1>
          </div>
          <div className='fonts-speacks'>
            <p className='pb-2'>Narsang Overseas has earned the trust and confidence of our global customers/buyers by providing best-in-class products, delivering it at the right time, round the clock and across the globe! We are into Export & Import of agricultural produce like Hulled Sesame Seeds, Spices, Rice, Food grains, Fruits & Vegetables and Animal Feed range worldwide. We focus on quality rather than quantity. For us, <b>“Quantity is not the criteria rather Quality is the parameter!”</b></p>

            <p>Narsang Overseas is a Government of India Recognized Merchant Cum Export House, having diversified business into areas of Agricultural Commodities, Food Grains, Rice, Fruits & Vegetables and Animal Feed. Since 2018, the group has been making progress in leaps and bounds for exporting products and commodities to even the far-reaching corners of the world. Every day, we create sustainable models of adhering to the best practices in the industry. We have always endeavoured to offer the best of the quality products in the International markets. A truly remarkable export track record has earned us several prestigious Customers. Narsang Overseas offers the best of Agricultural Commodities & Food Products. <br />
              <b className='fw-semibold'><Link to="/about" className='font-cyan text-decoration-none ps-2'>Read more...</Link></b>
            </p>

          </div>
        </div>
      </section>
      {/*---------------------------- End QUALITY SPEAKS FOR US! ----------------------- */}

      {/*---------------------------- Start Product Range ----------------------- */}
      <section className='range-sec full-pad'>
        <div>
          <div>
            <h1 className='font-cyan text-center prod-range'>Product <span className='text-black'>Range</span></h1>
          </div>

          <div className='range-section'>
            <div className="container">
              <div className="row justify-center">
                {
                  Range_Product.map((product) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col6 mb-15px ">
                      <div className=" justify-end-l">
                        <div className='range-div-w border'>
                          <div className='range-img-w div-hover' style={{ backgroundImage: `url(${product.img})` }} >
                            <div className="bg-blur"></div>
                            <div>
                              <Link to={product.link} className='sub-img'>
                                <img src={product.img} alt="" title={product.name} className='img-fluid' />
                              </Link>
                            </div>
                          </div>

                          <div className='range-font'>
                            <Link to={product.link} title={product.name}>{product.name}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='justify-center'>
            <Link to="/products">
              <input type="button" value='View All Products' className='view-all-btn bg-white font-cyan fw-semibold border' />
            </Link>
          </div>
        </div>
      </section>
      {/*---------------------------- End Product Range ----------------------- */}


      {/*---------------------------- Start Featured Products ----------------------- */}
      {/* <section className='featured-main'>
        <div className='container fruit-div'>
          <div>
            <h1 className='text-center feature-title'>Featured Products</h1>
          </div>
          <div className="">
            <div className="row d-flex justify-content-center">
              {
                Featured.map((items) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col6 mb-15px">
                    <div className='justify-end-l'>
                      <div className='f-div-w'>
                        <div className='img-w' style={{ backgroundImage: `url(${items.f_img})` }}>
                          <div className="bg-blur"></div>
                          <div>
                            <Link to={items.f_link} className='sub-img'>
                              <img src={items.f_img} alt="" className='img-fluid' />
                            </Link>
                          </div>
                          <div className='hover-blur'></div>
                        </div>
                        <div className='featured-font justify-center'>
                          <Link to={items.f_link} >{items.f_name}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section> */}
      {/*---------------------------- End Featured Products ----------------------- */}

      {/*---------------------------- Start Products Name ----------------------- */}
      <section className='container-fluid spacer-p-name full-pad '>

        <div className='border pname-div '>
          <div className='div-2 div:hover'>
            <h5>Products</h5>
          </div>
          <div className='product-text'>
            <ul className='row m-0 p-0'>
              <li><Link to="/grains" >Grains</Link><br /></li>
              <li><Link to="/legumes" >Legumes</Link></li>
              <li><Link to="/fabaceae" >Fabaceae</Link><br /></li>
              <li><Link to="/flour" >Flour</Link></li>
              <li><Link to="/splits" >Splits</Link><br /></li>
              <li><Link to="/indianspices" >Indian Spices</Link></li>
            </ul>
          </div>
        </div>

        {/* accordian */}
        <div className="accordion border accord-p">
          <div className="bottom-border align-center"
            onClick={() => setIsActive(!isActive)}
            aria-controls="example-collapse-text"
            aria-expanded={isActive}
          >
            <div><h1>Products</h1></div>
            <div className='arrow-plus'>{isActive ? '-' : '+'}</div>
          </div>
          <Collapse in={isActive}>
            <div className='font-black product-text px-3 py-2'>
              <Link to="/indianrices" >Indian Rices</Link><br />
              <Link to="/freshfruits" >Fresh Fruits</Link><br />
              <Link to="/grains" >Grains</Link><br />
              <Link to="/Freshvegetables" >Fresh Vegetables</Link><br />
              <Link to="/fodderseeds" >Fodder seeds</Link><br />
              <Link to="/indianspices" >Indian Spices</Link>
            </div>
          </Collapse>
        </div>

      </section>
      {/*---------------------------- End Products Name ----------------------- */}

      <Footer />

    </>
  )
}
