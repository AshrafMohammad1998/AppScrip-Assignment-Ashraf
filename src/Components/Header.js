import "./Header.css"

function Header () {
    return(
        <div>
            <div className="nav-container">
                <div style={{display:"flex", alignItems:"center"}}>
                    <img src="https://i.ibb.co/m9WP1w0/solar-hamburger-menu-linear.png" alt="solar-hamburger-menu-linear" className="humberger-menu" />
                    <img src="https://i.ibb.co/P5Pkrh9/Logo.png" alt="Logo" className="nav-images" />
                </div>
                <h1 className="logo-name">LOGO</h1>
                <img src="https://i.ibb.co/B6pGtx7/Icons.png" alt="Icons" className="nav-search" />
                <img src="https://i.ibb.co/p3gfj9R/Iconss.png" alt="Iconss" className="nav-search-mobile" />
            </div>
            <hr className="header-hr-line" />
        </div>
    )
}

export default Header