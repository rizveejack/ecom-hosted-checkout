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
                        <Link href="/shop" aria-label="Toggle navigation">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" aria-label="Toggle navigation">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" aria-label="Toggle navigation">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar
