import BannerSection from "./BannerSection"
import CallToAction from "./CallToAction"
import Shipinginfo from "./ShipingInfo"
import Slide from "./Slide"
import Tranding from "./Tranding"


const HomePage = (props) => {
    const { productCategories, products } = props
    return (
        <div>
            <Slide {...products} />
            <BannerSection {...productCategories} />
            <Tranding {...products} />
            <CallToAction />
            <Shipinginfo />
        </div>
    )
}

export default HomePage
