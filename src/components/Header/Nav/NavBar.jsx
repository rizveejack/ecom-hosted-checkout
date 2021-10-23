import React from 'react'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="index.html" className="active" aria-label="Toggle navigation">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                        <ul className="sub-menu collapse" id="submenu-1-2">
                            <li className="nav-item"><a href="about-us.html">About Us</a></li>
                            <li className="nav-item"><a href="faq.html">Faq</a></li>
                            <li className="nav-item"><a href="login.html">Login</a></li>
                            <li className="nav-item"><a href="register.html">Register</a></li>
                            <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                            <li className="nav-item"><a href="404.html">404 Error</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Shop</a>
                        <ul className="sub-menu collapse" id="submenu-1-3">
                            <li className="nav-item"><a href="product-grids.html">Shop Grid</a></li>
                            <li className="nav-item"><a href="product-list.html">Shop List</a></li>
                            <li className="nav-item"><a href="product-details.html">shop Single</a></li>
                            <li className="nav-item"><a href="cart.html">Cart</a></li>
                            <li className="nav-item"><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                        <ul className="sub-menu collapse" id="submenu-1-4">
                            <li className="nav-item"><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                            </li>
                            <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                            <li className="nav-item"><a href="blog-single-sidebar.html">Blog Single
                                Sibebar</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="contact.html" aria-label="Toggle navigation">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar
