import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./Components/Header.js"
import Products from "./Components/Products.js"
import Footer from "./Components/Footer.js"
import { Helmet } from 'react-helmet';

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([])

  // console.log(allProducts, "receive data")
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  }

  const fetchProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setAllProducts(data)

    } catch (error) {
        console.log("error while fetchting products", error)
    }
}

useEffect(() => {
    fetchProducts()
}, [])

  return (
    <div>

      <Helmet>
        <title>AppScrip-Assignment-Ashraf</title>
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor." />
        
      </Helmet>
      
      <div className="main-container">
        <Header />
        <ul className="names-of-headers">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        <div className="names-header-mobile">
          <p className="names-header-home-mobile">HOME</p>
          <p className="names-header-mobile">|</p>
          <p className="names-header-mobile">SHOP</p>
        </div>
        <hr className="header-hr" />
        <div className="head-content">
          <h1 className="discover-text">DISCOVER OUR PRODUCTS</h1>
          <p className="lorem-text">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>

        <hr />
        <div className="items-details">
          <div className="items-numbers">
            <h1 className="count-numbers">3425 ITEMS</h1>
            <p className="filter-button" onClick={toggleFilter}><img src="https://i.ibb.co/RBnV7k6/arrow-left.png" alt="arrow-left" border="0" />{isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</p>
          </div>
          <div>
            <select  className="recomenden-button">RECOMMENDED 
            
            <option >RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>PRICE : HIGH TO LOW</option>
              <option>PRICE : LOW TO HIGH</option>
            
              
            </select>
          </div>
        </div>
        
        <div className="items-details-mobile">
          <p className="recomenden-button">FILTER</p>
          <p>|</p>
          <select  className="recomenden-button">RECOMMENDED 
            <option >RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        
        <Products isFilterVisible={isFilterVisible} allProducts={allProducts} />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
