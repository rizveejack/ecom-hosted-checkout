import MegaMenu from "./MegaMenu"
import NavBar from "./NavBar"

const Nav = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="nav-inner">
                        <MegaMenu />
                        <NavBar />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">

                    <div className="nav-social">
                        <h5 className="title">Follow Us:</h5>
                        <ul>
                            <li>
                                <a href="#"><i className="lni lni-facebook-filled"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-twitter-original"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-skype"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav
