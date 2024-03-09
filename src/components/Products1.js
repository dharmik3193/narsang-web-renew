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
      titles: "Legumes",
      innerdata: [
        {
          link: "/peanuts",
          title: "Peanuts",
          img: [require("../img/peanuts.jpg")],
          t1: "Type : ",
          t2: "Use : ",
          t3: "Style : ",
          t4: "Cultivation Type : ",
          t5: "Shelf Life : ",
          tt1: "Peanuts With Shell",
          tt2: "Human Consumption",
          tt3: "Dried",
          tt4: "Organic",
          tt5: "1 year",

          // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/basmati-rice-1565251068-5017689.png")]
        },
        {
          link: "/soybean",
          title: "Soy Bean",
          img: [require("../img/soybean.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Extracted Beans",
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
      titles: "Fabaceae",
      innerdata: [
        {
          link: "/green-gram",
          title: "Green Gram",
          img: [require("../img/green_gram.jpeg")],
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
          link: "/black-gram",
          title: "Black Gram",
          img: [require("../img/black_gram.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Color : ",
          t4: "Cultivation : ",
          t5: "Place of Origin : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Black",
          tt4: "Organic",
          tt5: "India",
        },
        {
          link: "/chikpea",
          title: "Chikpea",
          img: [require("../img/chickpea.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Place of Origin : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Yellow",
          tt5: "India",
        },
        {
          link: "/pegion-pea",
          title: "Pegion Pea",
          img: [require("../img/pegion_pea.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Shelf Life : ",
          t5: "Color : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "1 Year",
          tt5: "Light Brown",
        },
      ],
    },
    {
      id: 1,
      titles: "Grains",
      innerdata: [
        {
          link: "/wheat",
          title: "Wheat",
          img: [require("../img/wheat.jpg")],
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
          link: "/pearl-millet",
          title: "Pearl Millet",
          img: [require("../img/pearl_millet.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Dried",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Light Green",
          tt5: "99%",

          // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/non-basmati-rice-1565251084-5017703.jpeg")]
        },
      ],
    },
    {
      id: 1,
      titles: "Flour",
      innerdata: [
        {
          link: "/wheat-flour",
          title: "Wheat Flour",
          img: [require("../img/wheat_flour.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Powderized",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "White",
          tt5: "100%",
        },
        {
          link: "/gram-flour",
          title: "Gram Flour",
          img: [require("../img/gram_flour.webp")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Powderized",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Light Yellow",
          tt5: "100%",

          // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/non-basmati-rice-1565251084-5017703.jpeg")]
        },
      ],
    },
    {
      id: 1,
      titles: "Splits",
      innerdata: [
        {
          link: "/chikpea-splits",
          title: "Chikpea Splits",
          img: [require("../img/chikpea_split.jpg")],
          t1: "Type : ",
          t2: "Style : ",
          t3: "Cultivation Type : ",
          t4: "Color : ",
          t5: "Purity : ",
          tt1: "Materialized",
          tt2: "Natural",
          tt3: "Organic",
          tt4: "Yellow",
          tt5: "99%",
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
                  <Link to={user.link} title={user.title}>
                    <div className="main-single-product">
                      <div className="single-product">
                        <div
                          className="back-img"
                          style={{ background: `url(${user.img})` }}
                        >
                          <div className="bluer-back-img"></div>
                          <img className="product-img" src={user.img} alt={user.title} />
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
