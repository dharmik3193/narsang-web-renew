import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'rsuite/dist/styles/rsuite-default.css';
import mediaQuery from './css/mediaQuery.css';
import css from './css/Style.css';
import aboutStyle from './css/aboutStyle.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import 'react-multi-carousel/lib/styles.css';
import Gotoup from './components/Gotoup';
import Footer from './components/Footer';
import Enquiry from './components/Enquiry';
// PRODUCT PAGE
import css2 from './css/style2.css';
import meadia2 from "./css/meadiaquery2.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Basmatirice from "./components/Basmatirice";
import Indianrice from "./components/Indianrice";
import Products1 from "./components/Products1";
import ImageMagnifier from './components/ImageMagnifier';

function App() {
  const data1 = [
    { maintitle : 'Indian Rice',
     title: 'Basmati Rice',
     width:'100%',
     widths:'700px',
     img:[require("./imgs/asset 2.png")]},
    
    {
     title: 'Non Basmati Rice',
     width:'100%',
     widths:'700px',
     img:[require("./imgs/asset 3.jpeg")]
    }
   ]
 
 const dataTwo = [
    {
      maintitle : 'Grains',
     title: 'Green Millet',
     widths:'400px',
     img:[require("./imgs/asset 42.jpeg")]
    },
    {
     title: 'Yellow Maize',
     widths:'400px',
     img:[require("./imgs/asset 43.jpeg")]

    },
    {
      title: 'Barley',
      widths:'400px',
      img:[require("./imgs/asset 44.jpeg")]
 
     },
     {
      title: 'Sorghum',
      widths:'400px',
      img:[require("./imgs/asset 45.jpeg")]
 
     },
     {
      title: 'Wheat',
      widths:'400px',
      img:[require("./imgs/asset 46.jpeg")]
 
     },
     {
      title: 'Sesame Seeds',
      widths:'500px',
      img:[require("./imgs/asset 47.jpeg")]
 
     },
   ]
   const data3 = [
    {
      maintitle : 'Fodder Seeds',
     title: 'Alfalfa Grass Seeds',
     widths:'400px',
     img:[require("./imgs/asset 48.jpeg")]
    },
    {
     title: 'Piper Sudan Grass Seeds',
     widths:'400px',
     img:[require("./imgs/asset 49.jpeg")]
    },
    
   ]
   const data4 = [
    {
      maintitle : 'Fresh Fruits',
     title: 'Fresh Pomegranate',
     widths:'400px',
     img:[require("./imgs/asset 50.jpeg")]
    }
   
    
   ]
   const data5 = [
    {
      maintitle : 'Fresh Vegetables',
     title: 'Fresh Ginger',
     widths:'500px',
     img:[require("./imgs/asset 51.jpeg")]
    },
    {
     title: 'Fresh Red Onion',
     widths:'400px',
     img:[require("./imgs/asset 52.jpeg")]

    },
    
   ]
   const data6 = [
    {
    maintitle : 'Indian Spices',
     title: 'Ajwain Seeds',
     widths:'600px',
     img:[require("./imgs/asset 15.jpeg")]
    },
    {
     title: 'Aselio Seeds',
     widths:'600px',
     img:[require("./imgs/asset 16.jpeg")]

    },
    {
      title: 'Coriander Seeds',
     widths:'600px',
      img:[require("./imgs/asset 17.jpeg")]
     },
     {
      title: 'Cumin Seeds',
     widths:'600px',
      img:[require("./imgs/asset 18.jpeg")]
     },
     {
      title: 'Fennel Seeds',
     widths:'600px',
      img:[require("./imgs/asset 19.jpeg")]
     },
     {
      title: 'Fenugreek Seeds',
     widths:'600px',
      img:[require("./imgs/asset 20.jpeg")]
     },
     {
      title: 'Bay Leaves',
     widths:'600px',
      img:[require("./imgs/asset 21.jpeg")]
     },
     {
      title: 'Senna Leaves',
     widths:'600px',
      img:[require("./imgs/asset 22.jpeg")]
     },
     {
      title: 'Red Chilli Powder',
     widths:'600px',
      img:[require("./imgs/asset 23.jpeg")]
     },
     {
      title: 'Turmeric Powder',
     widths:'600px',

      img:[require("./imgs/asset 24.jpeg")]
     },
    
   ]
   const dat = require("./imgs/basmati.png");
 
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <AboutUs/> } />
        <Route path="/contact" element={ <ContactUs/> } />        
        <Route path="/thanks" element={ <Enquiry/> } />     
      
      
      <Route path="/products" element={<Products1/>} />

      <Route path="/inadianrice" element={<Indianrice  pro='Indian Rice' props ={data1}/> } />
      <Route path="/grains" element={<Indianrice  title='Grains' props={dataTwo}/> } />
      <Route path="/fodderseeds" element={<Indianrice  title='Grains' props={data3}/> } />
      <Route path="/freshfruits" element={<Indianrice  title='Grains' props={data4}/> } />
      <Route path="/freshvegetables" element={<Indianrice  title='Grains' props={data5}/> } />
      <Route path="/indianspices" element={<Indianrice  title='Grains' props={data6}/> } />



{/* Single product */}


      <Route path="/peanuts"  exact={true} element={<Basmatirice title='Peanuts' titleline='/inadianrice' maintitle='Peanuts' img={require("./img/peanuts.jpg")}  width="100%" widths='700px'/>} />
      <Route path="/green-gram"  exact={true} element={<Basmatirice title='Green Gram' titleline='/inadianrice' maintitle='Green Gram' img={require("./img/green_gram.jpeg")}  width="100%" widths='700px'/>} />
      <Route path="/black-gram" element={<Basmatirice title='Black Gram' titleline='/grains' maintitle='Black Gram' img={require("./img/black_gram.jpg")} widths='400px'/>} />
      <Route path="/wheat" element={<Basmatirice title='Wheat' titleline='/grains'  maintitle='Grains' img={require("./img/wheat.jpg")} widths='400px'/>} />
      <Route path="/wheat-flour" element={<Basmatirice title='Wheat Flour' titleline='/grains' maintitle='Wheat Flour' img={require("./img/wheat_flour.jpg")} widths='400px'/>} />
      <Route path="/chikpea" element={<Basmatirice title='Chikpea' titleline='/grains'  maintitle='Chikpea' img={require("./img/chickpea.jpg")} widths='400px'/>} />
      <Route path="/chikpea-splits" element={<Basmatirice title='Chikpea Splits' titleline='/grains'  maintitle='Chikpea Splits' img={require("./img/chikpea_split.jpg")} widths='400px'/>} />
      <Route path="/soybean" element={<Basmatirice title='Soy Bean' titleline='/grains'  maintitle='Soy Bean' img={require("./img/soybean.jpg")} widths='500px'/>} />
      <Route path="/pegion-pea" element={<Basmatirice title='Pegion Pea' titleline='/fodderseeds'  maintitle='Pegion Pea' img={require("./img/pegion_pea.jpg")} widths='400px'/>} />
      <Route path="/gram-flour" element={<Basmatirice title='Gram Flour' titleline='/fodderseeds'  maintitle='Gram Flour' img={require("./img/gram_flour.webp")} widths='300px'/>} />
      <Route path="/pearl-millet" element={<Basmatirice title='Pearl Millet' titleline='/freshfruits' maintitle='Pearl Millet' img={require("./img/pearl_millet.jpg")} widths='300px'/>} />




      
      <Route path="/FreshGinger" element={<Basmatirice title='Fresh Ginger' titleline='/freshvegetables'  maintitle='Fresh Vegetables' img={require("./imgs/asset 51.jpeg")} widths='500px'/>} />
      <Route path="/FreshRedOnion" element={<Basmatirice title='Fresh Red Onion' titleline='/freshvegetables'  maintitle='Fresh Vegetables' img={require("./imgs/asset 52.jpeg")} widths='400px'/>} />

      <Route path="/AjwainSpeeds" element={<Basmatirice title='Ajwain Speeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 15.jpeg")} widths='500px'/>} />
      <Route path="/AselioSpeeds" element={<Basmatirice title='Aselio Speeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 16.jpeg")} widths='500px'/>} />
      <Route path="/CorianderSeeds" element={<Basmatirice title='Coriander Seeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 17.jpeg")} widths='500px'/>} />
      <Route path="/CuminSeeds" element={<Basmatirice title='Cumin Seeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 18.jpeg")} widths='500px'/>} />
      <Route path="/FennelSpeeds" element={<Basmatirice title='Fennel Speeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 19.jpeg")} widths='500px'/>} />
      <Route path="/FenugreekSeeds" element={<Basmatirice title='Fenugreek Seeds'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 20.jpeg")} widths='500px'/>} />
      <Route path="/BayLeaves" element={<Basmatirice title='Bay Leaves'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 21.jpeg")} widths='500px'/>} />
      <Route path="/SennaLeaves" element={<Basmatirice title='Senna Leaves'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 22.jpeg")} widths='500px'/>} />
      <Route path="/RedChilliPowder" element={<Basmatirice title='Red Chilli Powder'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 23.jpeg")} widths='500px'/>} />
      <Route path="/TurmericPowder" element={<Basmatirice title='Turmeric Powder'  maintitle='Indian Spices' titleline='/indianspices'  img={require("./imgs/asset 24.jpeg")} widths='500px'/>} />

      
      </Routes>
    </>
  );
}

export default App;
