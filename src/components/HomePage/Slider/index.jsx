import Banner from "./Banner"
import Carosel from "./Carosel"

const Slider = () => {
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 custom-padding-right">
                        <div className="slider-head">
                            <div className="tns-outer" id="tns1-ow"><div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw"><div className="hero-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style={{ transform: "translate3d(-50%, 0px, 0px); transition-duration: 0s;" }}>
                                <Carosel />
                            </div></div></div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                <Banner />
                            </div>
                            <div className="col-lg-12 col-md-6 col-12">
                                <Banner />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Slider
