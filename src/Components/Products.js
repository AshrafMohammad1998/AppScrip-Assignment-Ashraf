import ProductItem from "./ProductItem.js"
import "./Products.css"

function Products (props) {

    const {allProducts} = props
    
    return(
        <div style={{display:"flex"}}>
            {props.isFilterVisible && <div>
                <div className="filter-container">
                    <input type="checkbox" id="custom-box" style={{marginTop:"5px",}} />
                    <label for="custom-box">CUSTOMIZABLE</label>
                </div>
                <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                        <p style={{color:"#BFC8CD", textDecoration:"underline"}}>Select All</p>
                        <div >
                            <input type="checkbox" id="custom-box" style={{marginTop:"5px",}} />
                            <label for="custom-box">MEN</label>
                            <br />
                            <input type="checkbox" id="custom-box" style={{marginTop:"5px",}} />
                            <label for="custom-box">WOMEN</label>
                            <br />
                            <input type="checkbox" id="custom-box" style={{marginTop:"5px",}} />
                            <label for="custom-box">BABY & KIDS</label>
                        </div>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                </div>
                <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                    <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                </div>
                <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                </div>
                <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                </div>
                <div>
                    <div className="filter-items-names">
                        <label className="filter-container">IDEAL FOR</label>
                        <img className="filter-arrows" src="https://i.ibb.co/Bfc3YPN/arrow-left.png" alt="arrow-left" border="0" />
                    </div>
                    <div className="all-option">
                        <p>All</p>
                    </div>
                    <div>
                    <hr style={{borderColor: "black", marginTop:"20px", marginBottom:"20px", width:"120%" }} />
                </div>
                </div>
                </div>
            </div>}
            
        
            <ul className="product-items">
                {allProducts.map((eachProduct, index) => (
                    <ProductItem key = {index} productDetails={eachProduct} />
                ))}
            </ul>

        </div>
        
    )
}

export default Products