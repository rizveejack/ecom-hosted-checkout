import useRedox from "../../hook/useRedox";
import CartItem from "./CartItem";
import HotLine from "./HotLine";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import TopBar from "./TopBar";
import Wishlist from "./Wishlist";

const Header = () => {
    const { gstate } = useRedox()

    return (
        <div className="header navbar-area">
            <TopBar />
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
                                <HotLine />
                                <div className="navbar-cart">
                                    <Wishlist />
                                    <CartItem />
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
