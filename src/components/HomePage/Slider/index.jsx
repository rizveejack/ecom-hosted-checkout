import Banner from "./Banner"
import Carosel from "./Carosel"

const Slider = () => {
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 custom-padding-right">
                        <div className="slider-head">
                            <div className="tns-outer" id="tns1-ow"><div className="tns-ovh"><div className="tns-inner" ><div className="hero-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
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
                                <Banner {...{ bclass: "style2" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Slider
