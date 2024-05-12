import "./Footer.css"

function Footer () {
    return(
        <div className="footer-main-container">
            <div className="footer-container">
                <div className="footer-subscibe-container">
                    <p className="footer-head-names">BE THE FIRST TO KNOW</p>
                    <p className="footer-para-names">Sign up for updates from mettā muse.</p>
                    <div style={{paddingTop:"30px"}}>
                        <input type="search" placeholder="Enter your e-mail..." className="subscribe-email-input" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
                <hr className="footer-hr-mobile" />
                <div className="footer-subscibe-contact-us">
                    <p className="footer-head-names">CONTACT US</p>
                    <p className="footer-para-names">+44 221 133 5360</p>
                    <p className="footer-para-names">customercare@mettamuse.com</p>
                    <p className="footer-head-names">Currency </p>
                    <p style={{display:"flex", alignItems:"center", gap:"1px"}}>
                    <img src="https://i.ibb.co/BwfbMTQ/United-States-of-America-US.png" alt="United-States-of-America-US" style={{marginRight: "5px"}}/>    
                    <img src="https://i.ibb.co/r58vjnc/Star-1.png" alt="Star-1" style={{marginRight: "5px"}}/>
                        USD
                    </p>
                    <p className="footer-para-names">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
            <hr style={{borderColor: "white", marginTop:"20px", marginBottom:"20px" }} />
            <div className="footer-container">
                <div className="footer-bottom-contact">
                    <p className="footer-head-names">mettā muse</p>
                    <ul className="footer-about-details">
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <hr className="footer-hr-mobile" />
                <div className="footer-bottom-contact">
                    <p className="footer-head-names">QUICK LINKS</p>
                    <ul className="footer-about-details">
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <hr className="footer-hr-mobile" />
                <div className="footer-bottom-contact">
                    <p className="footer-head-names">FOLLOW US</p>
                    <div>
                        <img src="https://i.ibb.co/fFYmJYd/Insta.png" alt="Insta" style={{marginRight:"10px"}}/>
                        <img src="https://i.ibb.co/QP01B1X/a.png" alt="a" />
                    </div>
                    <div>
                    <hr className="footer-hr-mobile" />
                    </div>
                    <p>mettā muse Accepts</p>
                    <div>
                        <img src="https://i.ibb.co/hg9HSHq/Group-136188.png" alt="Group-136188" style={{marginRight:"10px"}}/>
                        <img src="https://i.ibb.co/QHJ3D0S/Group-136190.png" alt="Group-136190" style={{marginRight:"10px"}} />
                        <img src="https://i.ibb.co/8jDfhby/Group-136192.png" alt="Group-136192" style={{marginRight:"10px"}} />
                        <img src="https://i.ibb.co/S5hj1ST/Group-136193.png" alt="Group-136193" style={{marginRight:"10px"}} />
                        <img src="https://i.ibb.co/3c9gZc1/Group-136194.png" alt="Group-136194" style={{marginRight:"10px"}} />
                        <img src="https://i.ibb.co/9thbXY3/Group-136195.png" alt="Group-136195" />
                        
                        
                        
                    </div>
                    
                </div>
                <hr className="footer-hr-mobile" />
            </div>
            <p style={{textAlign:"center", marginTop:"20px", marginBottom:"10px"}}> Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    )
}

export default Footer;