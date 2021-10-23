import useRedox from "../../hook/useRedox";
import CartItem from "./CartItem";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
    const { gstate } = useRedox()

    return (
        <div className="header navbar-area">
            <div className="header-middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-7">
                            <Logo />
                        </div>
                        <div className="col-lg-5 col-md-7 d-xs-none">
                            <Search />
                        </div>
                        <div className="col-lg-4 col-md-2 col-5">
                            <div className="middle-right-area">
                                <div className="nav-hotline">
                                    <i className="lni lni-phone"></i>
                                    <h3>Hotline:
                                        <span>(+100) 123 456 7890</span>
                                    </h3>
                                </div>
                                <div className="navbar-cart">
                                    <div className="wishlist">
                                        <a href="#">
                                            <i className="lni lni-heart"></i>
                                            <span className="total-items">0</span>
                                        </a>
                                    </div>
                                    <div className="cart-items">
                                        <a href="#" className="main-btn">
                                            <i className="lni lni-cart"></i>
                                            <span className="total-items">2</span>
                                        </a>
                                        <CartItem />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default Header
