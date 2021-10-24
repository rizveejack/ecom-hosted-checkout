import Image from "next/image"

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="payment-gateway">
                                <span>We Accept:</span>
                                <Image
                                    src="/images/footer/credit-cards-footer.png" alt="payment"
                                    width={200}
                                    height={25}
                                    layout="fixed"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="copyright">
                                <p>Designed and Developed by<a href="https://graygrids.com/" rel="nofollow noreferrer" target="_blank">GrayGrids</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="socila">
                                <li>
                                    <span>Follow Us On:</span>
                                </li>
                                <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="#"><i className="lni lni-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
