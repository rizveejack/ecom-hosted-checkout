import dynamic from "next/dynamic"
import BannerSection from "./BannerSection"
import CallToAction from "./CallToAction"
import Shipinginfo from "./ShipingInfo"
import Tranding from "./Tranding"


const Slide = dynamic(() => import("./Slide"))


const HomePage = (props) => {
    const { productCategories, products, slider } = props
    return (
        <div>
            <Slide {...slider} />
            <BannerSection {...productCategories} />
            <Tranding {...products} />
            <CallToAction />
            <Shipinginfo />
        </div>
    )
}

export default HomePage
