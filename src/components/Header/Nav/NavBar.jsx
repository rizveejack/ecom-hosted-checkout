import Link from "next/link"

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
                        <Link href="/" className="active" aria-label="Toggle navigation">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="dd-menu collapsed" href="/dashbord" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Dashbord</Link>
                        <ul className="sub-menu collapse" id="submenu-1-2">
                            <li className="nav-item"><Link href="/dashbord/profile">Profile</Link></li>
                            <li className="nav-item"><Link href="/cart">Cart</Link></li>
                            <li className="nav-item"><Link href="/dashbord/checkout">Checkout</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="/shop" aria-label="Toggle navigation">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" aria-label="Toggle navigation">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" aria-label="Toggle navigation">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar
