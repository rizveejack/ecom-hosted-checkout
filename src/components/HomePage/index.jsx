import BannerSection from "./BannerSection"
import CallToAction from "./CallToAction"
import Shipinginfo from "./ShipingInfo"
import Slide from "./Slide"
import Tranding from "./Tranding"


const HomePage = () => {
    return (
        <div>
            <Slide />
            <Tranding />
            <CallToAction />
            <BannerSection />
            <Shipinginfo />
        </div>
    )
}

export default HomePage
