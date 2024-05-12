import React from 'react'
import "./Products.css"

function ProductItem(props) {

    const {productDetails} = props
    const {category, description, id, image, price, rating, title} = productDetails
  return (
    
      <li className='product-item'>
          <img src={image} alt="productImage" border="0" className="product-image" />
          <div>
              <p className="product-name">{title.length > 24 ? `${title.slice(0,24)}...` : title}</p>
              <p className="product-title"><span style={{ textDecoration:"underline"}}>Sign in</span> or Create an account to see pricing <img className='love-image' src="https://i.ibb.co/pRsdBDn/heart.png" alt="heart" /></p>
          </div>
        </li>
    
  )
}

export default ProductItem

