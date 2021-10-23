import BannerSection from "./BannerSection"
import CallToAction from "./CallToAction"
import Shipinginfo from "./ShipingInfo"
import Slider from "./Slider"
import Tranding from "./Tranding"


const HomePage = () => {
    return (
        <div>
            <Slider />
            <Tranding />
            <CallToAction />
            <BannerSection />
            <Shipinginfo />
        </div>
    )
}

export default HomePage
