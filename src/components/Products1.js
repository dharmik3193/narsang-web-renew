import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from "./Navbar";
import Gotoup from "./Gotoup";
// import { Footer } from "rsuite";
import Footer from "./Footer";
import Top_Line from "./Top_Line";

export default function Products1() {
  const data = [
    {
      id: 1,
      titles: "Indian Rice",
      innerdata: [
        {
          link: "/basmatirice",
          title: "Basmati Rice",
          img: [require("../imgs/basmati.png")],
          t1: "Type : ",
          t2: "Use : ",
          t3: "Style : ",
          t4: "Cultivation Type : ",
          t5: "Shelf Life : ",
          tt1: "Basmati",
          tt2: "Human Consumption",
          tt3: "Dried",
          tt4: "Organic",
          tt5: "1 year",

          // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/basmati-rice-1565251068-5017689.png")]
        },
        {
          link: "/nonbasmatirice",
          title: "Non Basmati Rice",
          img: [require("../imgs/nonbasmati.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Non Basmati",
          tt2: "Dried",
          tt3: "Organic",
          tt4: "1 year",
          tt5: "White",

          // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/non-basmati-rice-1565251084-5017703.jpeg")]
        },
      ],
    },
    {
      id: 2,
      titles: "Grains",
      innerdata: [
        {
          link: "/greenmillet",
          title: "Green Millet",
          img: [require("../imgs/asset 42.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 year",
          tt5: "Green",
        },
        {
          link: "/yellowmaize",
          title: "Yellow Maize",
          img: [require("../imgs/yellow.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Color : ",
          t4: "Cultivation : ",
          t5: "Place of Origin : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Yellow",
          tt4: "Organic",
          tt5: "India",
        },
        {
          link: "/barley",
          title: "Barley",
          img: [require("../imgs/asset 44.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Drying Process : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Brown",
          tt5: "Sun Dry",
        },
        {
          link: "/sorghum",
          title: "Sorghum",
          img: [require("../imgs/sorghum.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Year",
          tt5: "Brown",
        },
        {
          link: "/wheat",
          title: "Wheat",
          img: [require("../imgs/asset 46.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Brown",
          tt5: "99%",
        },
        {
          link: "/sesameseeds",
          title: "Sesame Seeds",
          img: [require("../imgs/asset 47.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Year",
          tt5: "White",
        },
      ],
    },
    {
      id: 3,
      titles: "Fodder Seeds",
      innerdata: [
        {
          link: "/AlfalfaGrassSeeds",
          title: "Alfalfa GrassSeeds",
          img: [require("../imgs/asset 48.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Shelf Life : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "1 Year",
          tt4: "Brown",
          tt5: "99.9%",
        },
        {
          link: "/PiperSudanGrassSeeds",
          title: "Piper Sudan Grass Seeds",
          img: [require("../imgs/asset 49.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Year",
          tt5: "Red",
        },
      ],
    },
    {
      id: 4,
      titles: "Fresh Fruits",
      innerdata: [
        {
          link: "/FreshPromegranate",
          title: "Fresh Promegranate",
          img: [require("../imgs/asset 50.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Maturity : ",
          tt1: "Fresh",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Month",
          tt5: "100%",
        },
      ],
    },
    {
      id: 5,
      titles: "Fresh Vegetables",
      innerdata: [
        {
          link: "/FreshGinger",
          title: "Fresh Ginger",
          img: [require("../imgs/asset 51.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Fresh",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Month",
          tt5: "Brown",
        },
        {
          link: "/FreshRedOnion",
          title: "Fresh Red Onion",
          img: [require("../imgs/asset 52.jpeg")],
          t1: "Type : ",
          t2: "Shape : ",
          t3: "Use : ",
          t4: "Style : ",
          t5: "Cultivation Type : ",
          tt1: "Fresh",
          tt2: "Oval,Round",
          tt3: "Human Consumption",
          tt4: "Natural",
          tt5: "Organic",
        },
      ],
    },
  ];
  const data2 = [
    {
      id: 1,
      titles: "Indian Spices",
      innerdata: [
        {
          link: "/AjwainSpeeds",
          title: "Ajwain Speeds",
          img: [require("../imgs/ajwain.jpeg")],
          t1: "Type : ",
          t2: "Grade : ",
          t3: "Color : ",
          t4: "Processing Type : ",
          t5: "Purity : ",
          tt1: "Dried",
          tt2: "Food Grade",
          tt3: "Brown",
          tt4: "Raw",
          tt5: "100%",
        },
        {
          link: "/AselioSpeeds",
          title: "Aselio Speeds",
          img: [require("../imgs/aselio.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Purity : ",
          t5: "Moisture : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "100%",
          tt5: "12%",
        },
        {
          link: "/CorianderSeeds",
          title: "Coriander Seeds",
          img: [require("../imgs/cori.jpeg")],
          t1: "Type : ",
          t2: "Style  : ",
          t3: "Cultivation Type: ",
          t4: "Shelf Life : ",
          t5: "Drying Process : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Year",
          tt5: "Sun Dried",
        },
        {
          link: "/CuminSeeds",
          title: "Cumin Seeds",
          img: [require("../imgs/cumin.jpeg")],
          t1: "Type : ",
          t2: "Use: ",
          t3: "Style  : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Cooking",
          tt3: "Natural",
          tt4: "1 Year",
          tt5: "Brown",
        },
        {
          link: "/FennelSpeeds",
          title: "Fennel Speeds",
          img: [require("../imgs/fennel.jpeg")],
          t1: "Type : ",
          t2: "Shelf Life  : ",
          t3: "Grade : ",
          t4: "Color : ",
          t5: "Drying Process : ",
          tt1: "Dried",
          tt2: "12 Months",
          tt3: "Food Grade",
          tt4: "Green",
          tt5: "Sun Drying",
        },
        {
          link: "/FenugreekSeeds",
          title: "Fenugreek Seeds",
          img: [require("../imgs/fenu.jpeg")],
          t1: "Type : ",
          t2: "Use  : ",
          t3: "Style : ",
          t4: "Cultivation Type : ",
          t5: "Shelf Life : ",
          tt1: "Dried",
          tt2: "Cooking,Medicinal",
          tt3: "Natural",
          tt4: "Organic",
          tt5: "1 Year",
        },
        {
          link: "/BayLeaves",
          title: "Bay Leaves",
          img: [require("../imgs/bay.jpeg")],
          t1: "Type : ",
          t2: "Style  : ",
          t3: "Shelf Life : ",
          t4: "Grade : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "1 Month",
          tt4: "Food Grade",
          tt5: "Green",
        },
        {
          link: "/SennaLeaves",
          title: "Senna Leaves",
          img: [require("../imgs/senna.jpeg")],
          t1: "Type : ",
          t2: "Cultivation Type : ",
          t3: "Shelf Life : ",
          t4: "Grade : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Organic",
          tt3: "1 Month",
          tt4: "Food Grade",
          tt5: "Green",
        },
        {
          link: "/RedChilliPowder",
          title: "Red Chilli Powder",
          img: [require("../imgs/red.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Shelf Life : ",
          t4: "Color : ",
          t5: "Form : ",
          tt1: "Pure",
          tt2: "Dried",
          tt3: "1 Year",
          tt4: "Red",
          tt5: "Powder",
        },
        {
          link: "/TurmericPowder",
          title: "Turmeric Powder",
          img: [require("../imgs/turmeric.jpeg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Shelf Life : ",
          t4: "Color : ",
          t5: "Form : ",
          tt1: "Pure",
          tt2: "Dried",
          tt3: "1 Year",
          tt4: "Yellow",
          tt5: "Powder",
        },
      ],
    },
  ];
  return (
    <>
      {/* Header */}
      {/* <Top_Line /> */}
      <Navbar />
      <Gotoup />
      <section>
        <div className="bg-img">
          <div className="container main-head">
            <div className="row p-0 head-product d-flex justify-content-space-between align-items-center">
              <div className="col-md-8 col-sm-4 col-xs-12 col-head">
                <h1 className="h1">Products</h1>
              </div>
              <div className="col-md-4 col-sm-8 col-xs-12 text-sm-end first-text-product">
                <Link to="/">Home</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                Products
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div id="products-body">
          {/* Indian Rice */}

          {data.map((item, index) => (
            <div className="row indian" key={index} id="indian">
              <div className="col-12 ps-3">
                <Link
                  to="/indianrice"
                  title="Indian Rice"
                  className="title-product"
                >
                  <p className="title-text-product">{item.titles}</p>
                </Link>
              </div>

              {item.innerdata.map((user, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col main-col"
                >
                  <Link to={user.link} title="Grains">
                    <div className="main-single-product">
                      <div className="single-product">
                        <div
                          className="back-img"
                          style={{ background: `url(${user.img})` }}
                        >
                          <div className="bluer-back-img"></div>
                          <img className="product-img" src={user.img} alt="" />
                        </div>

                        <p className="text-product pb-2">{user.title}</p>
                        <div className="card-body1">
                          <div className="card-title">
                            <h6 className="product-title-back">
                              <b>{user.title}</b>{" "}
                            </h6>
                            <div className="secound-back-body">
                              <p>
                                {" "}
                                <b>{user.t1}</b>
                                {user.tt1}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t2}</b>
                                {user.tt2}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t3}</b>
                                {user.tt3}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t4}</b>
                                {user.tt4}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t5}</b>
                                {user.tt5}
                              </p>
                              <div className="btns">
                                <Link to="/">
                                  <div className="btn btn1">Enquiry Now</div>
                                </Link>
                                <div className="btn btn2">View More</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}

          {data2.map((item, index) => (
            <div className="row indian" key={index}>
              <div className="col-12 ps-3">
                <Link
                  to="/indianrice"
                  title="Indian Rice"
                  className="title-product"
                >
                  <p className="title-text-product">{item.titles}</p>
                </Link>
              </div>

              <div className="row pe-0" id="indian">
                <div className="col-12 pb-4 pe-0">
                  <p className="pre text-justify ps-0 pt-0">
                    The distinctiveness of quality of Indian spices remains
                    gloriously un-replicated. India is heaven of exotic spices
                    and has attracted countries of the globe for centuries and
                    even wars have been fought for them. India coveted position
                    in the world of quality spices still stands unchallenged.
                    Other countries have tried to replicate Indian spices; even
                    though they could produce spices, the distinctness of
                    quality of Indian spices remains gloriously un-replicated.
                    Narsang Overseas manufacture and export wide range of Ground &
                    Whole Spices.
                  </p>
                </div>
              </div>
              {item.innerdata.map((user, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col main-col"
                >
                  <Link to={user.link} title="Grains">
                    <div className="main-single-product">
                      <div className="single-product">
                        <div
                          className="back-img"
                          style={{ background: `url(${user.img})` }}
                        >
                          <div className="bluer-back-img"></div>
                          <img className="product-img" src={user.img} alt="" />
                        </div>

                        <p className="text-product pb-2">{user.title}</p>
                        <div className="card-body1">
                          <div className="card-title">
                            <h6 className="product-title-back">
                              <b>{user.title}</b>{" "}
                            </h6>
                            <div className="secound-back-body">
                              <p>
                                {" "}
                                <b>{user.t1}</b>
                                {user.tt1}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t2}</b>
                                {user.tt2}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t3}</b>
                                {user.tt3}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t4}</b>
                                {user.tt4}
                              </p>
                              <p>
                                {" "}
                                <b>{user.t5}</b>
                                {user.tt5}
                              </p>
                              <div className="btns">
                                <Link to="/">
                                  <div className="btn btn1">Enquiry Now</div>
                                </Link>
                                <div className="btn btn2">View More</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer/> */}
      <Footer />
    </>
  );
}
